import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import { addToCart } from "../api/cartApi";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await addToCart({ productId, qty: 1 });
      alert("Added to cart successfully!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Please login or try again later!");
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">🛍️ Shop Products</h2>
      <Row>
        {products.map((item) => (
          <Col key={item._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={item} onAdd={() => handleAddToCart(item._id)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
