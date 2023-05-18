import React, { useState, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "@/variables";
import { AuthContext } from "../../context/authContext";
import { AlertContext } from "../../context/alertContext";
import { useRouter } from "next/router";

const BusinessSignIn = ({ setIsSignIn }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setBusinessUser, businessUser, setBusinessToken } =
    useContext(AuthContext);
  const { setMessage, setStatus, message } = useContext(AlertContext);

  const router = useRouter();
  if (businessUser) {
    router.replace("/business");
  }

  const signin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/business/signin`, {
        email,
        password,
      });
      setMessage(res.data.message);
      setStatus("success");
      console.log("RESDATA====>", res.data);
      setBusinessUser(res.data.business);
      localStorage.setItem("business", JSON.stringify(res.data.business));
      setBusinessToken(res.data.token);
    } catch (error: any) {
      setStatus("error");
      console.log("ERROR", error);
      if (!businessUser) {
        setMessage("Имэйл эсвэл нууц үг буруу байна!");
      }
    }
  };
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-100 ">
      <div className="flex w-fit justify-center items-center bg-white p-7 rounded-md">
        <div className="mt-8 space-y-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
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
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    signin();
                  }
                }}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    signin();
                  }
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={signin}
            >
              Sign In
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
              Forgot password?
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
              onClick={() => {
                setIsSignIn(false);
              }}
            >
              Don't have an account? Sign Up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessSignIn;
