import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import BookModal from "@/components/Modals/BookModal";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import PaymentModal from "@/components/Modals/PaymentModal";

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
};

const test = () => {
  const [open, setOpen] = useState<Boolean>(true);
  const [modal, setModal] = useState<String>("BookModal");

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Book</Button>
      <Modal open={Boolean(open)}>
        <Box sx={style}>
          {(modal == "BookModal" && <BookModal />) ||
            (modal == "ConfirmModal" && <ConfirmModal />) ||
            (modal == "PaymentModal" && <PaymentModal />)}
        </Box>
      </Modal>
    </Box>
  );
};

export default test;
