import React, { useContext, useEffect, useState } from "react";
import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { BASE_URL } from "@/variables";
import { AlertContext } from "@/context/alertContext";
import PasswordModal from "./passwordModal";

const Settings = () => {
  const { user, setUserData } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChanged, setChanged] = useState(false);
  const { setMessage, setStatus } = useContext(AlertContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
    }
  }, [user]);

  const update = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${user._id}`, {
        userName,
        email,
        phoneNumber,
      });
      setUserData(res.data.user);
      console.log(res);
      setMessage(res.data.message);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage("Алдаа!");
    }
  };

  return (
    <SideLayout>
      <div className="ml-5 mt-2">
        <div>
          <h1 className="text-2xl ">Account & Settings</h1>
        </div>
        <div>
          <h2 className="mt-10 mb-5  text-xl">Account Details</h2>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            autoComplete="userName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setChanged(true);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type=""
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setChanged(true);
            }}
          />

          <TextField
            margin="normal"
            fullWidth
            id="number"
            label="Number"
            name="number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setChanged(true);
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            disabled
            id="outlined-disabled"
            label="Password"
            defaultValue="*************"
          />
          <PasswordModal
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />

          {isChanged === true && (
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
              Submit
            </Button>
          )}
        </div>
      </div>
    </SideLayout>
  );
};

export default Settings;
