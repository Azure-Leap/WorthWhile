import React, { useContext, useEffect, useState } from "react";
import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AuthContext } from "@/context/authContext";
import axios from "axios";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
      setEmail(user.email);
      setNumber(user.phoneNumber);
    }
  }, [user]);

  const update = async () => {
    try {
      const up = await axios.put(`http://localhost:8888/users/${user._id}`, {
        name,
        email,
        number,
      });
      console.log(up);
    } catch (error) {
      console.log("Error", error);
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
            onChange={(e) => setUserName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            fullWidth
            id="number"
            label="Number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
            Submit
          </Button>
        </div>
      </div>
    </SideLayout>
  );
};

export default Settings;
