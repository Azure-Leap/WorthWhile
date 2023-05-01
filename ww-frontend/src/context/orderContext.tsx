import { useState, createContext } from "react";

export const OrderContext = createContext<any>(null);

const OrderProvider = ({ children }: any) => {
  const [services, setServices] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [staffer, setStaffer] = useState(null);
  const [business, setBusiness] = useState(null);
  const [dateToNumber, setDateToNumber] = useState(null);
  const [modal, setModal] = useState("BookModal");
  const [open, setOpen] = useState(false);

  return (
    <OrderContext.Provider
      value={{
        modal,
        setModal,
        open,
        setOpen,
        services,
        setServices,
        staffs,
        setStaffs,
        business,
        setBusiness,
        staffer,
        setStaffer,
        setDateToNumber,
        dateToNumber,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
