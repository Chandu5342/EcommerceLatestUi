import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navbar as BsNavbar, Nav, Container, Button } from "react-bootstrap";

export default function Navbar() {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <BsNavbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="fw-bold text-primary">
          🛒 VibeCart
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            {user ? (
              <>
              <Nav.Link as={Link} to="/products/manage">
                Manage Products
                </Nav.Link>
                <span className="text-muted small">Hi, {user.name}</span>
                <Button size="sm" variant="outline-danger" onClick={onLogout}>
                  Logout
                </Button>
                
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
