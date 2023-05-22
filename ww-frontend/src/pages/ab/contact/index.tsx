import React from "react";
import SideLayout2 from "@/components/SideLayout2";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Profile = () => {
  return (
    <SideLayout2>
      <div className="ml-5 mt-2 ">
        <div>
          <h1 className="text-2xl font-semibold ">Contact Us</h1>
        </div>
        <div className="flex items-end mt-10">
          <div className="mr-10">
            <TextField
              fullWidth
              margin="normal"
              id="yourName"
              label="Your Name"
              name="yourName"
              autoComplete="yourName"
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              label="Email Adress"
              name="email"
              type=""
              autoComplete="email"
            />
            <TextField
              fullWidth
              margin="normal"
              id="message"
              label="Leave a Message"
              name="message"
            />
            <Button sx={{marginTop:3, bgcolor:"#06b6d4", color:"white"}} fullWidth>Send message</Button>
          </div>
          <div>
            <img
              src="/image/about/contact.png"
              alt="contact"
              className="w-72"
            />
          </div>
        </div>
      </div>
    </SideLayout2>
  );
};

export default Profile;
