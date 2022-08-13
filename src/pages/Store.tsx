import React from "react";
import items from "../data/items";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <h2>Store</h2>
      <Row md={2} lg={3} className="g-3">
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem item={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Store;
