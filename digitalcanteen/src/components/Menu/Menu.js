// Menu.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Menu = ({ menuItems }) => (
  <Row>
    {menuItems.map(item => (
      <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>${item.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Menu;
