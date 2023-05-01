import React from "react";
import SideLayout from "@/components/SideLayout";

interface IReviews {
  businessName: string;
  serviceName: string;
  reviewDate: Date;
  rating: number;
  text: string;
  // replies: [object];
}

const Reviews = ({ apps }: { apps: IReviews[] }) => {
  return (
    <div className="ml-5 mt-2">
      <div>
        <h1 className="text-2xl ">Reviews</h1>
      </div>
      <div>
        {apps.map((app: IReviews, i: number) => (
          <div key={i} className="w-5/6">
            <h1>{app.businessName}</h1>
            <h2>{app.serviceName}</h2>
            <p>{app.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
