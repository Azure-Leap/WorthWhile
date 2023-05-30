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

  const addReview = async (
    selectedAppointmentId: any,
    text: any,
    rating: any
  ) => {
    try {
      const res = await axios.post(`${BASE_URL}/reviews`, {
        appointmentId: selectedAppointmentId,
        text,
        rating,
      });
      const addedReview = res.data.review;
      setReview(addedReview);
    } catch (err) {
      console.log("addReview err", err);
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
        addReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
