import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState(null);
  const [businessUser, setBusinessUser] = useState();
  const [businessToken, setBusinessToken] = useState();

  useEffect(() => {
    const prev = localStorage.getItem("user");
    const localBusiness = localStorage.getItem("business");
    if (prev) {
      setUser(JSON.parse(prev));
    }
    if (localBusiness) {
      setBusinessUser(JSON.parse(localBusiness));
    }
  }, []);

  const setUserData = (data: any) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setUserData,
        token,
        setToken,
        businessUser,
        setBusinessUser,
        businessToken,
        setBusinessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
