import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PasswordAuth = () => {
  const [password, setPassword] = useState("");
  return (
    <>
      <h2 className="text-xl font-medium mb-4 ">Password Setup</h2>
      <p className="text-xs text-left text-gray-500">
        Enter the password for your business profile
      </p>
      <div className="rounded-md shadow-sm">
        <div>
          <label className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            // autoComplete="email"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-gray-800  sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow text-xs"
      >
        CONTINUE
      </button>
    </>
  );
};

export default PasswordAuth;
