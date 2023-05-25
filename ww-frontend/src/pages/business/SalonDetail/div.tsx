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
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default SalonDetail;
