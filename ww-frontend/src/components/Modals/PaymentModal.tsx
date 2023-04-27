import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { OrderContext } from "@/context/orderContext";

const PaymentModal = () => {
  const { setOpen, setModal } = useContext(OrderContext);
  return (
    <Box>
      <Box sx={{ position: "relative", marginTop: "-15px" }}>
        <ArrowBackIosIcon
          onClick={() => setModal("ConfirmModal")}
          sx={{ position: "absolute", top: "5px", left: "-15px" }}
        />
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Payment
        </Typography>
        <CloseIcon
          onClick={() => {
            setOpen(false);
            setModal("BookModal");
          }}
          sx={{ position: "absolute", top: "5px", right: "-15px" }}
        />
      </Box>
    </Box>
  );
};

export default PaymentModal;
