import { Modal, Button, Table } from "react-bootstrap";

export default function ReceiptModal({ show, onHide, receipt }) {
  if (!receipt) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>🧾 Order Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Name:</strong> {receipt.name}</p>
        <p><strong>Email:</strong> {receipt.email}</p>
        <p><strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
        <hr />
        <h5>Order Summary</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {receipt.items.map((item) => (
              <tr key={item._id}>
                <td>{item.product.name}</td>
                <td>{item.qty}</td>
                <td>${(item.product.price * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h5 className="text-end mt-3">Total: ${receipt.total.toFixed(2)}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
