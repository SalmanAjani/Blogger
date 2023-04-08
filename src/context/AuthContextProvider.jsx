import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (formData) => {
    const res = await axios.post("http://localhost:4000/auth/login", formData);
    setCurrentUser(res.data.userData.data);
    localStorage.setItem("access_token", res.data.userData.token);
  };

  const logout = async () => {
    await axios.post("http://localhost:4000/auth/logout");
    setCurrentUser(null);
    localStorage.removeItem("access_token");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
