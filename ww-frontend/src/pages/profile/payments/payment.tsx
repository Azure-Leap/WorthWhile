import React from "react";

interface IPayment {
  paymentType: String;
}

const Payment = ({ apps }: { apps: IPayment[] }) => {
  return (
    <div className="ml-5 mt-2 ">
      <div>
        <h1 className="text-2xl ">Payments</h1>
      </div>
      <div>
        {apps.map((app: IPayment, i: number) => (
          <div
            key={i}
            className="flex my-10 border-gray-300 border-2 rounded-xl p-5 min-w-full shadow-xl "
          >
            <div className="border-r-2 w-96">
              <h1 className="text-2xl font-bold">{app.paymentType}</h1>
              {/* <div className="flex my-2">
                <h3 className="pl-2">{app.amount}</h3>
              </div>
            </div>
            <div className="pl-5 flex items-center">{app.cardNumber}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
