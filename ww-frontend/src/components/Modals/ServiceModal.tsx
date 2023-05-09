import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  isOpen: boolean;
  handleIsOpen: any;
}

const ServiceModal: React.FC<Props> = ({ isOpen, handleIsOpen }) => {
  const [serviceName, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [servicePrice, setPrice] = useState<any>();
  const [serviceImg, setImageURL] = useState("");
  const [duration, setServiceDuration] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [businessId, setBusinessId] = useState<string>();
  const [catList, setCatList] = useState<any>([]);

  const handleSubmit = () => {
    addService();
    handleIsOpen();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8888/categories/`)
      .then((res) => {
        console.log("RESPONSE====>", res.data.cats);
        setCatList(res.data.cats);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    const localBusiness: any = localStorage.getItem("business");
    const parsedBusiness = JSON.parse(localBusiness);
    setBusinessId(parsedBusiness._id);
  }, []);

  const addService = async () => {
    try {
      const res = await axios.post("http://localhost:8888/services", {
        categoryId,
        businessId,
        serviceName,
        serviceImg,
        servicePrice,
        duration,
        description,
      });
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Add new service:</h2>
        <h5>Үйлчилгээний нэр:</h5>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Service"
        />
        <h5>Үйлчилгээний ангилал:</h5>
        <select
          id="dropdown"
          name="dropdown"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Select an option</option>
          {catList?.map((el: any) => (
            <option key={`${el._id}`} value={el._id}>
              {el.categoryTitle}
            </option>
          ))}
        </select>
        <h5>Үйлчилгээний тариф:</h5>
        <input
          type="number"
          value={servicePrice}
          min="1000"
          step="1"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Price"
        />
        <h5>Үйлчилгээний зураг URL:</h5>
        <input
          type="text"
          value={serviceImg}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Image Url"
        />
        <h5>Үйлчилгээний хугацаа:</h5>
        <input
          type="number"
          value={duration}
          onChange={(e) => {
            setServiceDuration(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Service duration"
        />
        <h5>Үйлчилгээний тайлбар:</h5>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Service description"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleIsOpen}
            className="text-gray-500 font-medium mr-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
