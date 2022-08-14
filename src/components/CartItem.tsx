import React from "react";
import { useShoppingCart } from "../hooks/useShoppingCart";
import items from "../data/items.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilites/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i: any) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "120px", height: "75px", objectFit: "cover" }}
      />
      <div>
        <div>
          {item.title}{" "}
          {quantity > 1 && <span className="text-muted">x{quantity} </span>}
        </div>
        <div>{formatCurrency(item.price)}</div>
      </div>
      <div>
        <div>{formatCurrency(item.price * quantity)}</div>
      </div>
      <Button variant="outline-danger" onClick={() => removeFromCart(id)}>
        x
      </Button>
    </Stack>
  );
};

export default CartItem;
