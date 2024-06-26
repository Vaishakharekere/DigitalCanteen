// App.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Menu from './components/Menu/Menu';
import CategorisedMenu from './components/Menu/CategorisedMenu';
import MenuAdmin from './components/Menu/MenuAdmin';
import Highlights from './components/Menu/Highlights';
import OrderForm from './components/Order/OrderForm';
import OrderTracking from './components/Order/OrderTracking';
import OrderManagement from './components/Order/OrderManagement';
import Feedback from './components/Feedback/Feedback';
import FeedbackManagement from './components/Feedback/FeedbackManagement';
import SalesAnalytics from './components/SalesAnalytics/SalesAnalytics';
import Notifications from './components/Notifications/Notifications';
import SupplierManagement from './components/AdditionalFeatures/SupplierManagement';
import LoyaltyProgram from './components/AdditionalFeatures/LoyaltyProgram';
import './styles/custom.css';  // Import your CSS file


const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [popularItems, setPopularItems] = useState([]);

  const handleAddMenuItem = (item) => {
    setMenuItems([...menuItems, item]);
  };

  const handleEditMenuItem = (item) => {
    // logic to edit menu item
  };

  const handleDeleteMenuItem = (itemId) => {
    setMenuItems(menuItems.filter(item => item.id !== itemId));
  };

  const handleSubmitOrder = (order) => {
    setOrders([...orders, { ...order, id: orders.length + 1, status: 'pending' }]);
  };

  const handleUpdateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order => (order.id === orderId ? { ...order, status } : order)));
  };

  const handleSubmitFeedback = (feedback) => {
    setFeedbacks([...feedbacks, { ...feedback, id: feedbacks.length + 1 }]);
  };

  return (
    <Container>
      <h1 className="my-4">Restaurant Management System</h1>
      <MenuAdmin menuItems={menuItems} onAdd={handleAddMenuItem} onEdit={handleEditMenuItem} onDelete={handleDeleteMenuItem} />
      <CategorisedMenu categories={categories} />
      <Highlights specials={specials} popularItems={popularItems} />
      <OrderForm menuItems={menuItems} onSubmit={handleSubmitOrder} />
      <OrderTracking orderStatus={orders.length > 0 ? orders[0].status : 'No orders'} />
      <OrderManagement orders={orders} onUpdateStatus={handleUpdateOrderStatus} />
      <Feedback menuItems={menuItems} onSubmitFeedback={handleSubmitFeedback} />
      <FeedbackManagement feedbacks={feedbacks} onRespond={(feedbackId) => { /* handle response logic */ }} />
    </Container>
  );
};

export default App;
