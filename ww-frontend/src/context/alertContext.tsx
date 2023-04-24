import { useState, createContext, useEffect } from "react";

export const AlertContext = createContext<any>(null);

const AlertProvider = ({ children }: any) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("error");

  return (
    <AlertContext.Provider value={{ message, status, setMessage, setStatus }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
