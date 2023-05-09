import BusinessLayout from "@/components/BusinessLayout";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const BusinessHomePage = () => {
  const router = useRouter();
  const { businessUser } = useContext(AuthContext);
  return <BusinessLayout> Home</BusinessLayout>;
};

export default BusinessHomePage;
