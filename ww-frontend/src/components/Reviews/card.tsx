import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Rating, useRadioGroup } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import dayjs from "dayjs";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";
import { ReviewContext } from "@/context/reviewContext";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const ReviewCard = ({ review }: any) => {
  const { user } = useContext(AuthContext);
  const [isClickedLike, setIsClickedLike] = useState(
    review.reaction.likedUsers.includes(user?._id)
  );
  const [isClickedUnlike, setIsClickedUnlike] = useState(
    review.reaction.unlikedUsers.includes(user?._id)
  );
  const { setMessage, setStatus } = useContext(AlertContext);
  const {
    setReview,
    likedUsers,
    setLikedUsers,
    unlikedUsers,
    setUnlikedUsers,
    setUpdate,
  } = useContext(ReviewContext);

  const serviceNameArr = review?.appointmentId.services?.map(
    (el: any) => el.serviceName
  );

  const updateLikedUsers = () => {
    if (isClickedLike) {
      const arr = likedUsers?.filter((userId: any) => userId !== user._id);
      setLikedUsers(arr);
    } else {
      setLikedUsers([...likedUsers, user._id]);
    }
    setIsClickedLike(!isClickedLike);
  };

  const updateUnlikedUsers = () => {
    if (isClickedUnlike) {
      const arr = unlikedUsers?.filter((userId: any) => userId !== user._id);
      setUnlikedUsers(arr);
    } else {
      setUnlikedUsers([...unlikedUsers, user._id]);
    }
    setIsClickedUnlike(!isClickedUnlike);
  };

  useEffect(() => {
    setLikedUsers(review.reaction.likedUsers);
    setUnlikedUsers(review.reaction.unlikedUsers);
    setUpdate(false);
    setReview(review);
    return () => {
      setUpdate(true);
    };
  }, []);

  return (
    <div className="py-[20px] border-b-[1px] text-[12px] relative">
      <CloseRoundedIcon
        sx={{
          position: "absolute",
          right: 0,
          top: "5px",
          "&:hover": { transform: "rotate(90deg)" },
          transition: "transform 0.3s ease-in-out",
          fontSize: "18px",
          display:
            user._id === review.appointmentId.userId._id ? "block" : "none",
        }}
      />
      <div>
        <div className="flex justify-between">
          <Rating
            style={{ marginLeft: "-4px", marginBottom: "5px" }}
            name="read-only"
            value={review?.rating}
            readOnly
            emptyIcon={
              <StarRoundedIcon style={{ opacity: 0.55, fontSize: "30px" }} />
            }
            icon={<StarRoundedIcon style={{ fontSize: "30px" }} />}
          />
          <div className="flex items-center">
            <p style={{ color: "grey" }}>
              {review?.appointmentId.userId?.userName}{" "}
            </p>
            <FiberManualRecordIcon
              style={{ fontSize: "5px", margin: "0 2px", color: "grey" }}
            />
            <p style={{ color: "grey" }}>
              {" "}
              {dayjs(review?.createdAt).format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
        <p>{serviceNameArr?.join(", ")}</p>
        <p style={{ color: "grey" }}>
          by {" " + review?.appointmentId.stafferId?.stafferName}
        </p>
      </div>
      <p style={{ fontSize: "14px", margin: "20px 0" }}>{review?.text}</p>
      <div className="flex justify-between mt-[30px]">
        <div className="flex ">
          <button
            onClick={
              user
                ? () => updateLikedUsers()
                : () => {
                    setStatus("error");
                    setMessage("Та эхлээд нэвтэрнэ үү");
                  }
            }
            className={`flex items-center px-[10px] justify-around w-[60px] rounded-[20px] border-[1px] mr-[20px] ${
              isClickedLike === true
                ? "border-cyan-500"
                : "border-gray-300 border-opacity-60"
            }`}
          >
            <p
              className={` ${
                isClickedLike ? "text-cyan-500" : "text-gray-400"
              }`}
            >
              {likedUsers?.length}
            </p>
            <ThumbUpOutlinedIcon
              style={{
                fontSize: "18px",
                color: isClickedLike === true ? "rgb(6 182 212)" : "grey",
                opacity: isClickedLike === true ? 1 : 0.5,
              }}
            />
          </button>
          <button
            onClick={
              user
                ? () => updateUnlikedUsers()
                : () => {
                    setStatus("error");
                    setMessage("Та эхлээд нэвтэрнэ үү");
                  }
            }
            className={`flex items-center px-[10px] justify-around w-[60px] rounded-[20px] border-[1px] ${
              isClickedUnlike === true
                ? "border-cyan-500"
                : "border-gray-300 border-opacity-60"
            }`}
          >
            <p
              className={` ${
                isClickedUnlike ? "text-cyan-500" : "text-gray-400"
              }`}
            >
              {unlikedUsers?.length}
            </p>
            <ThumbUpOutlinedIcon
              style={{
                rotate: "180deg",
                fontSize: "18px",
                color: isClickedUnlike === true ? "rgb(6 182 212)" : "grey",
                opacity: isClickedUnlike === true ? 1 : 0.5,
              }}
            />
          </button>
        </div>
        <div>
          <button
            className={
              "text-[11px] border-[1px] py-[5px] px-[10px] rounded-[20px] flex"
            }
          >
            <p>REPORT</p>
            <ReportProblemRoundedIcon
              style={{
                fontSize: "15px",
                color: "grey",
                opacity: 0.5,
                marginLeft: "3px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

// profile : userId
// reactions : [
//   {
//     title : 'like',
//     people : ['useId1,userId2']
//   },
// ]
// a = people.filter(person => person != UserID)
// set()
// 'id'
// reaction.map(reaction => reaction.people )
