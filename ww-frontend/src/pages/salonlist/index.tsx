import SalonCard from "@/components/SalonCard";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import axios from "axios";
import ListNavbar from "@/components/ListNavBar";

export interface IBusiness {
  _id: String;
  businessName: String;
  email: String;
  password: String;
  phoneNumber: String;
  profileImg: String;
  businessHours: [
    { name: String; startTime: String; endTime: String; isOpen: Boolean }
  ];
  address: {
    city: String;
    district: String;
    street: String;
    zipCode: Number;
  };
  description: String;
  socialMedia: [{ title: String; url: String; icon: String }];
}

const SalonList = () => {
  const [businessData, setBusinessData] = useState<IBusiness[]>([]);
  const [search, setSearch] = useState("");
  function onChangeText(e: any) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8888/business/")
      .then((res) => {
        setBusinessData(res.data.business);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const list =
    search === ""
      ? businessData
      : businessData.filter((business) =>
          business.businessName.toLowerCase().includes(search)
        );

  return (
    <>
      <ListNavbar onChangeText={onChangeText} search={search} />
      <div className="h-24"></div>
      <div className="xl:w-10/12 m-auto">
        <p className="text-3xl font-semibold mt-10 border-b border-gray-300 pb-5">
          Best salons in Ulaanbaatar
        </p>
        <div className="flex gap-2 my-5">
          <div className="inline-flex items-center rounded px-2 py-1 border bg-gray-100 text-sm cursor-pointer">
            <BsFilter className="mr-1" size={15} />
            Filters
          </div>
          <div className="inline-flex justify-center items-center rounded px-2 py-1 border bg-gray-100 text-sm cursor-pointer">
            <p>Sort by: Reccommended</p>
          </div>
        </div>
        <div className="">
          {list?.map((el, idx) => (
            <SalonCard key={idx} businessData={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SalonList;
