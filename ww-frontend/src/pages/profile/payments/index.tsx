import React, { useState, useEffect, useContext } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyPayment from "./empty/empty";
import Payment from "./payment/payment";
import axios from "axios";
import { BASE_URL } from "@/variables";
import { AuthContext } from "@/context/authContext";

export default function App() {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/payments?userId=${user?._id}`)
      .then((res) => {
        setPayments(res.data.paymentCards);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [user, payments]);

  return (
    <SideLayout>
      {payments?.length ? (
        <Payment setPayments={setPayments} payments={payments} />
      ) : (
        <EmptyPayment />
      )}
      <div className="ml-5">
        <h4>PAYMENT HISTORY</h4>
        <div className="my-10">
          <img
            src="/image/profile/receipts.png"
            alt="review"
            className="w-1/6 h-1/6 mx-auto"
          />
          <h2 className="text-xl text-center my-5 ">Your Receipts</h2>
          <p className=" text-xl text-center text-gray-700">
            Your completed transactions will appear here
          </p>
        </div>
      </div>
    </SideLayout>
  );
}
