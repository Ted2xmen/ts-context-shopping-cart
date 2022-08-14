import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../hooks/useShoppingCart";

const ShoppingCart = () => {
  const { closeCart, isOpen } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default ShoppingCart;
