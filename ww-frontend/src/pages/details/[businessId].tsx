import Sidebar from "@/components/Sidebar";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Service from "@/components/Service";

const buttons = ["SERVICES", "REVIEWS", "GIFT CARDS"];

const Services = ({ business, staffs, services }: any) => {
  const [isFavorite, setFavorite] = useState<Boolean>(false);
  const [index, setIndex] = useState(0);

  return (
    <Grid container maxWidth="lg" sx={{ margin: "0 auto" }}>
      <Grid
        item
        xs={12}
        md={7.5}
        sx={{
          padding: { xs: "15px 15px", md: "45px 15px" },
        }}
      >
        <img
          src={business.profileImg}
          alt="Salon"
          style={{ width: "100%", borderRadius: "6px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "36px", fontWeight: "bold", marginTop: "10px" }}
            >
              {business.businessName}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              {`${business.address.city} city, ${business.address.district} district,
          ${business.address.street} street`}
            </Typography>
          </Box>
          {isFavorite ? (
            <FavoriteIcon
              sx={{ zoom: 1.8, color: "#DC3535" }}
              onClick={() => setFavorite(false)}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{ zoom: 1.8, color: "#C3C2C2" }}
              onClick={() => setFavorite(true)}
            />
          )}
        </Box>
        <Box>
          {buttons.map((button, i) => (
            <button
              onClick={() => setIndex(i)}
              key={i}
              style={{
                fontSize: "14px",
                margin: "10px 10px 20px 10px",
                paddingBottom: "6px",
                borderBottom: index === i ? "2px solid" : "none",
                color: index === i ? "rgb(6 182 212)" : "grey",
                opacity: index === i ? 1 : 0.5,
              }}
            >
              {button}
            </button>
          ))}
        </Box>
        {(index === 0 && (
          <Box>
            {services.map((serviceData: any, i: any) => (
              <Service key={i} serviceData={serviceData} />
            ))}
          </Box>
        )) ||
          (index === 1 && <Box>Reviews</Box>) ||
          (index === 2 && <Box>GiftCards</Box>)}
      </Grid>
      <Sidebar business={business} staffs={staffs} />
    </Grid>
  );
};

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:8888/business/${query.businessId}`);
  const data = await res.json();
  const res2 = await fetch(
    `http://localhost:8888/business/staffs?businessId=${query.businessId}`
  );
  const data2 = await res2.json();
  const res3 = await fetch(
    `http://localhost:8888/business/services?businessId=${query.businessId}`
  );
  const data3 = await res3.json();
  return {
    props: {
      business: data.business,
      staffs: data2.staffs,
      services: data3.services,
    },
  };
}

export default Services;
