import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CardDetail from "./cardDetail";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddCardModal = ({ open, handleClose, handleOpen }: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <CardDetail handleClose={handleClose} />
      </Box>
    </Modal>
  );
};

export default AddCardModal;
