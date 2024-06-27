// FeedbackManagement.js
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const FeedbackManagement = ({ feedbacks, onRespond }) => (
  <Container>
    <h2 className="my-4">Manage Feedback</h2>
    <Row>
      {feedbacks.map(feedback => (
        <Col key={feedback.id} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Feedback for {feedback.itemName}</Card.Title>
              <Card.Text>Rating: {feedback.rating}</Card.Text>
              <Card.Text>Comment: {feedback.comment}</Card.Text>
              <Button variant="primary" onClick={() => onRespond(feedback.id)}>Respond</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default FeedbackManagement;
