import { useState, createContext, useEffect, useContext } from "react";
import { BASE_URL } from "@/variables";
import axios from "axios";
import { AuthContext } from "./authContext";

export const ReviewContext = createContext<any>(null);

const ReviewProvider = ({ children }: any) => {
  const [appointments, setAppointments] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [review, setReview] = useState<any>(null);
  const [bus, setBus] = useState<any>(null);
  const { user } = useContext(AuthContext);
  const [likedUsers, setLikedUsers] = useState(null);
  const [unlikedUsers, setUnlikedUsers] = useState(null);
  const [update, setUpdate] = useState(false);

  const updateData = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/reviews/${review?._id}`, {
        reaction: { unlikedUsers: unlikedUsers, likedUsers: likedUsers },
      });
      const updatedReview = res.data.review;
      console.log("UPDD", updatedReview);
      setReview(updatedReview);
    } catch (err) {
      console.log("updateData err", err);
    }
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`${BASE_URL}/users/appointments?userId=${user._id}`)
        .then((res) => {
          setAppointments(res.data.appointments);
        })
        .catch((err) => {
          console.log("getAppointments err", err);
        });
    }
    if (bus) {
      axios
        .get(`${BASE_URL}/business/reviews?businessId=${bus._id}`)
        .then((res) => {
          setReviews(res.data.reviews);
        })
        .catch((err) => {
          console.log("getReviews err", err);
        });
    }
  }, [bus, review]);

  useEffect(() => {
    if (update) {
      console.log("upd", update);
      updateData();
    }
  }, [update]);

  return (
    <ReviewContext.Provider
      value={{
        appointments,
        setAppointments,
        reviews,
        setReviews,
        bus,
        setBus,
        review,
        setReview,
        likedUsers,
        setLikedUsers,
        unlikedUsers,
        setUnlikedUsers,
        setUpdate,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
