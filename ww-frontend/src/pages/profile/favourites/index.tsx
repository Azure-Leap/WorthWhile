import React from "react";
import SideLayout from "@/components/SideLayout";

const Profile = () => {
  return (
    <SideLayout>
      <div className="ml-5 mt-2 ">
        <div>
          <h1 className="text-2xl ">Favourite</h1>
        </div>
        <div className="my-20">
          <img
            src="/image/profile/favourite.png"
            alt="review"
            className="w-2/6 h-2/6 mx-auto"
          />
          <p className=" text-xl text-center">
            Here you'll see all of your favourite businesses.
          </p>
        </div>
      </div>
    </SideLayout>
  );
};

export default Profile;
