import { useState } from "react";

const AddressAuth = () => {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <>
      <h2 className="text-xl font-medium mb-4 ">Enter your address</h2>
      <p className="text-xs text-gray-500">Where can clients find you?</p>
      <div className="flex flex-col">
        <label className="font-medium mb-1">Street Address</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          type="text"
          value={streetAddress}
          placeholder="Street address"
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <label className="font-medium mb-1">City</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <label className="font-medium mb-1">State</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
        />
        <label className="font-medium mb-1">Zip Code</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Zip code"
        />
      </div>
    </>
  );
};

export default AddressAuth;
