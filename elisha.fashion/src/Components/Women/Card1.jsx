// Card.js

import React from 'react';
import "./Card1.css"

const Card1 = ({id, icon, title, desc, price }) => {
  return (
    <div className="box" style={{ width: '33%', padding: '0 10px', marginBottom: '-18vh' }}>
      <img src={icon} alt="not found" style={{ maxWidth: '300%', height: '40%', marginTop: '20vh', marginLeft: '3vh' }} />
      <br />
      <div style={{ color: '#6a6864', fontWeight: '700', marginLeft: '3vh', }}>
        
        <div href={`/women/${id}`} style={{ textDecoration: 'none' }}>
       
        {title}
       
        </div>
       
       
        <br />
        <div style={{ marginTop: '-4vh'}}>
        {desc }
        <br />
        {price}
        </div>
       
      </div>
      </div>
     
   
  );
};

export default Card1;
