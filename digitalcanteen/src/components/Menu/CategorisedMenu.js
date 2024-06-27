// CategorisedMenu.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from './Menu';

const CategorisedMenu = ({ categories }) => (
  <Container>
    {categories.map(category => (
      <div key={category.name}>
        <h2 className="mt-4">{category.name}</h2>
        <Menu menuItems={category.items} />
      </div>
    ))}
  </Container>
);

export default CategorisedMenu;
