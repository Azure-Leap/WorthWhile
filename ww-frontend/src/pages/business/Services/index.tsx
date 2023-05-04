import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { BiRocket } from "react-icons/bi";
import BusinessLayout from "@/components/BusinessLayout";

interface Data {
  id: number;
  name: string;
  age: number;
  email: string;
}

const data: Data[] = [
  { id: 1, name: "John", age: 25, email: "john@example.com" },
  { id: 2, name: "Jane", age: 30, email: "jane@example.com" },
  { id: 3, name: "Bob", age: 40, email: "bob@example.com" },
  { id: 4, name: "Alice", age: 35, email: "alice@example.com" },
  { id: 5, name: "Mike", age: 45, email: "mike@example.com" },
  { id: 6, name: "Sarah", age: 20, email: "sarah@example.com" },
];

const TableWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const handleServiceClick = () => {
    // Handle service button click
  };

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

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
      <div className="flex items-center justify-between mb-4  ">
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
          onClick={handleServiceClick}
        >
          <BiRocket className="w-5 h-5 mr-2" />
          Service
        </button>
      </div>
      <table className="table-fixed w-full rounded shadow">
        <thead>
          <tr>
            <th className="w-1/6">ID</th>
            <th className="w-1/3">Name</th>
            <th className="w-1/6">Age</th>
            <th className="w-1/2">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{row.id}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.age}</td>
              <td className="border px-4 py-2">{row.email}</td>
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
    </BusinessLayout>
  );
};

export default TableWithPagination;
