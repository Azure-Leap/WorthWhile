import BusinessLayout from "@/components/BusinessLayout";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";
import { BASE_URL } from "@/variables";
import Image from "next/image";

const SalonDetail = () => {
  const { businessUser, setBusinessUser } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);
  const [businessDetail, setBusinessDetail] = useState<any>();
  const [isEditing, setIsEditing] = useState(true);
  //field's state
  const [businessName, setBusinessName] = useState<any>();
  const [profileImg, setProfileImg] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [businessImg, setBusinessImg] = useState<any>();
  const [businessHours, setBusinessHours] = useState<any>();
  const [address, setAddress] = useState<any>();

  const id = businessUser?._id;
  let time = businessDetail?.businessHours;

  const handleChange = (field: string, value: string) => {
    const updatedData = { ...businessDetail, [field]: value };
    setBusinessDetail(updatedData);
    console.log(businessDetail);
  };

  useEffect(() => {
    axios
      ?.get(`${BASE_URL}/business/${id}`)
      .then((res) => {
        setBusinessDetail(res.data.business);
        setBusinessName(res.data.business.businessName);
        console.log("Business data==>", res.data.business);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);

  const updateBusiness = async () => {
    try {
      const res = await axios.put(`http://localhost:8888/business/${id}`, {});
      console.log(res.data);
      setMessage(res.data.message);
      setStatus("success");
    } catch (error: any) {
      console.log(error);
      setStatus("error");
      console.log("Aldaa==>", error);
      // setMessage(error.data.message);
    }
  };

  return (
    <BusinessLayout>
      <div className="min-w-full flex justify-between my-6">
        <p className="font-bold text-2xl ">Your business information</p>
        <span>
          {" "}
          {isEditing ? (
            <button
              // onClick={handleSave}
              className="px-4 py-1 bg-blue-500 text-white rounded "
            >
              Save
            </button>
          ) : (
            <button
              // onClick={handleEdit}
              className="px-2 py-1 bg-green-500 text-white rounded"
            >
              Edit
            </button>
          )}
        </span>
      </div>
      <div className="flex flex-col border">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-7 border bg-gray-100 "
                    >
                      Name
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {isEditing ? (
                        <input
                          className="text-sm font-medium text-gray-900 border border-gray-300 px-2 py-1 rounded"
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                      ) : (
                        <div className="text-sm font-medium text-gray-900">
                          {businessDetail?.businessName}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border bg-gray-100"
                    >
                      Email
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {isEditing ? (
                        <input
                          className="text-sm font-medium text-gray-900 border border-gray-300 px-2 py-1 rounded"
                          type="text"
                          value={businessDetail?.email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      ) : (
                        <div className="text-sm font-medium text-gray-900">
                          {businessDetail?.email}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border bg-gray-100"
                    >
                      Phone number
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {isEditing ? (
                        <input
                          className="text-sm font-medium text-gray-900 border border-gray-300 px-2 py-1 rounded"
                          type="text"
                          value={businessDetail?.phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      ) : (
                        <div className="text-sm font-medium text-gray-900">
                          {businessDetail?.phoneNumber}{" "}
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border bg-gray-100"
                    >
                      Address
                    </th>
                    <td>
                      <table className="ml-5 text-left text-sm">
                        <tr>
                          <th>Хот: </th>
                          <td className="ml-2">
                            {isEditing ? (
                              <input
                                className="text-sm font-medium text-gray-900 border border-gray-300 px-2 py-1 rounded"
                                type="text"
                                value={businessDetail?.address.city}
                                onChange={(e) =>
                                  handleChange("phoneNumber", e.target.value)
                                }
                              />
                            ) : (
                              <div className="text-sm font-medium text-gray-900">
                                {businessDetail?.address.city}
                              </div>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th>Дүүрэг: </th>
                          <td>
                            {isEditing ? (
                              <input
                                className="text-sm font-medium text-gray-900 border border-gray-300 px-2 py-1 rounded"
                                type="text"
                                value={businessDetail?.address.district}
                                onChange={(e) =>
                                  handleChange("phoneNumber", e.target.value)
                                }
                              />
                            ) : (
                              <div className="text-sm font-medium text-gray-900">
                                {businessDetail?.address.district}
                              </div>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th>Гудамж: </th>
                          <td>
                            {isEditing ? (
                              <textarea
                                className="text-sm font-medium text-gray-900 border border-gray-300 px-2 py-1 rounded min-w-fit"
                                value={businessDetail?.address.street}
                                onChange={(e) =>
                                  handleChange("phoneNumber", e.target.value)
                                }
                              />
                            ) : (
                              <div className="text-sm font-medium text-gray-900">
                                {businessDetail?.address.street}
                              </div>
                            )}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border bg-gray-100"
                    >
                      Profile image
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {isEditing ? (
                        <textarea
                          className="text-sm font-medium text-gray-900 border border-gray-300 px-2 py-1 rounded break-normal w-5/6"
                          value={businessDetail?.profileImg}
                          onChange={(e) => setBusinessImg(e.target.value)}
                        />
                      ) : (
                        <div className="text-sm font-medium text-gray-900">
                          <Image
                            src={businessDetail?.profileImg}
                            width={400}
                            height={400}
                            alt="Business Profile"
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border bg-gray-100"
                    >
                      Time Table{" "}
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      <table>
                        {time?.map((el: any, idx: any) =>
                          isEditing ? (
                            <tr className="text-left">
                              <th>
                                {" "}
                                <p>{el.name}: </p>{" "}
                              </th>
                              <td>
                                {" "}
                                <input
                                  type="time"
                                  value={el.startTime}
                                  className="border mx-2"
                                />
                                -
                                <input
                                  type="time"
                                  value={el.endTime}
                                  className="border mx-2"
                                />
                              </td>
                            </tr>
                          ) : (
                            <p>{el.name}</p>
                          )
                        )}
                      </table>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default SalonDetail;
