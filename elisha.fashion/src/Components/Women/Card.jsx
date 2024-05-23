// Card.js

import React from 'react';
import { NavLink } from 'react-bootstrap';

const Card = ({id, icon, title, desc, price }) => {
  return (
    <div className="box" style={{ width: '33%', padding: '0 10px', marginBottom: '-18vh' }}>
      <img src={icon} alt="not found" style={{ maxWidth: '100%', height: '70%', marginTop: '10vh', marginLeft: '3vh' }} />
      <br />
      
        <NavLink href={`/women/${id}`}>
        <div style={{ color: '#6a6864', fontWeight: '700', marginLeft: '3vh' }}>
        {title}
        </div>
        </NavLink>
       
        <br />
        <div style={{marginTop: '-4vh', marginLeft: '3vh', color: '#6a6864', fontWeight: '700'}}>
        {desc}
        <br />
        {price}
        </div>
      </div>
   
  );
};

export default Card;
