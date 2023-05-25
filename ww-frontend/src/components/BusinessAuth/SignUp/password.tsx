import { AlertContext } from "@/context/alertContext";
import React, { useContext, useEffect, useState } from "react";
import "react-phone-number-input/style.css";

const PasswordAuth = ({
  password,
  setPassword,
  rePassword,
  setRePassword,
  isD,
}: any) => {
  useEffect(() => {
    if (password !== rePassword) {
    }
  }, []);
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
            // required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-gray-800  sm:text-sm mb-[10px]"
            placeholder="Password"
          />
          <input
            id="RePassword"
            name="RePassword"
            type="password"
            // autoComplete="email"
            // required
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className=" rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-gray-800  sm:text-sm"
            placeholder="Enter password again"
          />
        </div>
      </div>
    </>
  );
};

export default PasswordAuth;
