import { createContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const handleLogin = async (data) => {
    const res = await loginUser(data);
    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    //console.log(res.data)
    localStorage.setItem("token", res.data.token);
  };

  const handleRegister = async (data) => {
    const res = await registerUser(data);
    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("token", res.data.token);
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
