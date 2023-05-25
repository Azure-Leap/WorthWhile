import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/variables";

export const NavContext = createContext<any>(null);

const NavProvider = ({ children }: any) => {
  const [allBusiness, setAllBusiness] = useState(null);
  useEffect(() => {
    // const getAllBusiness = async () => {
    //   try {
    //     const res = await axios.get(`${BASE_URL}/business`);
    //     setAllBusiness(res.data.services);
    //   } catch (err) {
    //     console.log("navContext getAll err", err);
    //   }
    // };
    // getAllBusiness();
  }, []);

  return (
    <NavContext.Provider
      value={{
        allBusiness,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
