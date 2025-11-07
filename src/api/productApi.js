import API from "./api";


const getAuthHeader = () => {
  const token = localStorage.getItem("token"); 
  return { headers: { Authorization: `Bearer ${token}` } };
};


export const getProducts = () => API.get("/products");

export const createProduct = (data) => API.post("/products", data, getAuthHeader());

export const updateProduct = (id, data) => API.put(`/products/${id}`, data, getAuthHeader());


export const deleteProduct = (id) => API.delete(`/products/${id}`, getAuthHeader());
