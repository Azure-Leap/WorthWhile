import React from "react";

const EmptyGiftCard = () => {
  return (
    <div className="ml-5 mt-2">
      <div>
        <h1 className="text-2xl ">Gift Cards</h1>
      </div>
      <div className="my-20">
        <img
          src="/image/profile/giftCard.png"
          alt="review"
          className="w-1/6 h-1/6 mx-auto"
        />
        <h2 className="text-xl text-center my-5 ">Your Gift Cards</h2>
        <p className="text-gray-500 text-center">
          Find them here! You can get a gift card from a friend or buy one
          yourself.
        </p>
      </div>
    </div>
  );
};

export default EmptyGiftCard;
