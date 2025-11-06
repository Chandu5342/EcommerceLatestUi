import { Card, Button, Form } from "react-bootstrap";

export default function CartItem({ item, onRemove, onQtyChange }) {
  return (
    <Card className="shadow-sm border-0 p-3 d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src={item.product.image || "https://via.placeholder.com/80"}
          alt={item.product.name}
          style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "10px" }}
        />
        <div className="ms-3">
          <h5>{item.product.name}</h5>
          <p className="text-muted mb-0">${item.product.price}</p>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <Form.Select
          size="sm"
          value={item.qty}
          onChange={(e) => onQtyChange(Number(e.target.value))}
          className="me-3"
          style={{ width: "70px" }}
        >
          {[1, 2, 3, 4, 5].map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </Form.Select>
        <Button variant="outline-danger" size="sm" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </Card>
  );
}
