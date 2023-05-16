import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import NewFooter from "./newFooter";
import TailWindNavBar from "./TailwindNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: any) {
  return (
    <>
      <TailWindNavBar />
      <main className="h-screen"> {children}</main>
      {/* <Footer /> */}
      {/* <NewFooter /> */}
    </>
  );
}
