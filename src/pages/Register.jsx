import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { handleRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(form);
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Create Account</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={onChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={onChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={onChange} required />
          </Form.Group>
          <Button type="submit" className="w-100">Register</Button>
        </Form>
      </Card>
    </Container>
  );
}
