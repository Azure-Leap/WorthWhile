import React from "react";
import SideLayout from "@/components/SideLayout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Settings = () => {
  const getUser = async () => {
    try {
      const result = await axios.get("http://localhost:8888/signin");
      console.log(result.data);
    } catch (error) {
      console.log("Алдаа гарлаа", error);
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
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            defaultValue={"Ashid"}
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
            defaultValue={"email123@gmail.com"}
          />

          <TextField
            margin="normal"
            fullWidth
            id="number"
            label="Number"
            name="number"
            type="number"
          />
          <Button
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "lime",
              ":hover": {
                bgcolor: "green",
              },
            }}
            type="submit"
            fullWidth
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </div>
    </SideLayout>
  );
};

export default Settings;
