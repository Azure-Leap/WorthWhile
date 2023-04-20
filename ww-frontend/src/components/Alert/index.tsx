import { useContext } from "react";
import { Snackbar, Alert } from "@mui/material";
import React from "react";
import { AlertContext } from "@/context/alertContext";

const AlertComponent = () => {
  const { isAlert, setAlert, status, message } = useContext(AlertContext);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isAlert}
      onClose={() => {
        setAlert(false);
      }}
      autoHideDuration={3000}
    >
      <Alert severity={status}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertComponent;
