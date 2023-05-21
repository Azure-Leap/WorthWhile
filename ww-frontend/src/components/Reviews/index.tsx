import React, { useContext, useEffect } from "react";
import { Rating } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { ReviewContext } from "@/context/reviewContext";

const Reviews = ({ business }: any) => {
  const { appointments, reviews } = useContext(ReviewContext);
  console.log("apps", appointments);
  const arr = appointments?.filter((el: any) => el.businessId == business._id);
  console.log("appBybus arr", arr);

  const value = 2;
  return (
    <>
      <div className="flex items-center">
        <p style={{ color: "grey", fontSize: "12px", marginRight: "15px" }}>
          Reviews are no joke! WorthWhile values authentic reviews and only
          verifies them if we know the reviewer has visited this business.
        </p>
        <div className="border-[1px] flex rounded-md">
          <div className="flex flex-col items-center p-3 border-r border-gray-50">
            <p>
              <span className="text-[30px] mr-[2px] leading-none">{value}</span>
              <span className="text-[14px]">/5</span>
            </p>
            <Rating
              name="read-only"
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
      <div>
        <input
          type="text"
          style={{
            border: "1px solid black",
            display: arr?.length > 0 ? "block" : "none",
          }}
        />
      </div>
      <div>
        {reviews?.map((review: any, i: any) => (
          <div key={i}>{review.text}</div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
