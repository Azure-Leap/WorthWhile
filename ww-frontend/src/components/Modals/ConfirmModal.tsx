import React, { useContext, useState } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import { OrderContext } from "@/context/orderContext";
import dayjs from "dayjs";
import { AuthContext } from "@/context/authContext";
import { Tangerine } from "@next/font/google";

const tangerine = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
});

const ConfirmModal = () => {
  const [giftcard, setGiftcard] = useState(null);
  const [selectedGiftcard, setSelectedGiftCard] = useState(null);
  const {
    setOpen,
    setModal,
    dateNumber,
    selectedServices,
    services,
    business,
    staffer,
    setStaffer,
    setDateNumber,
    setDay,
    setSelectedServices,
    dateS,
  } = useContext(OrderContext);
  const { user } = useContext(AuthContext);

  const year = dayjs(dateNumber).format("YYYY");
  const month = dayjs(dateNumber).format("MMMM");
  const day = dayjs(dateNumber).format("D");
  const weekday = dayjs(dateNumber).format("dddd");
  const duration = selectedServices.reduce((total: any, el: any) => {
    return total + el.duration;
  }, 0);
  const startTime = dayjs(dateNumber).format("HH:mm A");
  const endTime = dayjs(dateNumber + duration * 60 * 1000).format("HH:mm A");
  const duratn = `${Math.floor(duration / 60)}h ${duration % 60}min`;
  const totalPrice = selectedServices.reduce((total: any, el: any) => {
    return total + el.servicePrice.price;
  }, 0);
  const isMinPrice = selectedServices.find(
    (el: any) => el.servicePrice.isMin === true
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "relative", marginTop: "-15px" }}>
        <button>
          <ArrowBackIosIcon
            onClick={() => setModal("BookModal")}
            sx={{ position: "absolute", top: "5px", left: "-20px" }}
          />
        </button>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "start",
            fontWeight: "medium",
            marginTop: "-24px",
          }}
        >
          Confirm Details
        </Typography>
        <button>
          <CloseIcon
            onClick={() => {
              setOpen(false);
              setModal("BookModal");
              setStaffer(null);
              setDateNumber(null);
              setDay(dateS[0]);
              setSelectedServices([]);
            }}
            sx={{
              position: "absolute",
              top: "5px",
              right: "-20px",
              "&:hover": { transform: "rotate(90deg)" },
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </button>
      </Box>
      <Typography
        sx={{ fontSize: "24px", textAlign: "center", fontWeight: "medium" }}
      >{`${weekday}, ${month} ${day} ${year}`}</Typography>
      <Typography
        sx={{ fontSize: "20px", textAlign: "center" }}
      >{`${startTime} - ${endTime} (${duratn})`}</Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          color: "grey",
          fontSize: "16px",
        }}
      >
        {business.businessName}
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgb(243 244 246)",
          margin: "30px 0",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        {selectedServices.map((el: any, i: any) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "15px",
              borderBottom: "1px solid #D6D5D5",
              marginBottom: "15px",
            }}
          >
            <Box>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                {el.serviceName}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "grey" }}>
                {staffer ? staffer.stafferName : "Anyone"}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ textAlign: "end", color: "grey", fontSize: "14px" }}
              >
                ₮
                {el.servicePrice.isMin
                  ? el.servicePrice.price + "+"
                  : el.servicePrice.price}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "grey" }}>
                {dayjs(dateNumber).format("HH:mm A")} -{" "}
                {dayjs(dateNumber + el.duration * 60 * 1000).format("HH:mm A")}
              </Typography>
            </Box>
          </Box>
        ))}
        <Box sx={{}}>
          <Typography sx={{ textAlign: "end" }}>Total</Typography>
          <Typography sx={{ textAlign: "end" }}>
            {isMinPrice ? "₮" + totalPrice + "+" : "₮" + totalPrice}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Typography sx={{ fontSize: "20px" }}>Choose Gift Card</Typography>
        {user.giftCards.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CreditCardOffIcon
              sx={{
                fontSize: "100px",
                color: "#E6E5E5",
                margin: "20px 0",
              }}
            />
            <Typography
              sx={{ color: "grey", fontSize: "14px", marginBottom: "40px" }}
            >
              You don't have any giftcards
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              margin: "20px 0",
              display: "flex",
            }}
          >
            {user.giftCards.map((giftcard: any, i: any) => (
              <Box
                key={i}
                sx={{
                  width: "340px",
                  height: "215px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  zoom: 0.7,
                  marginRight: "40px",
                }}
              >
                <Image
                  width={2000}
                  height={2000}
                  alt="zurag"
                  src={giftcard?.image}
                  className="h-full w-full"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50% ,-50%)",
                  }}
                >
                  <p
                    className={`${tangerine.className}`}
                    style={{
                      fontSize: "40px",
                      color: "rgb(163 68 113)",
                      textAlign: "center",
                    }}
                  >
                    {giftcard.businessId.businessName}
                  </p>
                  <p
                    className={`${tangerine.className}`}
                    style={{
                      zoom: 5,
                      color: "rgb(163 68 113)",
                      textAlign: "center",
                      lineHeight: "10px",
                    }}
                  >
                    {giftcard.amount},000
                  </p>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          bottom: 0,
          right: 0,
          backgroundColor: "white",
          paddingBottom: "3rem",
        }}
      >
        <hr style={{ borderTop: "1px solid #E6E5E5" }} />
        <Box sx={{ textAlign: "end", padding: "20px 0" }}>
          <Typography sx={{ fontSize: "14px", color: "grey" }}>
            Total to pay
          </Typography>
          <Typography sx={{ fontSize: "30px", fontWeight: "medium" }}>
            {isMinPrice ? "₮" + totalPrice + "+" : "₮" + totalPrice}
          </Typography>
        </Box>
        <Button
          className="bg-cyan-500"
          variant="contained"
          onClick={() => {
            setModal("PaymentModal");
          }}
          sx={{ width: "100%", color: "white" }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmModal;
