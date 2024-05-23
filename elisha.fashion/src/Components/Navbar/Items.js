import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from './ShoppingCart';

const Items = ({ id, description, title, icon, price, quantity}) => {
  
    const {removeItem, increment, decrement} = useContext(CartContext);
  
    return (
    <div className='m-3'>
        
        <Container>
                    <div className='d-flex justify-content-between'>

                        <div className='mt-5' style={{ width:"10%" }}>
                            <img className='img-fluid' src={icon} alt='image' />
                        </div>

                        <div className='m-5' style={{marginTop:"vw"}}>
                            <h2>{ title}</h2>
                            <p>{description}</p>
                        </div>

                        <div className='add-minus-quantity mt-5'>
                             <LuMinus  onClick={ () => decrement(id)}/>
                            <input  type='text' placeholder={ quantity } style={{ width: "20px", height: "4vh",
                             marginLeft:"2vw", marginRight:"2vw" }}/>
                            <FaPlus onClick={ () => increment(id)}/>
                        </div>

                        <div className='mt-5'>
                            <h5>{ price }</h5>
                        </div>

                        <div className='remove-item mt-5'>
                               <FaTrashAlt onClick={ () => removeItem(id)}/>
                        </div>

                       
                    </div>

                    </Container>
    </div>
  )
}

export default Items;