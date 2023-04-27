import AlertComponent from "@/components/Alert";
import HomeCard from "@/components/Card";
import SearchComponent from "@/components/General/search";
export interface IItem {
  title: string;
  BgURL: string;
}

const categories: IItem[] = [
  {
    title: "Hair",
    BgURL:
      "https://images.unsplash.com/photo-1614838000027-76439aa4aedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhhaXIlMjBjdXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Nail",
    BgURL:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbCUyMHNhbG9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Skin",
    BgURL:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjaWFsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Makeup",
    BgURL:
      "https://images.unsplash.com/photo-1613966802194-d46a163af70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwJTIwYXJ0aXN0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Index() {
  return (
    <>
      <div
        className="h-1/4 bg-cover bg-center text-white flex flex-col justify-evenly items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
        }}
      >
        <AlertComponent />
        <p className="text-3xl">Discover your external beauty</p>
        <SearchComponent />
      </div>
      <div className="flex gap-6 justify-center h-full w-11/12 flex-wrap py-10">
        {categories?.map((el, idx) => {
          return <HomeCard key={idx} item={el} />;
        })}
      </div>
    </>
  );
}
