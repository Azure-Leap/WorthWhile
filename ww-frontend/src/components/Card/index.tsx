import { IItem } from "@/pages";
import Link from "next/link";
import React from "react";

interface Props {
  item: IItem;
}

const HomeCard = ({ item }: Props) => {
  return (
    <Link href="/salonlist" className="w-full py-[20px] px-[20px]">
      <div
        className="h-32 w-full  bg-cover bg-center opacity-70 rounded-lg text-white text-xl font-medium flex justify-center items-center shadow text-center"
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
