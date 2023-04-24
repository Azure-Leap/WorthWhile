import SearchComponent from "@/components/General/search";
import SalonCard from "@/components/SalonCard";
import React, { useEffect, useState } from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import axios from "axios";

export interface IBusiness {
  _id: String;
  businessName: String;
  email: String;
  password: String;
  businessHours: [
    { day: Number; startTime: Number; endTime: Number; isRestDay: Boolean }
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

const services = () => {
  const [businessData, setBusinessData] = useState<IBusiness[]>([]);
  const [search, setSearch] = useState("");
  function onChangeText(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8888/business/")
      .then((res) => {
        console.log("RESPONSE====>", res.data);
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
      <div className="bg-cyan-300 h-1/4 p-5">
        <SearchComponent onChangeText={onChangeText} search={search} />
        <div className="bg-white inline-flex items-center rounded px-2 py-1">
          <FiCalendar className="mr-1" />
          Dates
        </div>
        <div className="bg-white inline-flex justify-center items-center rounded px-2 py-1">
          <FiChevronDown size={20} className="mr-1" />
          <p>Best matches</p>
        </div>
      </div>
      <div className="bg-gray-200 h-full text-lg text-center p-4">
        Best Haircut in Ulaanbaatar
        {list?.map((el, idx) => (
          <SalonCard key={idx} businessData={el} />
        ))}
      </div>
    </>
  );
};

export default services;
