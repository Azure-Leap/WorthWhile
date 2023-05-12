import React, { useContext, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Grid, Typography } from "@mui/material";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import Sidebar from "@/components/Sidebar";
import Service from "@/components/Service";
import GiftCard from "@/components/GiftCards/card";
import GiftCardPaymentModal from "@/components/GiftCards/modal";
import axios from "axios";
import { AuthContext } from "@/context/authContext";

const SalonDetail = ({ business, staffs, services, giftCards }: any) => {
  const [isFavorite, setFavorite] = useState<Boolean>(false);
  const [index, setIndex] = useState(0);
  const [payModalOpen, setPayModalOpen] = useState<Boolean>(false);
  const [selectedGiftCard, setSelectedGiftCard] = useState(null);

  const { user, setUserData } = useContext(AuthContext);

  const handleAdd = async (id: string) => {
    const res = await axios.post(
      `http://localhost:8888/users/favorites/${user?._id}`,
      {
        favoriteId: id,
      }
    );

    const updatedUser = res.data.user;
    setUserData(updatedUser);
    console.log("ADD", res);
  };
  const handleRemove = async (id: string) => {
    const res = await axios.put(
      `http://localhost:8888/users/favorites/${user?._id}`,
      {
        favoriteId: id,
      }
    );
    const updatedUser = res.data.user;
    setUserData(updatedUser);
    console.log("REM", id);
  };

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
              sx={{ fontSize: "36px", fontWeight: "medium", marginTop: "10px" }}
            >
              {business.businessName}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              {`${business.address.city} city, ${business.address.district} district,
          ${business.address.street} street`}
            </Typography>
          </Box>
          {console.log("UU", user)}
          {user &&
            (user?.favorites?.includes(business._id) ? (
              <FavoriteIcon
                sx={{ zoom: 1.8, color: "#DC3535" }}
                onClick={() => handleRemove(business._id)}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  zoom: 1.8,
                  color: "#C3C2C2",
                  "&:hover": { color: "#DC3535" },
                }}
                onClick={() => handleAdd(business._id)}
              />
            ))}
          {/* {isFavorite ? (
            <FavoriteIcon
              sx={{ zoom: 1.8, color: "#DC3535" }}
              onClick={() => setFavorite(false)}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{
                zoom: 1.8,
                color: "#C3C2C2",
                "&:hover": { color: "#DC3535" },
              }}
              onClick={() => setFavorite(true)}
            />
          )} */}
        </Box>
        <Box>
          {["SERVICES", "REVIEWS", "GIFT CARDS"].map((el, i) => (
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
              {el}
            </button>
          ))}
        </Box>
        {(index === 0 && (
          <Box>
            {services.map((service: any, i: any) => (
              <Service
                key={i}
                service={service}
                business={business}
                staffs={staffs}
                services={services}
              />
            ))}
          </Box>
        )) ||
          (index === 1 && <Box></Box>) ||
          (index === 2 && giftCards.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CreditCardOffIcon
                sx={{
                  fontSize: "100px",
                  color: "#E6E5E5",
                  margin: "20px 0",
                }}
              />
              <Typography
                sx={{ color: "grey", fontSize: "14px", marginBottom: "40px" }}
              >
                There are no giftcards
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {giftCards.map((giftcard: any, i: any) => (
                <GiftCard
                  key={i}
                  giftcard={giftcard}
                  setOpen={setPayModalOpen}
                  setSelectedGiftCard={setSelectedGiftCard}
                />
              ))}
              <GiftCardPaymentModal
                open={payModalOpen}
                setOpen={setPayModalOpen}
                selectedGiftCard={selectedGiftCard}
              />
            </Box>
          ))}
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
  const res4 = await fetch(
    `http://localhost:8888/business/giftcards?businessId=${query.businessId}`
  );
  const data4 = await res4.json();

  return {
    props: {
      business: data.business,
      staffs: data2.staffs,
      services: data3.services,
      giftCards: data4.giftCards,
    },
  };
}

export default SalonDetail;
