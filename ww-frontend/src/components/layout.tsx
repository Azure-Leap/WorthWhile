import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import TailWindNavBar from "./TailwindNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: any) {
  return (
    <>
      <TailWindNavBar />
      <main className=""> {children}</main>
      <Footer />
    </>
  );
}
