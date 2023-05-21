import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddCardIcon from "@mui/icons-material/AddCard";
import { OrderContext } from "@/context/orderContext";
import { AuthContext } from "@/context/authContext";
import dayjs from "dayjs";
import { AlertContext } from "@/context/alertContext";
import { BASE_URL } from "@/variables";

const PaymentModal = () => {
  const [payments, setPayments] = useState([]);
  const [paymentCard, setPaymentCard] = useState(null);
  const {
    setOpen,
    setModal,
    setService,
    setSelectedGiftcard,
    selectedServices,
    dateNumber,
    staffer,
    setStaffer,
    staffs,
    setSelectedServices,
    selectedGiftcard,
    business,
    setBusiness,
  } = useContext(OrderContext);
  const { user, setUserData } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);

  const totalDuration = selectedServices.reduce((total: any, el: any) => {
    return total + el.duration;
  }, 0);
  const totalPrice = selectedServices.reduce((total: any, el: any) => {
    return total + el.servicePrice.price;
  }, 0);

  const createAppointment = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/appointments`, {
        services: selectedServices,
        userId: user._id,
        totalPrice,
        totalDuration,
        startDate: dateNumber,
        businessId: business._id,
        stafferId: staffer._id,
      });
      const appointment = res.data.appointment;
    } catch (err) {
      console.log("createAppointment err", err);
    } finally {
      setStaffer(null);
      setSelectedServices(null);
      setBusiness(null);
    }
  };
  const addOrderToStaff = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/staffs/order/${staffer._id}`, {
        order: dayjs(dateNumber).format("YYYY-MM-DD HH:mm"),
      });
      const updatedStaff = res.data.staff;
    } catch (err) {
      console.log("addOrderToStaff err", err);
    } finally {
      setService(null);
    }
  };
  const removeGiftcard = async () => {
    if (selectedGiftcard) {
      try {
        const res = await axios.put(`${BASE_URL}/users/giftcard/${user._id}`, {
          giftcardId: selectedGiftcard._id,
        });
        setUserData(res.data.user);
      } catch (err) {
        console.log("removeGiftcard err", err);
      } finally {
        setSelectedGiftcard(null);
      }
    }
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/payments?userId=${user?._id}`)
      .then((res) => {
        setPayments(res.data.paymentCards);
        setPaymentCard(res.data.paymentCards[0]);
      })
      .catch((err) => {
        console.log("err", err);
      });

    if (!staffer) {
      const isAvailable = (staff: any) => {
        return !staff.orders.includes(
          dayjs(dateNumber).format("YYYY-MM-DD HH:mm")
        );
      };
      const availableStaffs = staffs.filter(isAvailable);
      setStaffer(availableStaffs[0]);
    }
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "relative", marginTop: "-15px" }}>
        <button>
          <ArrowBackIosIcon
            onClick={() => {
              setModal("ConfirmModal");
            }}
            sx={{ position: "absolute", top: "5px", left: "-20px" }}
          />
        </button>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "medium",
            textAlign: "center",
            marginTop: "-24px",
          }}
        >
          Payment
        </Typography>
        <button
          onClick={() => {
            setOpen(false);
            setModal("BookModal");
            setService(null);
            setSelectedGiftcard(null);
            setStaffer(null);
            setSelectedServices([]);
          }}
        >
          <CloseIcon
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
      <Box sx={{ marginTop: "10px" }}>
        <Typography sx={{ fontSize: "20px", marginBottom: "10px" }}>
          Choose Payment Card
        </Typography>
        {payments.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AddCardIcon sx={{ fontSize: "100px", color: "#E6E5E5" }} />
            <Button>Add Payment Card</Button>
          </Box>
        ) : (
          <Box>
            {payments.map((payment: any, i: any) => (
              <button
                key={i}
                onClick={() => setPaymentCard(payment)}
                style={{
                  zoom: "0.5",
                  marginRight: "50px",
                  height: "200px",
                  width: "350px",
                  borderRadius: "10px",
                  border:
                    paymentCard == payment
                      ? "5px solid rgb(6 182 212)"
                      : "none",
                  backgroundImage:
                    payment.bankName == "Golomt bank"
                      ? "linear-gradient(to right top, #84BAE9, #164E80)"
                      : payment.bankName == "Khaan bank"
                      ? "linear-gradient(to right top, #E5493E, #630F09)"
                      : payment.bankName == "Khas bank"
                      ? "linear-gradient(to right top, #ADDE34, #506D06)"
                      : "linear-gradient(to right top, #D8D8D6, #727270)",
                  boxShadow:
                    paymentCard == payment
                      ? "0 0 15px 1px rgba(0, 0, 0, 0.5)"
                      : "none",
                  boxSizing: "content-box",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ padding: "12px" }}>
                    <img
                      style={{ width: "50px" }}
                      src="https://i.imgur.com/PEKNCj9.png"
                    />
                  </div>
                  <div style={{ alignSelf: "center", color: "white" }}>
                    <span>{payment.bankName}</span>
                  </div>
                </div>
                <div style={{ padding: "0px 15px" }}>
                  <div style={{ fontSize: "20px", color: "#fff" }}>
                    <span>{payment.cardNumber.substring(0, 4)}</span>{" "}
                    <span>{payment.cardNumber.substring(4, 8)}</span>{" "}
                    <span>{payment.cardNumber.substring(8, 12)}</span>{" "}
                    <span>{payment.cardNumber.substring(12, 16)}</span>
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      padding: "4px 0px",
                      color: "#fff",
                    }}
                  >
                    <span>{payment.expiredDate}</span>
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      padding: "4px 0px",
                      color: "#fff",
                    }}
                  >
                    <span>{payment.ownerName}</span>
                  </div>
                </div>
              </button>
            ))}
            <Box
              sx={{
                width: "100%",
                position: "fixed",
                bottom: 0,
                right: 0,
                padding: "0 3rem 3rem 3rem",
              }}
            >
              <Button
                onClick={() => {
                  createAppointment();
                  addOrderToStaff();
                  removeGiftcard();

                  setOpen(false);
                  setModal("BookModal");

                  setMessage("Amjilttai zahiallaa");
                  setStatus("success");
                }}
                className="bg-cyan-500"
                variant="contained"
                sx={{
                  color: "white",
                  width: "100%",
                }}
              >
                Pay
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PaymentModal;
