import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import moment from "moment";

const Sidebar = ({ business, staffs }: any) => {
  return (
    <Grid
      item
      xs={12}
      md={4.5}
      sx={{
        padding: "45px",
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          height: "200px",
          backgroundColor: "grey",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        Map
      </Box>
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          padding: "20px",
          paddingTop: "40px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <Box>
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              ABOUT US
            </Typography>
          </Box>
          <Box sx={{ padding: "20px" }}>
            <Typography sx={{ fontSize: "12px" }}>
              {business.description}
            </Typography>
          </Box>
        </Box>
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
          <Box sx={{ display: "flex", overflowX: "auto", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                minHeight: "90px",
                gap: "20px",
              }}
            >
              {staffs.map((staff: any, i: any) => (
                <Box key={i}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      src={staff.staffImg}
                    />
                  </div>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      textAlign: "center",
                      marginTop: "8px",
                    }}
                    key={i}
                  >
                    {staff.stafferName.length > 8
                      ? staff.stafferName.substring(0, 8) + "..."
                      : staff.stafferName}
                  </Typography>
                </Box>
              ))}
            </Box>
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
            <Typography style={{ fontSize: "14px" }}>
              {`(${business.phoneNumber.substring(
                1,
                4
              )}) ${business.phoneNumber.substring(
                4,
                8
              )}-${business.phoneNumber.substring(8)}`}
            </Typography>
          </Box>
          <button
            style={{
              backgroundColor: "white",
              padding: "8px 20px",
              border: "1px solid #C3C2C2",
              borderRadius: "8px",
            }}
          >
            Call
          </button>
        </Grid>
        <hr />
        <div style={{ padding: "10px 0", fontSize: "14px" }}>
          {business.businessHours.map((el: any, i: any) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
              }}
            >
              <p>
                {(el.day === 1 && "Monday") ||
                  (el.day === 2 && "Tuesday") ||
                  (el.day === 3 && "Wednesday") ||
                  (el.day === 4 && "Thursday") ||
                  (el.day === 5 && "Friday") ||
                  (el.day === 6 && "Saturday") ||
                  (el.day === 7 && "Sunday")}
              </p>
              <p style={{ fontWeight: "bold" }}>
                {el.isRestDay
                  ? "Closed"
                  : el.startTime + ":00" + "-" + el.endTime + ":00"}
              </p>
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
            <Typography sx={{ fontSize: "15px" }}>
              {moment(new Date()).format("ll")}
            </Typography>
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
