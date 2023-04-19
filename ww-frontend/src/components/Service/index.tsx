import React from "react";

const Service = () => {
  return (
    <div className="border-t-2 border-gray-200 text-start flex justify-between py-3 ">
      <div>
        <h1 className="text-lg">Эрэгтэй үс тайралт</h1>
        <p className="text-sm text-gray-500 font-light">
          Үс угаалт,үс тайралт, хатаалт, загвар оруулах.
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex-col gap-1 text-end">
          <p className="text-sm font-bold">$10</p>
          <p className="text-xs">30min</p>
        </div>
        <button className="text-xs bg-cyan-500 text-white px-4 py-1 rounded-lg h-9">
          Book
        </button>
      </div>
    </div>
  );
};

export default Service;
