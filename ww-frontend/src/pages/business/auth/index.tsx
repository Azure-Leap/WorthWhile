import { useState } from "react";
import Head from "next/head";
import BusinessSignIn from "@/components/BusinessAuth/singIn";
import BusinessSignUp from "@/components/BusinessAuth/SignUp/signup";
import { BASE_URL } from "@/variables";

const SignInPage = ({ businesses }: any) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isSignIn ? (
        <BusinessSignIn setIsSignIn={setIsSignIn} />
      ) : (
        <BusinessSignUp businesses={businesses} />
      )}
    </div>
  );
};

export default SignInPage;

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`${BASE_URL}/business`);
  const data = await res.json();
  return {
    props: {
      businesses: data.business,
    },
  };
}
