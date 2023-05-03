import BusinessLayout from "@/components/BusinessLayout";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import BusinessHomePage from "./home";
import AuthPAge from "./auth";

const index = () => {
  const router = useRouter();
  const { businessUser } = useContext(AuthContext);
  return <>{businessUser ? <BusinessHomePage /> : <AuthPAge />}</>;
};

export default index;
