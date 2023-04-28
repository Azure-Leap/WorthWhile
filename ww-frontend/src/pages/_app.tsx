import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthProvider from "@/context/authContext";
import AlertProvider from "@/context/alertContext";
import OrderProvider from "@/context/orderContext";
import AlertComponent from "@/components/Alert";
import Layout from "@/components/layout";
import OrderComponent from "@/components/Order";

const lato = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

const theme = createTheme({
  typography: {
    fontFamily: "Lato",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.className}`}>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <AuthProvider>
            <OrderProvider>
              <Layout>
                <AlertComponent />
                <Component {...pageProps} />
                <OrderComponent />
              </Layout>
            </OrderProvider>
          </AuthProvider>
        </AlertProvider>
      </ThemeProvider>
    </main>
  );
}
