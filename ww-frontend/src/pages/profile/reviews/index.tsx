import React, { useContext, useState } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyReviews from "./empty";
import Reviews from "./reviews";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { BASE_URL } from "@/variables";

export default function App() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/users/appointments?userId=${user?._id}`
      );
      setReviews(res.data.reviews);
    } catch (error) {
      console.log("Error", error);
    }
  };
  user && getReviews();

  return (
    <SideLayout>
      {reviews?.length ? <Reviews reviews={reviews} /> : <EmptyReviews />}
    </SideLayout>
  );
}
