import React, { useState } from "react";
import AboutYouAuth from "./aboutYou";
import AddressAuth from "./address";
import BusinessHourInput from "./businessHours";
import EmailAuth from "./email";
import PasswordAuth from "./password";

const BusinessSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your sign in logic here
  };
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-100 ">
      <div className="flex w-1/3 justify-center items-center bg-white p-7 rounded-md shadow-sm">
        <form
          className="mt-8 space-y-6 w-full max-w-md"
          onSubmit={handleSignIn}
        >
          {/* <EmailAuth /> */}
          {/* <AboutYouAuth />  */}
          {/* <PasswordAuth /> */}
          {/* <AddressAuth /> */}
          <BusinessHourInput />
        </form>
      </div>
    </main>
  );
};

export default BusinessSignUp;
