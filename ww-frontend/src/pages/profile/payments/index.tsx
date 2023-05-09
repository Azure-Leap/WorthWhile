import React, { useState } from "react";
import SideLayout from "@/components/SideLayout";
import EmptyPayment from "./empty/empty";
import Payment from "./payment";

interface IPayment {
  paymentType: String;
}

export default function App() {
  const [apps, setApps] = useState<IPayment[]>([
    // {
    //   paymentType: "Payment",
    // },
  ]);

  return (
    <SideLayout>
      {apps.length ? <Payment apps={apps} /> : <EmptyPayment />}
      <div>
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
