import { useEffect, useState } from "react";
import { getCart, removeFromCart, addToCart } from "../api/cartApi";
import CartItem from "../components/CartItem";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCart(res.data.items);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setMessage("Please login to view your cart.");
    }
  };

  const handleRemove = async (id) => {
    await removeFromCart(id);
    fetchCart();
  };

  const handleQtyChange = async (productId, qty) => {
    await addToCart({ productId, qty }); // same endpoint handles update
    fetchCart();
  };

  if (message)
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Alert variant="warning">{message}</Alert>
      </Container>
    );

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">No items in cart.</p>
      ) : (
        <>
          <Row className="gy-3">
            {cart.map((item) => (
              <Col key={item._id} xs={12}>
                <CartItem
                  item={item}
                  onRemove={() => handleRemove(item._id)}
                  onQtyChange={(qty) => handleQtyChange(item.product._id, qty)}
                />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Button onClick={() => navigate("/checkout")}>Proceed to Checkout</Button>
          </div>
        </>
      )}
    </Container>
  );
}
