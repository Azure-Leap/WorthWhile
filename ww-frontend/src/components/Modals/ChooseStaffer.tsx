import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { OrderContext } from "@/context/orderContext";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import dayjs from "dayjs";

const ChooseStaffer = () => {
  const { setOpen, setModal, staffs, staffer, setStaffer, dateNumber } =
    useContext(OrderContext);

  return (
    <Box>
      <Box sx={{ position: "relative", marginTop: "-15px" }}>
        <ArrowBackIosIcon
          onClick={() => setModal("BookModal")}
          sx={{ position: "absolute", top: "5px", left: "-15px" }}
        />
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "medium",
            textAlign: "center",
          }}
        >
          Choose Staffer
        </Typography>
        <CloseIcon
          onClick={() => {
            setOpen(false);
            setModal("BookModal");
            setStaffer(null);
          }}
          sx={{ position: "absolute", top: "5px", right: "-15px" }}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            padding: "20px",
            borderBottom: "1px solid #E6E5E5",
          }}
        >
          <Box
            onClick={() => {
              setStaffer(null);
              setModal("BookModal");
            }}
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "20px",
              borderRadius: "50%",
              border: staffer ? "none" : "2px solid rgb(8 145 178)",
              padding: "2px",
              position: "relative",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid rgb(192,192,192)",
              }}
              src="https://laneip.com/wp-content/uploads/2022/11/placeholder_pale.png"
              alt="anyone"
            />
            <CheckCircleIcon
              sx={{
                position: "absolute",
                right: "0px",
                top: "0px",
                display: staffer ? "none" : "block",
                fontSize: "14px",
                color: "rgb(8 145 178)",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box>
            <Typography>Anyone</Typography>
            <Typography sx={{ color: "green", fontSize: "12px" }}>
              Highest availability
            </Typography>
          </Box>
        </Box>
        {staffs.map((el: any, i: any, arr: any) => {
          const isAvailable = el.orders.includes(
            dayjs(dateNumber).format("YYYY-MM-DD HH:mm")
          )
            ? false
            : true;
          return (
            <Box
              key={i}
              sx={{
                opacity: isAvailable ? 1 : 0.5,
                display: "flex",
                padding: "20px",
                borderBottom:
                  i === arr.length - 1 ? "none" : "1px solid #E6E5E5",
              }}
            >
              <button
                onClick={
                  isAvailable
                    ? () => {
                        setStaffer(el);
                        setModal("BookModal");
                      }
                    : () => {}
                }
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "20px",
                  borderRadius: "50%",
                  border: staffer === el ? "2px solid rgb(8 145 178)" : "none",
                  padding: "2px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={el.staffImg}
                  alt="staffer"
                />
                <CheckCircleIcon
                  sx={{
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                    display: staffer === el ? "block" : "none",
                    fontSize: "14px",
                    color: "rgb(8 145 178)",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
              </button>
              <Box>
                <Typography>{el.stafferName}</Typography>
                <Typography
                  sx={{
                    color: isAvailable ? "green" : "red",
                    fontSize: "12px",
                  }}
                >
                  {isAvailable ? "Available" : "Not Available"}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ChooseStaffer;
