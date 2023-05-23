import BusinessLayout from "@/components/BusinessLayout";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { BASE_URL } from "@/variables";
import Image from "next/image";

const SalonDetail = () => {
  const { businessUser, setBusinessUser } = useContext(AuthContext);
  const id = businessUser?._id;

  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      address: "456 Elm St",
    },
    // Add more data rows as needed
  ];

  const [businessDetail, setBusinessDetail] = useState<any>();

  useEffect(() => {
    axios
      ?.get(`${BASE_URL}/business/${id}`)
      .then((res) => {
        // console.log("App data==>", res.data.business);
        setBusinessDetail(res.data.business);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);

  let time = businessDetail?.businessHours;

  console?.log("tsag:===>", businessDetail);

  return (
    <BusinessLayout>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {item.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {item.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {item.address}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <table className="border">
        <tr className="border">
          <th className="border text-left">Business Name</th>
          <td>{businessDetail?.businessName}</td>
        </tr>
        <tr className="border ">
          <th className="border text-left">Email</th>
          <td>{businessDetail?.email}</td>
        </tr>
        <tr className="border">
          <th className="border text-left">Email</th>
          <td>
            {" "}
            <Image
              src={businessDetail?.profileImg}
              width={500}
              height={500}
              alt="Business Profile"
            />
          </td>
        </tr>
        <tr className="border">
          <th className="border text-left">Number</th>
          <td>{businessDetail?.phoneNumber}</td>
        </tr>
        <tr className="border">
          <th className="border text-left">Address</th>
          <td>
            {businessDetail?.address.city} хот{" "}
            {businessDetail?.address.district} дүүрэг{" "}
            {businessDetail?.address.street} гудамж{" "}
            {businessDetail?.address.zipCode} зип код
          </td>
        </tr>
        <tr className="border">
          <th className="border text-left">Цагийн хуваарь</th>
          <td>
            {time?.map((el: any, idx: any) => (
              <p key={idx} className="my-3">
                {el.name} өдөр {el.startTime}-c {el.endTime}
              </p>
            ))}
          </td>
        </tr>
      </table> */}
    </BusinessLayout>
  );
};

export default SalonDetail;
