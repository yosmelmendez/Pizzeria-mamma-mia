import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  function logout() {
    setToken(false);
  }
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
