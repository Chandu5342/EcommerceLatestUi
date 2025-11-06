import { createContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const handleLogin = async (data) => {
    const res = await loginUser(data);
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

  const handleRegister = async (data) => {
    const res = await registerUser(data);
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
