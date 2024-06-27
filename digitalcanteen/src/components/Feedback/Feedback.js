// Feedback.js
import React, { useState } from 'react';
import { Card,Button, Form, Col, Row, Container } from 'react-bootstrap';

const Feedback = ({ menuItems, onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState({ itemId: '', rating: 0, comment: '' });

  const handleSubmit = () => {
    onSubmitFeedback(feedback);
    setFeedback({ itemId: '', rating: 0, comment: '' });
  };

  return (
    <Container>
      <h2 className="my-4">Leave Feedback</h2>
      <Form>
        <Row>
          <Col>
            <Form.Control as="select" value={feedback.itemId} onChange={e => setFeedback({ ...feedback, itemId: e.target.value })}>
              <option value="">Select Item</option>
              {menuItems.map(item => (
                <option value={item.id} key={item.id}>{item.name}</option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Rating (1-5)" value={feedback.rating} onChange={e => setFeedback({ ...feedback, rating: parseInt(e.target.value, 10) })} />
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Form.Control as="textarea" rows={3} placeholder="Comment" value={feedback.comment} onChange={e => setFeedback({ ...feedback, comment: e.target.value })} />
          </Col>
        </Row>
        <Button variant="primary" onClick={handleSubmit}>Submit Feedback</Button>
      </Form>
    </Container>
  );
};

export default Feedback;
