import React, { useState } from "react";
import AboutYouAuth from "./aboutYou";
import AddressAuth from "./address";
import AddServiceAuth from "./addService/addService";
import AddStaffAuth from "./addStaff";
import BusinessHourInput from "./businessHours";
import EmailAuth from "./email";
import PasswordAuth from "./password";
import { FiArrowLeft } from "react-icons/fi";

const BusinessSignUp = () => {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState<String>();
  const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<String>();
  const [businessHours, setBusinessHours] = useState([]);
  const [progress, setProgress] = useState(1);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your sign in logic here
    // onClick={setProgress(progress - 1)}
  };

  console.log("======>", businessName, phoneNumber);
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-100 ">
      <div className="w-fit items-center bg-white p-7 rounded-md shadow-sm">
        <div className="flex items-center border-b-2 pb-6">
          <button
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
        <form className="mt-6 space-y-6 max-w-md" onSubmit={handleSignIn}>
          {(progress === 1 && (
            <AboutYouAuth
              setBusinessName={setBusinessName}
              setPhoneNumber={setPhoneNumber}
              phoneNumber={phoneNumber}
              businessName={businessName}
            />
          )) ||
            (progress === 2 && (
              <PasswordAuth
                password={password}
                setPassword={setPassword}
                rePassword={rePassword}
                setRePassword={setRePassword}
              />
            )) ||
            (progress === 3 && <AddressAuth />) ||
            (progress === 4 && <BusinessHourInput />)}
        </form>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow text-xs"
          onClick={() => {
            setProgress(progress + 1);
          }}
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
