import React from "react";
import Link from "next/link";

interface IFavourite {
  services: string;
  serviceImage: string;
  description: string;
}

const Favourite = ({ apps }: any) => {
  return (
    <div className="ml-5 mt-2 container">
      <div>
        <h1 className="text-2xl ">Favourite</h1>
      </div>
      <div>
        {apps.map((app: any, i: number) => (
          <div key={i} className="flex my-5 p-2  ">
            <Link href={`/details/${app._id}`} className="w-5/6">
              <img
                src={app.profileImg}
                alt="Салоны зураг"
                className="rounded-xl"
              />
            </Link>
            <div className="w-3/6 pl-5">
              <h1 className="mb-4 text-xl font-medium">{app.businessName}</h1>
              <h3 className="text-gray-600">{app.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
