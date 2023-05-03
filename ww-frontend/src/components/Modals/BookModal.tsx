import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography } from "@mui/material";
import { OrderContext } from "@/context/orderContext";
import dayjs from "dayjs";

const BookModal = () => {
  const {
    setOpen,
    setModal,
    services,
    staffer,
    setStaffer,
    staffs,
    setDateNumber,
    dateNumber,
    times,
    dateS,
    changeDate,
  } = useContext(OrderContext);

  const [index, setIndex] = useState(0);
  const [indexDay, setIndexDay] = useState(0);

  const getAnyone = () => {
    // if (!staffer) {
    //   staffs.map((staff: any) => {
    //     staff.orders.
    //   }
    // }
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          marginTop: "-15px",
          paddingBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          May 2023
        </Typography>
        <CloseIcon
          onClick={() => {
            setOpen(false);
            setStaffer(null);
            setDateNumber(null);
          }}
          sx={{ position: "absolute", top: "5px", right: "-15px" }}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gridGap: "10px",
          paddingBottom: "20px",
        }}
      >
        {dateS.map((el: any, i: number) => (
          <Box
            onClick={
              el.open
                ? () => {
                    setIndexDay(i);
                    changeDate(el.day);
                    setStaffer(null);
                  }
                : () => {}
            }
            key={i}
            sx={{
              padding: "15px 0",
              border: indexDay === i ? "rgb(8 145 178)" : "1px solid #E6E5E5",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: indexDay === i ? "rgb(6 182 212)" : "none",
            }}
          >
            <Typography
              sx={{
                color: indexDay === i ? "white" : "grey",
                fontSize: "12px",
                marginBottom: "12px",
              }}
            >
              {dayjs(el.day).format("ddd")}
            </Typography>
            <Typography sx={{ color: indexDay === i ? "white" : "grey" }}>
              {dayjs(el.day).format("DD")}
            </Typography>
          </Box>
        ))}
      </Box>
      <hr />
      <Box sx={{ margin: "0 auto", width: "60%" }}>
        <Box
          sx={{
            display: "flex",
            margin: "20px 0 30px 0",
            backgroundColor: "#E6E5E5",
            borderRadius: "8px",
            padding: "4px 5px",
          }}
        >
          {["Morning", "Afternoon", "Evening"].map((el, i) => (
            <button
              onClick={() => setIndex(i)}
              key={i}
              style={{
                width: "calc(100%/3)",
                borderRadius: "8px",
                padding: "5px",
                backgroundColor: index === i ? "white" : "transparent",
                boxShadow: index === i ? "0 0 4px 0 rgba(0,0,0,0.1)" : "none",
              }}
            >
              {el}
            </button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gridGap: "7px",
        }}
      >
        {times.map((el: any, i: any) => (
          <button
            onClick={() => {
              setDateNumber(el);
              setStaffer(null);
            }}
            key={i}
            style={{
              backgroundColor:
                el === dateNumber ? "rgb(6 182 212)" : "transparent",
              color: el === dateNumber ? "white" : "grey",
              border:
                el === dateNumber ? "rgb(8 145 178)" : "1px solid #E6E5E5",
              borderRadius: "8px",
            }}
          >
            {dayjs(el).format("HH:mm")}
          </button>
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: "#E6E5E5",
          margin: "30px 0",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>{services[0].serviceName}</Typography>
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={{ textAlign: "end" }}>
              ₮
              {services[0].servicePrice.isMin
                ? services[0].servicePrice.price + "+"
                : services[0].servicePrice.price}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              {dayjs(dateNumber).format("HH:mm")} -{" "}
              {dayjs(dateNumber + services[0].duration * 60 * 1000).format(
                "HH:mm"
              )}
            </Typography>
          </Box>
        </Box>
        <hr style={{ borderTop: "1px solid #D6D5D5" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "25px", height: "25px", marginRight: "6px" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={
                  staffer
                    ? staffer.staffImg
                    : "https://laneip.com/wp-content/uploads/2022/11/placeholder_pale.png"
                }
                alt="userImg"
              />
            </Box>
            <Typography sx={{ fontSize: "14px" }}>
              {staffer ? staffer.stafferName : "Anyone"}
            </Typography>
          </Box>
          <button
            onClick={() => setModal("ChooseStaffer")}
            style={{
              backgroundColor: "white",
              padding: "5px 20px",
              borderRadius: "20px",
              border: "1px solid #D6D5D5",
              fontSize: "14px",
            }}
          >
            Change
          </button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <AddIcon sx={{ color: "rgb(6 182 212)" }} />
        <Typography sx={{ color: "rgb(6 182 212)" }}>
          Add another service
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          borderTop: "1px solid #E6E5E5",
          position: "sticky",
          bottom: 0,
          right: 0,
          backgroundColor: "white",
          paddingBottom: "2rem",
        }}
      >
        <Box sx={{ textAlign: "end", marginRight: "30px", padding: "20px 0" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", color: "grey", marginRight: "20px" }}
            >
              Total:
            </Typography>
            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              ₮
              {services[0].servicePrice.isMin
                ? services[0].servicePrice.price + "+"
                : services[0].servicePrice.price}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "14px", color: "grey" }}>
            {services[0].duration}min
          </Typography>
        </Box>
        <Button
          className="bg-cyan-500"
          variant="contained"
          onClick={() => {
            setModal("ConfirmModal");
            getAnyone();
          }}
          sx={{ width: "100%", color: "white" }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:8888/business/${query.businessId}`);
  const data = await res.json();
  const res2 = await fetch(
    `http://localhost:8888/business/staffs?businessId=${query.businessId}`
  );
  const data2 = await res2.json();
  const res3 = await fetch(
    `http://localhost:8888/business/services?businessId=${query.businessId}`
  );
  const data3 = await res3.json();
  return {
    props: {
      business: data.business,
      staffs: data2.staffs,
      services: data3.services,
    },
  };
}

export default BookModal;
