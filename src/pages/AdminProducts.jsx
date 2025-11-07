import { useEffect, useState } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../api/productApi";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({ name: product.name, price: product.price, image: product.image || "" });
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setForm({ name: "", price: "", image: "" });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProduct) {
      await updateProduct(editingProduct._id, form);
    } else {
      await createProduct(form);
    }
    setShowModal(false);
    fetchProducts();
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container className="my-4">
      <h3 className="mb-4">Admin: Manage Products</h3>
      <Button onClick={handleAdd} className="mb-3">Add New Product</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                {p.image ? <img src={p.image} alt={p.name} style={{ width: "50px" }} /> : "—"}
              </td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(p)} className="me-2">Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(p._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={onChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={form.price} onChange={onChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" name="image" value={form.image} onChange={onChange} />
            </Form.Group>
            <Button type="submit" className="w-100">{editingProduct ? "Update" : "Add"}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
