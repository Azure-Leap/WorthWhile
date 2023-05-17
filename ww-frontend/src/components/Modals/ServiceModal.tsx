import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AlertContext } from "@/context/alertContext";
import { BASE_URL } from "@/variables";
interface Props {
  isOpen: boolean;
  handleIsOpen: any;
  editData: any;
}

const ServiceModal: React.FC<Props> = ({ isOpen, handleIsOpen, editData }) => {
  const [serviceName, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState<any>();
  const [serviceImg, setImageURL] = useState("");
  const [duration, setServiceDuration] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [businessId, setBusinessId] = useState<string>();
  const [catList, setCatList] = useState<any>([]);
  const [isMin, setIsMin] = useState(false);
  const { setMessage, setStatus } = useContext(AlertContext);

  const handleSubmit = () => {
    editData ? updateService() : addService();
    handleIsOpen();
  };

  useEffect(() => {
    if (editData) {
      setName(editData.serviceName);
      setCategoryId(editData.categoryId._id);
      setPrice(editData.servicePrice.price);
      setIsMin(editData.servicePrice.isMin);
      setImageURL(editData.categoryId._id);
      setServiceDuration(editData.duration);
      setDescription(editData.description);
    }
  }, [editData]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories/`)
      .then((res) => {
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
      const res = await axios.post(`${BASE_URL}/services`, {
        categoryId,
        businessId,
        serviceName,
        serviceImg,
        price,
        isMin,
        duration,
        description,
      });
      console.log(res.data);
      setMessage(res.data.message);
      setStatus("success");
    } catch (error: any) {
      console.log(error);
      setStatus("error");
      setMessage(error.data.message);
    }
  };

  const updateService = async () => {
    console.log(editData?._id);
    try {
      const res = await axios.put(`${BASE_URL}/services/${editData?._id}`, {
        categoryId,
        businessId,
        servicePrice: { isMin, price },
        serviceName,
        serviceImg,
        duration,
        description,
      });
      console.log(res.data);
      setMessage(res.data.message);
      setStatus("success");
    } catch (error: any) {
      console.log(error);
      setStatus("error");
      console.log("Aldaa==>", error);
      // setMessage(error.data.message);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center gap-2 justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Add new service</h2>
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
          value={price}
          min="1000"
          step="1"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Price"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4"
            checked={isMin}
            onChange={() => {
              setIsMin(!isMin);
            }}
          />
          <span className="ml-3 text-sm">Доод үнэ эсэх</span>
        </div>

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
