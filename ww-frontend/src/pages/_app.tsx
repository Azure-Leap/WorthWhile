import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthProvider from "@/context/authContext";
import AlertProvider from "@/context/alertContext";
import OrderProvider from "@/context/orderContext";
import AlertComponent from "@/components/Alert";
import OrderComponent from "@/components/Order";
import { green, purple } from "@mui/material/colors";
import NavProvider from "@/context/navContext";
import { useEffect } from "react";

const lato = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "rgb(6 182 212)",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => localStorage.removeItem("user"));
  return (
    <main className={lato.className}>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <NavProvider>
            <AuthProvider>
              <OrderProvider>
                <AlertComponent />
                <Component {...pageProps} />
                <OrderComponent />
              </OrderProvider>
            </AuthProvider>
          </NavProvider>
        </AlertProvider>
      </ThemeProvider>
    </main>
  );
}
