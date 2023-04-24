import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Grid item xs={12} md={4.5} sx={{ padding: "45px", minHeight: "100vh" }}>
      <Box sx={{ backgroundColor: "#F7F7F7", height: "200px" }}>Map</Box>
      <Typography sx={{ marginTop: "50px" }}>
        CONTACT & BUSINESS HOURS
      </Typography>
      <Box>
        <Box>Phone number</Box>
        <Button>Call</Button>
      </Box>
      <Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box>
        <Typography>Today Date</Typography>
        <Typography>Closed</Typography>
      </Box>
      <Box>
        <Typography>
          I will be on our 25th anniversary vacation April 12-24. See y'all when
          I get back!
        </Typography>
      </Box>
      <Typography>SOCIAL MEDIA & SHARE</Typography>
      <Box>
        <Box></Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
