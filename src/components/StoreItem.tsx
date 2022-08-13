import React from "react";
import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const StoreItem = ({ id, name, price, image }: StoreItemProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
    </Card>
  );
};

export default StoreItem;
