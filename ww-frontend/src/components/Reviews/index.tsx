import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { ReviewContext } from "@/context/reviewContext";
import ReviewCard from "./card";
import SpeakerNotesOffOutlinedIcon from "@mui/icons-material/SpeakerNotesOffOutlined";

const Reviews = ({ business }: any) => {
  const { appointments, reviews } = useContext(ReviewContext);
  const arr = appointments?.filter((el: any) => el.businessId == business._id);

  const value =
    reviews.reduce((total: any, el: any) => {
      return total + el.rating;
    }, 0) / reviews.length;
  return (
    <>
      <div className=" grid sm:grid-cols-5 grid-cols-1 items-center pb-[30px]">
        <p
          className="sm:col-span-2 col-span-1"
          style={{
            color: "grey",
            fontSize: "12px",
            margin: "0px 15px 10px 0",
          }}
        >
          Reviews are no joke! WorthWhile values authentic reviews and only
          verifies them if we know the reviewer has visited this business.
        </p>
        <div className="border-[1px] flex rounded-md sm:col-span-3 col-span-1">
          <div className="flex flex-col items-center p-3 border-r border-gray-50">
            <p>
              <span className="text-[30px] mr-[2px] leading-none">
                {value.toFixed(1)}
              </span>
              <span className="text-[14px]">/5</span>
            </p>
            <Rating
              name="half-rating-read"
              precision={0.5}
              value={value}
              readOnly
              emptyIcon={
                <StarRoundedIcon style={{ opacity: 0.55, fontSize: "40px" }} />
              }
              icon={<StarRoundedIcon style={{ fontSize: "40px" }} />}
            />
            <p className="text-gray-400 text-[12px]">Based on {} reviews</p>
          </div>
          <div className=" p-4 my-auto">
            {[5, 4, 3, 2, 1].map((el, i) => (
              <div key={i} className="flex items-center my-[2px]">
                <div className="w-[8px]">
                  <p className="text-[10px] text-gray-500 text-center">{el}</p>
                </div>
                <StarRoundedIcon
                  sx={{
                    fontSize: "12px",
                    marginRight: "3px",
                    color: "rgb(239 178 61)",
                  }}
                />
                <div className="w-[80px] h-[3px] bg-gray-300 relative">
                  <div
                    style={{
                      width: "60px",
                      height: "3px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundColor: "rgb(239 178 61)",
                    }}
                  ></div>
                </div>
                <p className="text-[10px]">count</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-full grid grid-cols-5 gap-[5px] pb-[30px] border-b-[1px] ${
          arr?.length > 0 ? "block" : "hidden"
        }`}
      >
        <div className="col-span-4">
          <input
            className="w-full rounded-md border-[1px] border-cyan-700 h-[30px] p-2 text-[14px]"
            type="text"
            placeholder="Write a review..."
          />
        </div>
        <button className="col-span-1 bg-cyan-500 rounded-md text-white text-[14px] font-medium">
          SUBMIT
        </button>
        <p className="col-span-5 text-[12px]">Please select an appointment</p>
      </div>
      {reviews.length ? (
        <div>
          {reviews?.map((review: any, i: any) => {
            return <ReviewCard key={i} review={review} />;
          })}
        </div>
      ) : (
        <div className="text-center mt-[50px]">
          <SpeakerNotesOffOutlinedIcon
            sx={{ fontSize: "50px", color: "grey", opacity: 0.2 }}
          />
          <p style={{ color: "grey", opacity: 0.5 }}>There is no review</p>
        </div>
      )}
    </>
  );
};

export default Reviews;
