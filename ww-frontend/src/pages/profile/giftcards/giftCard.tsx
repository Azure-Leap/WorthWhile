import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { Tangerine } from "@next/font/google";

const tangerine = Tangerine({
  weight: ["400"],
  subsets: ["latin"],
});

const GiftCard = ({ apps }: any) => {
  return (
    <div className="ml-5 mt-2">
      <div>
        <h1 className="text-2xl ">Gift Cards</h1>
      </div>
      <div className="w-96">
        {apps &&
          apps.map((app: any, i: number) => (
            <Box
              key={i}
              sx={{
                width: "340px",
                height: "215px",
                objectFit: "contain",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                margin: "30px 0",
              }}
            >
              <Image
                width={2000}
                height={2000}
                alt="zurag"
                src={app?.image}
                className="h-full w-full"
                priority
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
                  {app.businessId?.businessName}
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
                  {app.amount},000
                </p>
              </Box>
            </Box>
          ))}
      </div>
    </div>
  );
};

export default GiftCard;
