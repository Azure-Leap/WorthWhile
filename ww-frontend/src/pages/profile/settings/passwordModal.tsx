import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";

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

export default function PasswordModal({ handleOpen, handleClose, open }: any) {
  const { user, setUser } = useContext(AuthContext);
  console.log(user?.password);
  const { setMessage, setStatus } = useContext(AlertContext);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const changeOldPassword = (e: any) => {
    setOldPassword(e.target.value);
  };
  const changeNewPassword = (e: any) => {
    setNewPassword(e.target.value);
  };
  const changeReNewPassword = (e: any) => {
    setReNewPassword(e.target.value);
  };

  const update = async () => {
    if (!oldPassword || !newPassword || !reNewPassword) {
      setStatus("error");
      setMessage("Бүрэн бөглөнө үү!");
      return;
    }

    if (newPassword !== reNewPassword) {
      setStatus("error");
      setMessage("Шинэ нууц үг хоорондоо таарахгүй байна!");
      return;
    }
    try {
      const res = await axios.put(`http://localhost:8888/users/${user._id}`, {
        newPassword,
        oldPassword,
      });
      setNewPassword(res.data.user);
      setMessage(res.data.message);
      setStatus("success");
      handleClose();
    } catch (error) {
      setStatus("error");
      setMessage("Хуучин нууц үг буруу байна!");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Change password</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Old password"
            type="password"
            id="password"
            value={oldPassword}
            autoComplete="new-password"
            onChange={changeOldPassword}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={newPassword}
            autoComplete="new-password"
            onChange={changeNewPassword}
          />
          <TextField
            margin="normal"
            fullWidth
            name="re-password"
            label="Re-Password"
            type="password"
            id="re-password"
            value={reNewPassword}
            autoComplete="re-password"
            onChange={changeReNewPassword}
          />
          <Button
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              bgcolor: "lime",
              ":hover": {
                bgcolor: "green",
              },
            }}
            fullWidth
            variant="contained"
            onClick={update}
          >
            Confirm change
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
