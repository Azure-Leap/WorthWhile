import { useState, createContext } from "react";

export const AlertContext = createContext<any>(null);

const AlertProvider = ({ children }: any) => {
  const [message, setMessage] = useState("");
  const [isAlert, setAlert] = useState(false);
  const [status, setStatus] = useState("error");

  return (
    <AlertContext.Provider
      value={{ message, status, isAlert, setMessage, setAlert, setStatus }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
