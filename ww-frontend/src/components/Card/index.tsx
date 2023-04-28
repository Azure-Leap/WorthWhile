import { IItem } from "@/pages";
import Link from "next/link";
import React from "react";

interface Props {
  item: IItem;
}

const HomeCard = ({ item }: Props) => {
  return (
    <Link
      href="/services"
      className="w-full h-full flex justify-center mt-64 flex-wrap "
    >
      <div
        className="h-32  w-10/12 bg-cover bg-center opacity-70 rounded-lg text-white text-xl font-medium flex justify-center items-center shadow"
        style={{
          backgroundImage: `url(${item.BgURL})`,
        }}
      >
        {item.title}
      </div>
    </Link>
  );
};

export default HomeCard;
