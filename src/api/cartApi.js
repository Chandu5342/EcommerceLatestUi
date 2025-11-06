import API from "./api";

// Add product to cart or update quantity if already exists
export const addToCart = (data) => {
  // data = { productId, qty }
  return API.post("/cart", data);
};

// Get all items in current user's cart with total
export const getCart = () => {
  return API.get("/cart");
};

// Remove a single cart item by cart item id
export const removeFromCart = (id) => {
  return API.delete(`/cart/${id}`);
};
