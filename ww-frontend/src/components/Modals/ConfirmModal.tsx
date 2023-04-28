import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { OrderContext } from "@/context/orderContext";

const ConfirmModal = () => {
  const { setOpen, setModal } = useContext(OrderContext);
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
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Confirm Details
        </Typography>
        <CloseIcon
          onClick={() => {
            setOpen(false);
            setModal("BookModal");
          }}
          sx={{ position: "absolute", top: "5px", right: "-15px" }}
        />
      </Box>
      <Button
        onClick={() => setModal("PaymentModal")}
        variant="contained"
        sx={{ backgroundColor: "rgb(6 182 212)", width: "100%" }}
      >
        Book
      </Button>
    </Box>
  );
};

export default ConfirmModal;
