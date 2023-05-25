import React, { useContext, useState } from "react";
import { AlertContext } from "@/context/alertContext";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { BASE_URL } from "@/variables";
import CloseIcon from "@mui/icons-material/Close";

const DeleteCard = ({ handleClose, payment, setPayments }: any) => {
  const { setMessage, setStatus } = useContext(AlertContext);

  const deletePayment = async () => {
    try {
      const res = await axios.delete(`${BASE_URL}/payments/${payment._id}`);
      console.log(res.data.payment);
      setMessage(res.data.message);
      setStatus("success");
      handleClose();
      setPayments(null);
    } catch (error) {
      setStatus("error");
      setMessage("Алдаа!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Are you sure?
        </Typography>
        <button>
          <CloseIcon
            onClick={() => {
              handleClose();
            }}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </button>
        <Box component="form" sx={{ mt: 3, display: "flex" }}>
          <Button
            fullWidth
            sx={{ bgcolor: "lime", marginRight: "20px", color: "white" }}
            onClick={deletePayment}
          >
            YES
          </Button>

          <Button
            fullWidth
            sx={{ bgcolor: "lime", color: "white" }}
            onClick={handleClose}
          >
            NO
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DeleteCard;
