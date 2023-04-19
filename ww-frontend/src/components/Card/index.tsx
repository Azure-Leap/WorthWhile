import { IItem } from "@/pages";
import React from "react";

interface Props {
  item: IItem;
}

const HomeCard = ({ item }: Props) => {
  return (
    <div
      className="h-1/6  w-1/4 bg-cover bg-center opacity-70 rounded-lg text-white text-xl font-medium flex justify-center items-center"
      style={{
        backgroundImage: `url(${item.BgURL})`,
      }}
    >
      {item.title}
    </div>
  );
};

export default HomeCard;
