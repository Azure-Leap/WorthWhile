import { useState } from "react";
import Head from "next/head";
import BusinessSignIn from "@/components/BusinessAuth/singIn";

const SignInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BusinessSignIn />
    </div>
  );
};

export default SignInPage;
