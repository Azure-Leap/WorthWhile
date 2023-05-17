import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { BASE_URL } from "@/variables";
interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

const HomeModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [catList, setCatList] = useState<any>([]);
  const [serviceList, setServiceList] = useState<any>([]);
  const [businessList, setBusinessList] = useState<any>([]);
  const [staffList, setStaffList] = useState<any>([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories/`)
      .then((res) => {
        console.log("miodal==>", res.data.cats);
        setCatList(res.data.cats);
      })
      .catch((err) => {
        console.log("err", err);
      });
    axios
      .get(`h${BASE_URL}/business/`)
      .then((res) => {
        setBusinessList(res.data.business);
      })
      .catch((err) => {
        console.log("err", err);
      });
    axios
      .get(`${BASE_URL}/staffs/`)
      .then((res) => {
        setStaffList(res.data.staffs);
      })
      .catch((err) => {
        console.log("err", err);
      });
    axios
      .get(`${BASE_URL}/services/`)
      .then((res) => {
        setServiceList(res.data.services);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    const filteredData = [
      ...serviceList,
      ...businessList,
      ...staffList,
    ]?.filter((item) =>
      `${item.businessName}${item.serviceName}${item.stafferName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filteredData);
    console.log("first==>", filteredData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-5">
      <div className="bg-white rounded-md p-3 w-full md:w-3/6">
        <div className="relative w-full border-b border-gray-200 flex items-center">
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <FiArrowLeft className="w-6 h-6" />
          </div>
          <input
            autoFocus
            onChange={handleSearchChange}
            type="text"
            value={search}
            placeholder="Find a service or salon"
            className=" py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 placeholder:text-sm focus:outline-none w-full"
          />
        </div>
        {filteredResults?.map((item, idx) => (
          <div className="flex items-center gap-2 my-1">
            <FiSearch color="gray" />
            <div>
              <p className="textsm">
                {item.businessName}
                {item.serviceName}
                {item.stafferName}
              </p>
              <p className="text-xs text-gray-500">
                {item.businessId?.businessName} салон
              </p>
            </div>
          </div>
        ))}
        <div className="my-5 gap-2">
          <h3 className="font-semibold text-xs mb-5">POPULAR SERVICES</h3>
          {catList?.map((el: any) => (
            <span
              key={`${el._id}`}
              className="border px-2 py-1 shadow rounded-xl text-xs mr-3"
            >
              {el.categoryTitle}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="w-5/12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md text-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
