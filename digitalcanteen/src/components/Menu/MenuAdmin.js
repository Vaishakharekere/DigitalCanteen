// MenuAdmin.js
import React, { useState } from 'react';
import {Card, Button, Form, Col, Row } from 'react-bootstrap';

const MenuAdmin = ({ menuItems, onAdd, onEdit, onDelete }) => {
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', image: '' });

  const handleAdd = () => {
    onAdd(newItem);
    setNewItem({ name: '', description: '', price: '', image: '' });
  };

  return (
    <div className="menu-admin">
      <h2 className="my-4">Manage Menu</h2>
      <Form className="mb-4">
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Description" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })} />
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Price" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: e.target.value })} />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Image URL" value={newItem.image} onChange={e => setNewItem({ ...newItem, image: e.target.value })} />
          </Col>
          <Col>
            <Button variant="primary" onClick={handleAdd}>Add Item</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                <Button variant="warning" onClick={() => onEdit(item)}>Edit</Button>
                <Button variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuAdmin;
