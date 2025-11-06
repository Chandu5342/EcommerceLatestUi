import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(form);
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={onChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={onChange} required />
          </Form.Group>
          <Button type="submit" className="w-100">Login</Button>
        </Form>
      </Card>
    </Container>
  );
}
