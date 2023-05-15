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

const BasicModal = ({ open, handleClose, handleOpen }: any) => {
  return (
    <Box>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        Add payment card
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardDetail handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default BasicModal;
