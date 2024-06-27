// OrderForm.js
import React, { useState } from 'react';
import { Card,Button, Form, Col, Row, Container } from 'react-bootstrap';

const OrderForm = ({ menuItems, onSubmit }) => {
  const [order, setOrder] = useState({ items: [], customerName: '', address: '', email: '' });

  const handleSubmit = () => {
    onSubmit(order);
    setOrder({ items: [], customerName: '', address: '', email: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Place an Order</h2>
      <Form>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Customer Name" value={order.customerName} onChange={e => setOrder({ ...order, customerName: e.target.value })} />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Address" value={order.address} onChange={e => setOrder({ ...order, address: e.target.value })} />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Email" value={order.email} onChange={e => setOrder({ ...order, email: e.target.value })} />
          </Col>
        </Row>
        <Row className="my-4">
          {menuItems.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>${item.price}</Card.Text>
                  <Button onClick={() => setOrder({ ...order, items: [...order.items, item] })}>Add to Order</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button variant="primary" onClick={handleSubmit}>Submit Order</Button>
      </Form>
    </Container>
  );
};

export default OrderForm;
