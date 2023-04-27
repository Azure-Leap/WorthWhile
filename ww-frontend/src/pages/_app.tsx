import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "@/context/authContext";
import AlertProvider from "@/context/alertContext";
import { Lato } from "@next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </AlertProvider>
      </ThemeProvider>
    </main>
  );
}
