import axios from "axios";

const API = axios.create({
  //baseURL: "http://localhost:5000/api",
  baseURL: "https://ecommercelatestserver.onrender.com/api"
});

API.interceptors.request.use((req) => {
  const user = localStorage.getItem("userInfo");
  if (user) {
    const { token } = JSON.parse(user);
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
