import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AlertContext } from "@/context/alertContext";
interface Props {
  isOpen: boolean;
  handleIsOpen: any;
  editData: any;
}

const StaffModal: React.FC<Props> = ({ isOpen, handleIsOpen, editData }) => {
  const [stafferName, setNameStafferName] = useState("");
  const [staffImg, setStaffImg] = useState("");
  const [about, setAbout] = useState<any>();
  const [businessId, setBusinessId] = useState<string>();
  const { setMessage, setStatus } = useContext(AlertContext);

  const handleSubmit = () => {
    editData ? updateService() : addService();
    handleIsOpen();
  };

  useEffect(() => {
    if (editData) {
      setNameStafferName(editData.stafferName);
      setStaffImg(editData.staffImg);
      setAbout(editData.about);
    }
  }, [editData]);

  useEffect(() => {
    const localBusiness: any = localStorage.getItem("business");
    const parsedBusiness = JSON.parse(localBusiness);
    setBusinessId(parsedBusiness._id);
  }, []);

  const addService = async () => {
    try {
      const res = await axios.post("http://localhost:8888/staffs", {
        businessId,
        stafferName,
        staffImg,
        about,
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
      const res = await axios.put(
        `http://localhost:8888/staffs/${editData?._id}`,
        {
          businessId,
          stafferName,
          staffImg,
          about,
        }
      );
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
        <h2 className="text-xl font-bold mb-4">Шинэ ажилтан нэмэх</h2>
        <h5>Ажилтны нэр:</h5>
        <input
          type="text"
          value={stafferName}
          onChange={(e) => {
            setNameStafferName(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Service"
        />
        <h5>Ажилтны зураг URL:</h5>
        <input
          type="text"
          value={staffImg}
          onChange={(e) => {
            setStaffImg(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Image Url"
        />
        <h5>Ажилтны тайлбар:</h5>
        <textarea
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
          className="border rounded-lg px-3 py-2 w-full mb-4"
          placeholder="Service about"
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

export default StaffModal;
