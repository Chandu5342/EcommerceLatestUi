import API from "./api";


const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
};


export const checkout = (cartItems) => {
  return API.post("/checkout", { cartItems }, getAuthHeader());
};
