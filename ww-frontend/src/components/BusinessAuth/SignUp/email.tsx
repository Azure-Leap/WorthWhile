import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BASE_URL } from "@/variables";
import { IoFemale } from "react-icons/io5";

const EmailAuth = ({ setEmail, businesses, email, setIsDisabled }: any) => {
  const [isCorrectEmail, setIsCorrectEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const isEmail = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email)
      ? true
      : false;
  };

  const handleEmail = (e: any) => {
    const input = e.target.value;
    if (isEmail(input)) {
      setIsCorrectEmail("true");
      setEmail(() => e.target.value);
      const arr = businesses?.filter((el: any) => el.email === e.target.value);
      if (arr?.length > 0) {
        setIsRegistered(true);
      } else {
        setIsDisabled(false);
      }
    } else if (input == "") {
      setIsCorrectEmail("");
      setIsRegistered(false);
      setIsDisabled(true);
    } else {
      setIsCorrectEmail("false");
      setIsRegistered(false);
      setIsDisabled(true);
    }
  };

  // useEffect(() => {
  //   if (isRegistered === false && isCorrectEmail === "true") {
  //     setIsDisabled(false);
  //   }
  // }, []);

  return (
    <>
      <h2 className="text-xl font-medium mb-4 ">
        What is your email <br />l address?
      </h2>
      <input type="hidden" name="remember" value="true" />

      <div className="rounded-md  -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            onChange={handleEmail}
            className={`rounded block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none shadow-sm  sm:text-sm ${
              isCorrectEmail === "false" || isRegistered === true
                ? "border-red-700"
                : isCorrectEmail === "true"
                ? "border-green-700"
                : "border-gray-300 focus:border-gray-800"
            }`}
            placeholder="Email address"
          />
        </div>
        <p
          className={`text-red-800 text-[12px] pt-[10px] ${
            isRegistered === true ? "block" : "hidden"
          }`}
        >
          This email already exists
        </p>
      </div>

      <p className="flex text-xs text-left text-gray-500 items-center">
        Other sign in methods <BiChevronRight />
      </p>
      <p className="text-xs text-left text-gray-500 ">
        By singning up I agree the <b>Terms & Conditions</b> and the{" "}
        <b>Privacy Policy</b>
      </p>
    </>
  );
};

export default EmailAuth;
