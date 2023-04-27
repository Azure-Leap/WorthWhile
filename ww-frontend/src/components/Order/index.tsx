import React, { useContext } from "react";
import { Box, Modal } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import BookModal from "@/components/Modals/BookModal";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import PaymentModal from "@/components/Modals/PaymentModal";
import { OrderContext } from "@/context/orderContext";

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
  p: 4,
};

const OrderComponent = () => {
  const { open, modal } = useContext(OrderContext);
  return (
    <Modal open={Boolean(open)}>
      <Box sx={style}>
        {(modal == "BookModal" && <BookModal />) ||
          (modal == "ConfirmModal" && <ConfirmModal />) ||
          (modal == "PaymentModal" && <PaymentModal />)}
      </Box>
    </Modal>
  );
};

export default OrderComponent;
