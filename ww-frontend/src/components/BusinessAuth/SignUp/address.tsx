import { useState } from "react";

let add: any = {
  city: "Улаанбаатар",
  district: "Сүхбаатар",
  street: "Хүннү",
  zipCode: 34576,
};

const AddressAuth = ({ address, setAddress }: any) => {
  const setAdd = (
    key: "city" | "district" | "street" | "zipCode",
    value: any
  ) => {
    add[key] = value;
    let newAdd = { ...add };
    newAdd[key] = value;
    setAddress(newAdd);
  };

  return (
    <>
      <h2 className="text-xl font-medium mb-4 ">Enter your address</h2>
      <p className="text-xs text-gray-500">Where can clients find you?</p>
      <div className="flex flex-col text-left">
        <div>
          <label
            htmlFor="dropdown"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            City
          </label>
          <select
            id="dropdown"
            name="dropdown"
            value={add.city}
            onChange={(e) => setAdd("city", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select an option</option>
            <option value="Улаанбаатар">Улаанбаатар</option>
            <option value="Дархан">Дархан</option>
            <option value="Эрдэнэт">Эрдэнэт</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="dropdown"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            District
          </label>
          <select
            id="dropdown"
            name="dropdown"
            value={add.district}
            onChange={(e) => setAdd("district", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select an option</option>
            <option value="option1">Сүхбаатар</option>
            <option value="option2">Баянзүрх</option>
            {/* <option value="option3">Option 3</option> */}
          </select>
        </div>
        <label className="font-medium mb-1">Street address</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          type="text"
          // value={add.street}
          onChange={(e) => setAdd("street", e.target.value)}
          placeholder="Street address"
        />
        <label className="font-medium mb-1">Zip Code</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          type="number"
          // value={add.zipCode}
          onChange={(e) => setAdd("zipCode", e.target.value)}
          placeholder="Zip code"
        />
      </div>
    </>
  );
};

export default AddressAuth;
