import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [businessUser, setBusinessUser] = useState();
  const [businessToken, setBusinessToken] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
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
