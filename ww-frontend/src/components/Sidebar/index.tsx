import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import moment from "moment";

const Sidebar = ({ business,staffs }: any) => {
  return (
    <Grid item xs={12} md={4.5} sx={{ padding: "45px", minHeight: "90vh" }}>
      <Box sx={{ height: "200px", backgroundColor: "grey" }}>Map</Box>
      <Box
        sx={{ backgroundColor: "#F7F7F7", padding: "20px", paddingTop: "40px" }}
      >
        <Typography
          sx={{
            paddingBottom: "15px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          ABOUT US
        </Typography>
        <Box>
          <Typography
            sx={{
              paddingBottom: "15px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            STAFFERS
          </Typography>
          <Box>
            {staffs.map((staff:any,i:any)=>(
              <Typography key={i}>{staff.stafferName}</Typography>
            ))}
          </Box>
        </Box>
        <Typography
          sx={{
            paddingBottom: "15px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          CONTACT & BUSINESS HOURS
        </Typography>
        <hr />
        <Grid
          container
          sx={{
            padding: "15px 0",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIphoneIcon sx={{ color: "#C3C2C2" }} />
            <Typography style={{ fontSize: "14px" }}>(815) 341-0621</Typography>
          </Box>
          <button
            style={{
              backgroundColor: "white",
              padding: "8px 20px",
              border: "1px solid #C3C2C2",
              borderRadius: "8px",
            }}
            onClick={()=>{
              const ds = new Date;
              ds.setHours(10);
              console.log(ds.toDateString());
              moment.locale("mn");
              const mo = moment(ds);
              console.log(mo.format("LL"));
              
            }}
          >
            Call
          </button>
        </Grid>
        <hr />
        <div style={{ padding: "10px 0", fontSize: "14px" }}>
          {business.businessHours.map((el:any,i:any)=>(
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
            }}
          >
            {/* <p>{switch(el.day){}}</p> */}
            <p style={{ fontWeight: "bold" }}>{el.isRestDay? "Closed": el.startTime + "-" + el.endTime }</p>
          </div>
          ))}
        </div>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>Apr 24, 2023</Typography>
            <Typography sx={{ fontSize: "15px" }}>Closed</Typography>
          </Box>
          <Box sx={{ padding: "20px" }}>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              I will be on our 25th anniversary vacation April 12-24. See y'all
              when I get back!
            </Typography>
          </Box>
        </Box>
        <hr />
        <Typography
          sx={{
            paddingBottom: "15px",
            marginTop: "20px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          SOCIAL MEDIA & SHARE
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>socials</Box>
          <Box>socials</Box>
          <Box>socials</Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
