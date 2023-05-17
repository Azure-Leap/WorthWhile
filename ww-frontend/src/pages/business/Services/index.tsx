import { useState, useContext, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiTrash2,
  FiEdit,
} from "react-icons/fi";
import { BiRocket } from "react-icons/bi";
import axios from "axios";
import BusinessLayout from "@/components/BusinessLayout";
import ServiceModal from "@/components/Modals/ServiceModal";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";
import { BASE_URL } from "@/variables";

const TableWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [services, setServices] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState();
  const { businessUser, setBusinessUser } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);

  const id = businessUser?._id;

  const handleIsOpen = (): any => {
    setIsOpen(!isOpen);
  };
  const editHandler = (row: any) => {
    setEditData(row);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/business/services?businessId=${businessUser?._id}`)
      .then((res) => {
        setServices(res.data.services);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);

  const deleteHandler = (row: any) => {
    axios
      .delete(`${BASE_URL}/services/${row?._id}`)
      .then((res) => {
        setMessage(res.data.message);
        setStatus("success");
      })
      .catch((err) => {
        console.log("err", err);
        setMessage(err);
        setStatus("error");
      });
  };

  const filteredData = services?.filter((row: any) =>
    row.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = services?.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(services?.length / rowsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${
            currentPage === i ? "bg-gray-200" : "bg-white"
          } hover:bg-gray-100 py-2 px-4`}
          onClick={() => handleClick(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <BusinessLayout>
      <div className="m-auto w-10/12 py-5">
        <div className="flex items-center justify-between mb-5">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FiSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              className="py-2 pl-10 pr-4 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            type="button"
            className=" flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue"
            onClick={handleIsOpen}
          >
            <BiRocket className="w-5 h-5 mr-2" />
            Service
          </button>
          <ServiceModal
            isOpen={isOpen}
            handleIsOpen={handleIsOpen}
            editData={editData}
          />
        </div>
        <table className="table-fixed  rounded shadow ">
          <thead className="border">
            <tr className="text-sm bg-gray-200">
              <th className=" w-1/12">№</th>
              <th className=" w-1/3">Name</th>
              <th className=" w-1/6">Category</th>
              <th className=" w-1/6">Image</th>
              <th className=" w-1/6">Price</th>
              <th className=" w-1/6">IsMinPrice</th>
              <th className=" w-2/3">Description</th>
              <th className=" w-1/6">Duration</th>
              <th className=" w-1/6">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((row: any, id: number) => (
              <tr key={row._id} className="text-center text-xs ">
                <td className="border px-4 py-2">{id + 1}</td>
                <td className="border px-4 py-2">{row.serviceName}</td>
                <td className="border px-4 py-2">{row.categoryId.catType}</td>
                <td className="border px-4 py-2">Zurag</td>
                <td className="border px-4 py-2">{row.servicePrice.price}</td>
                <td className="border px-4 py-2">
                  {row.servicePrice.isMin ? "Тийм" : "Үгүй"}
                </td>
                <td className="border px-4 py-2">{row.description}</td>
                <td className="border px-4 py-2">{row.duration}</td>
                <td className="border text-lg flex justify-evenly ">
                  <FiEdit
                    color="green"
                    className="cursor-pointer"
                    onClick={() => {
                      editHandler(row);
                    }}
                  />
                  <FiTrash2
                    color="red"
                    className="cursor-pointer"
                    onClick={() => {
                      deleteHandler(row);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button
            onClick={() =>
              currentPage > 1 ? setCurrentPage(currentPage - 1) : null
            }
            disabled={currentPage === 1}
            className="bg-white hover:bg-gray-100 py-2 px-4 mr-2"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          {renderPagination()}
          <button
            onClick={() =>
              currentPage < totalPages ? setCurrentPage(currentPage + 1) : null
            }
            disabled={currentPage === totalPages}
            className="ml-2"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default TableWithPagination;
