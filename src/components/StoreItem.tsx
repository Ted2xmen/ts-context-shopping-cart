import React from "react";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const StoreItem = ({ id, name, price, image }: StoreItemProps) => {
  return <div>StoreItem</div>;
};

export default StoreItem;
