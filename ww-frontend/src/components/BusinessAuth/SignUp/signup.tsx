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
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(90);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your sign in logic here
  };
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-100 ">
      <div className="w-fit items-center bg-white p-7 rounded-md shadow-sm">
        <div className="flex items-center border-b-2 pb-6">
          <FiArrowLeft size={30} color="gray" />
          <div className="w-1/3 bg-gray-300 rounded-full">
            <div
              className="h-3 rounded-full bg-green-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <form className="mt-6 space-y-6 max-w-md" onSubmit={handleSignIn}>
          <EmailAuth />
          <p>End Here</p>
          {/* <AboutYouAuth />
          <p>End Here</p>
          <PasswordAuth />
          <p>End Here</p>
          <AddressAuth />
          <p>End Here</p>
          <BusinessHourInput />
          <p>End Here</p>
          <AddServiceAuth />
          <p>End Here</p>
          <AddStaffAuth /> */}
        </form>
      </div>
    </main>
  );
};

export default BusinessSignUp;
