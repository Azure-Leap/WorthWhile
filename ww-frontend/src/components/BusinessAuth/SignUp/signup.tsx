import React, { useEffect, useState } from "react";
import AboutYouAuth from "./aboutYou";
import AddressAuth from "./address";
import BusinessHourInput from "./businessHours";
import EmailAuth from "./email";
import PasswordAuth from "./password";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "@/variables";

const BusinessSignUp = ({ businesses }: any) => {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState<String>();
  // const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [address, setAddress] = useState();
  // address starts from here
  const [phoneNumber, setPhoneNumber] = useState<String>();
  const [businessHours, setBusinessHours] = useState([]);
  const [progress, setProgress] = useState(1);

  const [isDisabled, setIsDisabled] = useState(true);

  const signup = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/business/signup`, {
        businessName,
        email,
        phoneNumber,
        password,
        address,
        businessHours,
      });
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const test = () => {
    signup();
  };
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-100 ">
      <div className="w-fit items-center bg-white p-7 rounded-md shadow-sm">
        <div
          className={`flex items-center border-b-2 pb-6 ${
            progress === 1 ? "justify-center" : ""
          }`}
        >
          <button
            className={`${progress === 1 ? "hidden" : "block"}`}
            onClick={() => {
              setProgress(progress - 1);
            }}
          >
            <FiArrowLeft size={30} color="gray" />
          </button>
          <div className="w-80 flex justify-center">
            <div className="w-1/2 bg-gray-300 rounded-full">
              <div
                className="h-3 rounded-full bg-green-400"
                style={{ width: `${progress * 20}%` }}
              />
            </div>
          </div>
        </div>
        <form className="mt-6 space-y-6 max-w-md" onSubmit={test}>
          {(progress === 1 && (
            <EmailAuth
              email={email}
              setEmail={setEmail}
              setIsDisabled={setIsDisabled}
              businesses={businesses}
            />
          )) ||
            (progress === 2 && (
              <AboutYouAuth
                setBusinessName={setBusinessName}
                setPhoneNumber={setPhoneNumber}
                phoneNumber={phoneNumber}
                businessName={businessName}
                isDisabled={isDisabled}
              />
            )) ||
            (progress === 3 && (
              <PasswordAuth
                password={password}
                setPassword={setPassword}
                rePassword={rePassword}
                setRePassword={setRePassword}
                isDisabled={isDisabled}
              />
            )) ||
            (progress === 4 && (
              <AddressAuth
                address={address}
                setAddress={setAddress}
                isDisabled={isDisabled}
              />
            )) ||
            (progress === 5 && (
              <BusinessHourInput
                businessHours={businessHours}
                setBusinessHours={setBusinessHours}
                isDisabled={isDisabled}
              />
            ))}
        </form>
        <button
          type="submit"
          className={`w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow text-xs mt-3 ${
            isDisabled ? "opacity-10" : "opacity-100"
          }`}
          onClick={() => {
            progress === 5
              ? () => {
                  test();
                }
              : setProgress(progress + 1);
            setIsDisabled(true);
          }}
          disabled={isDisabled}
        >
          CONTINUE
        </button>
      </div>
    </main>
  );
};

export default BusinessSignUp;

{
  /* <AddServiceAuth />
<AddStaffAuth /> */
}
