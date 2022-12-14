import React from "react";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../hooks/useShoppingCart";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink} className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink} className="text-dark">
            Store
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            variant="outline-primary"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.3rem",
                height: "1.3rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
