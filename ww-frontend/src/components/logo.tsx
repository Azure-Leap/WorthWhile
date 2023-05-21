import React from "react";
import { Tangerine } from "@next/font/google";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Logo = ({ color }: any) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        border: `1px solid ${color}`,
        width: "62px",
        height: "62px",
        position: "relative",
        marginRight: "15px",
        boxShadow: `0 0 8px ${color}`,
        display: "inline-block",
        marginTop: "-15px",
      }}
    >
      <p
        className={tangerine.className}
        style={{
          fontSize: "48px",
          position: "absolute",
          top: "7px",
          left: "0",
          color: `${color}`,
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        W
      </p>
      <p
        className={tangerine.className}
        style={{
          fontSize: "24px",
          position: "absolute",
          top: "35px",
          right: "10px",
          color: `${color}`,
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        W
      </p>
    </div>
  );
};

export default Logo;
