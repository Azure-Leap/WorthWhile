import React, { useContext } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { Tangerine } from "@next/font/google";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";

const tangerine = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
});

const GiftCard = ({ giftcard, setOpen, setSelectedGiftCard }: any) => {
  const { user } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);
  return (
    <Box>
      <Box
        sx={{
          width: "340px",
          height: "215px",
          objectFit: "contain",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          width={2000}
          height={2000}
          alt="zurag"
          src={giftcard?.image}
          className="h-full w-full"
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(50% ,-50%)",
          }}
        >
          <p
            className={`${tangerine.className}`}
            style={{
              fontSize: "40px",
              color: "rgb(163 68 113)",
              textAlign: "center",
            }}
          >
            {giftcard.businessId.businessName}
          </p>
          <p
            className={`${tangerine.className}`}
            style={{
              zoom: 5,
              color: "rgb(163 68 113)",
              textAlign: "center",
              lineHeight: "10px",
            }}
          >
            {giftcard.amount},000
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ color: "grey" }}>₮{giftcard.price},000</Typography>
        <Button
          onClick={
            user
              ? () => {
                  setSelectedGiftCard(giftcard);
                  setOpen(true);
                }
              : () => {
                  setStatus("error");
                  setMessage("Та эхлээд нэвтэрнэ үү1");
                }
          }
          variant="outlined"
          sx={{
            textTransform: "none",
            margin: "10px 0",
            borderRadius: "15px",
            padding: "0 10px",
            fontSize: "14px",
            width: "60px",
          }}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
};

export default GiftCard;
