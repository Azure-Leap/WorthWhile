import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const EmailAuth = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <h2 className="text-xl font-medium mb-4 ">
        What is your email <br />
        address?
      </h2>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-gray-800  sm:text-sm"
            placeholder="Email address"
          />
        </div>
      </div>
      <p className="flex text-xs text-left text-gray-500 items-center">
        Other sign in methods <BiChevronRight />
      </p>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow text-xs"
      >
        CONTINUE
      </button>
      <p className="text-xs text-left text-gray-500 ">
        By singning up I agree the <b>Terms & Conditions</b> and the{" "}
        <b>Privacy Policy</b>
      </p>
    </>
  );
};

export default EmailAuth;
