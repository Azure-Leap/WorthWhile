import React, { useState } from "react";
import AddCardModal from "../empty/modal";
import DeleteModal from "./modal";
import Button from "@mui/material/Button";

const Payment = ({ payments, setPayments }: any) => {
  const [paymentCard, setPaymentCard] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <div className="ml-5 mt-2 ">
      <div>
        <h1 className="text-2xl ">Payments</h1>
      </div>
      <div>
        {payments?.map((payment: any, i: number) => (
          <button
            key={i}
            onClick={() => setPaymentCard(payment)}
            style={{
              zoom: "0.5",
              marginRight: "50px",
              marginTop: "20px",
              marginBottom: "20px",
              height: "210px",
              width: "350px",
              borderRadius: "10px",
              border:
                paymentCard == payment ? "5px solid rgb(6 182 212)" : "none",
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
            <Button
              sx={{
                color: "black",
                font: "20px",
                display: "block",
                marginLeft: "auto",
              }}
              onClick={handleOpen2}
            >
              X
            </Button>
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
      </div>
      <Button
        sx={{
          color: "white",
          bgcolor: "lime",
          display: "block",
          // margin: "auto",
          marginLeft: "100px",
          marginTop: "10px",
          marginBottom: "20px",
          width: 150,
          ":hover": {
            bgcolor: "green",
          },
        }}
        onClick={handleOpen}
      >
        add more card
      </Button>

      <AddCardModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <DeleteModal
        open={open2}
        handleClose={handleClose2}
        handleOpen={handleOpen2}
        payment={paymentCard}
        setPayments={setPayments}
      />
    </div>
  );
};

export default Payment;
