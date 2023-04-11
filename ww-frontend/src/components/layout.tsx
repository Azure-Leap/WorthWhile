import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="h-screen"> {children}</main>
      <Footer />
    </>
  );
}
