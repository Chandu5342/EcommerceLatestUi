import { useState, useEffect } from "react";
import { checkout } from "../api/checkoutApi";
import { getCart } from "../api/cartApi";
import { Container, Form, Button, Card } from "react-bootstrap";
import ReceiptModal from "../components/ReceiptModal";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({ name: "", email: "" });
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCart(res.data.items);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error loading cart:", err);
    }
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await checkout({ cartItems: cart });
      setReceiptData({
        ...res.data,
        name: form.name,
        email: form.email,
        items: cart,
      });
      setShowReceipt(true);
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Checkout failed, please try again.");
    }
  };

  return (
    <Container className="my-4">
      <Card className="p-4 shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-3">Checkout</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
            />
          </Form.Group>
          <h5 className="mb-3">Total: ${total.toFixed(2)}</h5>
          <Button type="submit" className="w-100">
            Place Order
          </Button>
        </Form>
      </Card>

      {receiptData && (
        <ReceiptModal
          show={showReceipt}
          onHide={() => setShowReceipt(false)}
          receipt={receiptData}
        />
      )}
    </Container>
  );
}
