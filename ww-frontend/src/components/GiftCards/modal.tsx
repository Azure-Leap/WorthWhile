import React, { useContext, useEffect, useState } from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import { AuthContext } from "@/context/authContext";
import CloseIcon from "@mui/icons-material/Close";
import AddCardIcon from "@mui/icons-material/AddCard";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 770,
  minWidth: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: 24,
  p: "3rem 3rem 0 3rem",
  height: "700px",
  overflowY: "auto",
};

const GiftCardPaymentModal = ({ open, setOpen, selectedGiftCard }: any) => {
  const [payments, setPayments] = useState([]);
  const [paymentCard, setPaymentCard] = useState(null);
  const { user, setUserData } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/users/payments?userId=${user?._id}`)
      .then((res) => {
        setPayments(res.data.paymentCards);
        setPaymentCard(res.data.paymentCards[0]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const addGiftcard = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8888/users/giftcard/${user?._id}`,
        {
          giftCard: { ...selectedGiftCard, isUsed: false },
        }
      );
      const updatedUser = res.data.user;
      setUserData(updatedUser);
    } catch (err) {
      console.log("addGiftCard err", err);
    }
  };

  return (
    <Modal open={Boolean(open)}>
      <Box sx={style}>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "relative", marginTop: "-15px" }}>
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
              </Box>
            )}
          </Box>
          <Box
            sx={{
              width: "100%",
              position: "fixed",
              bottom: 0,
              right: 0,
              backgroundColor: "white",
              padding: "0 3rem 3rem 3rem",
            }}
          >
            <hr style={{ borderTop: "1px solid #E6E5E5" }} />
            <Box sx={{ textAlign: "end", padding: "20px 0" }}>
              <Typography sx={{ fontSize: "14px", color: "grey" }}>
                Total to pay
              </Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: "medium" }}>
                ₮{selectedGiftCard?.price},000
              </Typography>
            </Box>
            <Button
              className="bg-cyan-500"
              variant="contained"
              onClick={() => {
                addGiftcard();
                setOpen(false);
              }}
              sx={{ width: "100%", color: "white" }}
            >
              Pay
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default GiftCardPaymentModal;
