import React from "react";
import Button from "@mui/material/Button";

interface IFavourite {
  services: string;
  serviceImage: string;
  description: string;
}

const Favourite = ({ apps }: { apps: IFavourite[] }) => {
  return (
    <div className="ml-5 mt-2 container">
      <div>
        <h1 className="text-2xl ">Favourite</h1>
      </div>
      <div>
        {apps.map((app: IFavourite, i: number) => (
          <div key={i} className="flex my-5 p-2  ">
            <div className="w-5/6">
              <img
                src={app.serviceImage}
                alt="Салоны зураг"
                className="rounded-xl"
              />
            </div>
            <div className="w-3/6 pl-5">
              <h1 className="mb-4 text-xl font-black">{app.services}</h1>
              <h3 className="text-gray-600">{app.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
