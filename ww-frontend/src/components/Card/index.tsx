import { IItem } from "@/pages";
import Link from "next/link";
import React from "react";

interface Props {
  item: IItem;
}

const HomeCard = ({ item }: Props) => {
  return (
    <Link href="/salonlist" className="w-full p-[10px] relative">
      <div className="bg-white rounded-lg group">
        <div
          className="h-[500px] w-full bg-cover bg-center opacity-0 group-hover:opacity-60 bg-sky-100 bg-blend-multiply transition-opacity duration-300 rounded-lg flex items-end"
          style={{
            backgroundImage: `url(${item.BgURL})`,
          }}
        ></div>
        <div
          style={{
            padding: "20px 30px 20px 20px",
            position: "absolute",
            bottom: "30px",
            left: "20px",
          }}
        >
          <p className="font-bold text-xl mb-5">{item.title}</p>
          <p style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            dignissimos ipsa ad iste, recusandae ratione illum deserunt ut et
            nulla ducimus cumque, deleniti quo beatae. Minima minus neque
            voluptatibus facilis.
          </p>
        </div>
        <div
          style={{
            width: "70px",
            height: "70px",
            position: "absolute",
            top: "70px",
            left: "50px",
          }}
        >
          <img src={item.icon} alt="icon" />
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
