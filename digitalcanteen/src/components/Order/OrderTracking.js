// OrderTracking.js
import React from 'react';
import { Container } from 'react-bootstrap';

const OrderTracking = ({ orderStatus }) => (
  <Container>
    <h2 className="my-4">Order Tracking</h2>
    <p>Status: {orderStatus}</p>
  </Container>
);

export default OrderTracking;
