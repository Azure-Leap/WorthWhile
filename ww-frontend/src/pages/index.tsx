import HomeCard from "@/components/Card";
import SearchComponent from "@/components/General/search";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <div
        className="h-1/4 bg-cover bg-center text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
        }}
      >
        <b>Discover yourself</b>
        <SearchComponent />
      </div>
      <HomeCard />
    </>
  );
}
