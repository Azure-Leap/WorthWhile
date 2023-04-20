import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "@/context/authContext";
import AlertProvider from "@/context/alertContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </AlertProvider>
  );
}
