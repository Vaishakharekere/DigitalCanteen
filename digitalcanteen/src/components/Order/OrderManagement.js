// OrderManagement.js
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const OrderManagement = ({ orders, onUpdateStatus }) => (
  <Container>
    <h2 className="my-4">Manage Orders</h2>
    <Row>
      {orders.map(order => (
        <Col key={order.id} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Order #{order.id}</Card.Title>
              <Card.Text>Customer: {order.customerName}</Card.Text>
              <Card.Text>Address: {order.address}</Card.Text>
              <Card.Text>Email: {order.email}</Card.Text>
              <Card.Text>Status: {order.status}</Card.Text>
              <Button variant="warning" onClick={() => onUpdateStatus(order.id, 'preparing')}>Set to Preparing</Button>
              <Button variant="info" onClick={() => onUpdateStatus(order.id, 'ready')}>Set to Ready</Button>
              <Button variant="success" onClick={() => onUpdateStatus(order.id, 'completed')}>Set to Completed</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default OrderManagement;
