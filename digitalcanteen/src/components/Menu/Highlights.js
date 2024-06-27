// Highlights.js
import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

const Highlights = ({ specials, popularItems }) => (
  <Container>
    <Row className="my-4">
      <Col>
        <h2>Daily Specials</h2>
        <Row>
          {specials.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>${item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    <Row className="my-4">
      <Col>
        <h2>Popular Items</h2>
        <Row>
          {popularItems.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>${item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Highlights;
