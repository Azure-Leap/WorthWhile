import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const AboutYouAuth = ({
  setBusinessName,
  setPhoneNumber,
  phoneNumber,
  businessName,
}: any) => {
  // const inputComp: React.ElementType = <input className="outline-0" />;
  return (
    <>
      <h2 className="text-xl font-medium mb-4 ">About Your Business</h2>
      <p className="text-xs text-left text-gray-500">
        Tell us more about your business.
      </p>
      <div className="rounded-md shadow-sm">
        <div>
          <label className="sr-only">Business name</label>
          <input
            id="business-name"
            name="business-name"
            type="text"
            // autoComplete="email"
            // required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className=" rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-gray-800 text-sm"
            placeholder="Business name"
          />
        </div>
      </div>
      <PhoneInput
        defaultCountry="MN"
        countrySelectProps={{ unicodeFlags: true }}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e)}
        className="border border-gray-300 rounded p-2 text-[14px] placeholder-gray-500 outline-0 focus:border-gray-800"
        // onFocus={}
        // inputComponent={inputComp}
      />
      <p className="text-xs text-left text-gray-500 m-0">
        Other sign in methods {">"}
      </p>
    </>
  );
};

export default AboutYouAuth;
//
