import { useState, createContext } from "react";

export const OrderContext = createContext<any>(null);

const OrderProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<String>("BookModal");

  return (
    <OrderContext.Provider value={{ modal, setModal, open, setOpen }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
