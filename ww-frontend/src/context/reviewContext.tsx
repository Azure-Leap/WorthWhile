import { useState, createContext, useEffect, useContext } from "react";
import { BASE_URL } from "@/variables";
import axios from "axios";
import { AuthContext } from "./authContext";
import { OrderContext } from "./orderContext";

export const ReviewContext = createContext<any>(null);

const ReviewProvider = ({ children }: any) => {
  const [appointments, setAppointments] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { user } = useContext(AuthContext);
  const { business } = useContext(OrderContext);

  useEffect(() => {
    if (user) {
      axios
        .get(`${BASE_URL}/users/appointments?userId=${user._id}`)
        .then((res) => {
          console.log("appointments", res.data.appointments);
          setAppointments(res.data.appointments);
        })
        .catch((err) => {
          console.log("getAppointments err", err);
        });
    }
    if (business) {
      axios
        .get(`${BASE_URL}/business/reviews?businessId=${business._id}`)
        .then((res) => {
          setReviews(res.data.reviews);
        })
        .catch((err) => {
          console.log("getReviews err", err);
        });
    }
  }, [business]);

  return (
    <ReviewContext.Provider
      value={{ appointments, setAppointments, reviews, setReviews }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
