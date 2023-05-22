import React from "react";

const Reviews = ({ reviews }: { reviews: any[] }) => {
  return (
    <div className="ml-5 mt-2">
      <div>
        <h1 className="text-2xl ">Reviews</h1>
      </div>
      <div>
        {reviews &&
          reviews.map((review: any, i: number) => (
            <div key={i} className="w-5/6">
              <h1>{review.businessName}</h1>
              <h2>{review.serviceName}</h2>
              <p>{review.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
