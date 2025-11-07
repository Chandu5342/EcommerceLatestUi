import API from "./api";


const getAuthHeader = () => {
  const token = localStorage.getItem("token"); 
  return { headers: { Authorization: `Bearer ${token}` } };
};


export const addToCart = (data) => {
 
  return API.post("/cart", data, getAuthHeader());
};


export const getCart = () => {
  return API.get("/cart", getAuthHeader());
};


export const removeFromCart = (id) => {
  console.log(id)
  return API.delete(`/cart/${id}`, getAuthHeader());
};
