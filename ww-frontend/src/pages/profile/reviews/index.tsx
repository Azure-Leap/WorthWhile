import React from "react";
import SideLayout from "@/components/SideLayout";

const Profile = () => {
  return (
    <SideLayout>
      <div className="ml-5 mt-2">
        <div>
          <h1 className="text-2xl ">Reviews</h1>
        </div>
        <div className="my-20">
          <img
            src="/image/profile/review.png"
            alt="review"
            className="w-1/6 h-1/6 mx-auto"
          />
          <h2 className="text-xl text-center my-5 ">Your reviews</h2>
          <p className="text-gray-500 text-center">
            Share experiences after your appointments! All of your reviews will
            show up here.
          </p>
        </div>
      </div>
    </SideLayout>
  );
};

export default Profile;
