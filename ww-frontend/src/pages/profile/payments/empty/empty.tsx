import React from "react";
import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";
import BasicModal from "./modal";

const EmptyPayment = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ml-5 mt-2">
      <div>
        <h1 className="text-2xl ">Payments</h1>
      </div>
      <div className="my-10">
        <img
          src="/image/profile/payment.png"
          alt="review"
          className="w-2/6 h-2/6 mx-auto"
        />
        <Button
          sx={{
            color: "white",
            bgcolor: "lime",
            display: "block",
            margin: "auto",
            width: 250,
            ":hover": {
              bgcolor: "green",
            },
          }}
          onClick={handleOpen}
        >
          add button
        </Button>
      </div>
      <BasicModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </div>
  );
};

export default EmptyPayment;
