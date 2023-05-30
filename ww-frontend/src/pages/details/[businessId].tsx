import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Grid, Typography } from "@mui/material";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import Sidebar from "@/components/Sidebar";
import Service from "@/components/Service";
import GiftCard from "@/components/GiftCards/card";
import GiftCardPaymentModal from "@/components/GiftCards/modal";
import Layout from "@/components/layout";
import Reviews from "@/components/Reviews";
import { AuthContext } from "@/context/authContext";
import { BASE_URL } from "@/variables";
import { OrderContext } from "@/context/orderContext";
import { ReviewContext } from "@/context/reviewContext";

const SalonDetail = ({ business, giftCards }: any) => {
  const [index, setIndex] = useState(0);
  const [payModalOpen, setPayModalOpen] = useState<Boolean>(false);
  const [selectedGiftCard, setSelectedGiftCard] = useState(null);
  const { user, setUserData } = useContext(AuthContext);
  const { allStaffs, allServices } = useContext(OrderContext);
  const { setBus } = useContext(ReviewContext);

  const servicesByBus = allServices?.filter(
    (el: any) => el.businessId._id === business._id
  );

  const staffsByBus = allStaffs?.filter(
    (el: any) => el.businessId === business._id
  );

  const addFavorite = async (id: string) => {
    try {
      const res = await axios.post(`${BASE_URL}/users/favorites/${user?._id}`, {
        favoriteId: id,
      });

      const updatedUser = res.data.user;
      setUserData(updatedUser);
    } catch (err) {
      console.log("addFavorite err", err);
    }
  };

  const removeFavorite = async (id: string) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/favorites/${user?._id}`, {
        favoriteId: id,
      });
      const updatedUser = res.data.user;
      setUserData(updatedUser);
    } catch (err) {
      console.log("removeFavorite err", err);
    }
  };

  useEffect(() => {
    setBus(business);
  }, []);

  return (
    <Layout>
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
            style={{ width: "100%", borderRadius: "8px" }}
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
                sx={{
                  fontSize: "36px",
                  fontWeight: "medium",
                  marginTop: "10px",
                }}
              >
                {business.businessName}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "grey" }}>
                {`${business.address.city} city, ${business.address.district} district,
          ${business.address.street} street`}
              </Typography>
            </Box>
            {user &&
              (user?.favorites?.includes(business._id) ? (
                <FavoriteIcon
                  sx={{ zoom: 1.8, color: "#DC3535" }}
                  onClick={() => removeFavorite(business._id)}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{
                    zoom: 1.8,
                    color: "#C3C2C2",
                    "&:hover": { color: "#DC3535" },
                  }}
                  onClick={() => addFavorite(business._id)}
                />
              ))}
          </Box>
          <Box>
            {["SERVICES", "REVIEWS", "GIFT CARDS"].map((el, i) => (
              <button
                onClick={() => setIndex(i)}
                key={i}
                style={{
                  fontSize: "14px",
                  margin: "10px 20px 20px 0",
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
              {servicesByBus?.map((service: any, i: any) => (
                <Service
                  key={i}
                  service={service}
                  business={business}
                  staffs={staffsByBus}
                  services={servicesByBus}
                />
              ))}
            </Box>
          )) ||
            (index === 1 && <Reviews business={business} />) ||
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
                  sx={{
                    color: "grey",
                    fontSize: "14px",
                    marginBottom: "40px",
                  }}
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
        <Sidebar business={business} staffs={staffsByBus} />
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`${BASE_URL}/business/${query.businessId}`);
  const data = await res.json();
  const res4 = await fetch(
    `${BASE_URL}/business/giftcards?businessId=${query.businessId}`
  );
  const data4 = await res4.json();
  return {
    props: {
      business: data.business,
      giftCards: data4.giftCards,
    },
  };
}

export default SalonDetail;
