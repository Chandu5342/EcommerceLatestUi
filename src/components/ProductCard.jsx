import { Card, Button } from "react-bootstrap";

export default function ProductCard({ product, onAdd }) {
  return (
    <Card className="shadow-lg border-0 h-100">
      <Card.Img
        variant="top"
        src={product.image || "https://via.placeholder.com/250"}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted">${product.price}</Card.Text>
        <Button variant="primary" onClick={onAdd} className="w-100">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
