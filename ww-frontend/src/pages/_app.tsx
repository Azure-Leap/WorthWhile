import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "@/context/authContext";
import AlertProvider from "@/context/alertContext";
import { Lato } from "@next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <AlertProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </AlertProvider>
    </main>
  );
}
