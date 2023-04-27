import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const AboutYouAuth = () => {
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      <h2 className="text-xl font-medium mb-4 ">About You</h2>
      <p className="text-xs text-left text-gray-500">
        Tell us more about yourself and your business.
      </p>
      <div className="rounded-md shadow-sm">
        <div>
          <label className="sr-only">Business name</label>
          <input
            id="business-name"
            name="business-name"
            type="text"
            // autoComplete="email"
            required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className=" rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-gray-800  sm:text-sm"
            placeholder="Business name"
          />
        </div>
      </div>
      <PhoneInput
        defaultCountry="MN"
        countrySelectProps={{ unicodeFlags: true }}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={setPhoneNumber}
        className="border border-gray-300 rounded p-2"
        // onFocus={}
        // inputComponent={CustomInput}
      />
      <p className="text-xs text-left text-gray-500 m-0">
        Other sign in methods {">"}
      </p>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow text-xs"
      >
        CONTINUE
      </button>
    </>
  );
};

export default AboutYouAuth;
