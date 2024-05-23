import { Col, Container, Row } from "react-bootstrap";
import Img1 from "../Assets/img1.jpeg";
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import "../../index.css"
import { IoStar } from "react-icons/io5";
import Product1 from "../Assets/1.jpeg"
import Product2 from "../Assets/2.jpeg"
import Product3 from "../Assets/3.jpeg"
import Footer from "../../Footer/Footer"




export default function ProductDetail() {

 
  const [price, setPrice] = useState(1000);

  const handleRangeChange = (event) => {
      const newPrice = parseInt(event.target.value);
      setPrice(newPrice);
  };


  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

    

  return (
    <div>
    <Container>
      <Row>
        <Col style={{ display: 'flex', flexDirection: 'column', marginTop: '9vh', marginLeft: '10vh' }}>
         <img src={Img1} alt="" style={{width: '14vh', height: '20vh'}}/>
         <img src={Img1} alt="" style={{width: '14vh', height: '20vh', marginTop: '2vh'}}/>
         <img src={Img1} alt="" style={{width: '14vh', height: '20vh', marginTop: '2vh'}}/>
         <img src={Img1} alt="" style={{width: '14vh', height: '20vh', marginTop: '2vh'}}/>
         <img src={Img1} alt="" style={{width: '14vh', height: '20vh', marginTop: '2vh'}}/>
        
        </Col>

        <Col>
        <img src={Img1} alt="" style={{marginLeft: '-60vh', height: '120vh', width: '85vh', marginTop:'3vh'}}/>
        </Col>

        <Col  style={{width: '200vh', height: '320vh', backgroundColor: '#e0d8cf', marginTop: '3vh', marginLeft: '-40vh'}}>
        
         <h4 style={{color: '#494946',  fontWeight: '700', marginTop: '8vh'}}> Fabrics 2 Piece</h4>
         <h6 style={{color: '#494946', fontWeight: '700'}}>Printed Embroidered Cambric | Top Bottoms</h6>
         <h2 style={{color: '#494946', fontWeight: '700', marginTop: '7vh'}}>PKR 3,590</h2>

         <h6 style={{color: '#494946',  fontWeight: '700', marginTop: '4vh'}}> Availability: in stock</h6>
         <h6 style={{color: '#494946', fontWeight: '700'}}>SKU ICA230601</h6>

         <h2 style={{color: '#494946', fontWeight: '700', marginTop: '7vh'}}>Filters color:</h2>
         <div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'white', display: 'flex', marginTop: '8vh', marginLeft: '5vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>White</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'red', marginTop: '2vh', marginLeft: '5vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Red</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'cyan', marginTop: '2vh', marginLeft: '5vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Cyan</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'navy', marginTop: '2vh', marginLeft: '5vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Navy</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'darkred', marginTop: '2vh', marginLeft: '5vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Vermillion</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'orange', marginTop: '2vh', marginLeft: '5vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Orange</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'black', marginTop: '-33.5vh', marginLeft: '30vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Black</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'yellow', marginTop: '2vh', marginLeft: '30vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Yellow</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'green', marginTop: '2vh', marginLeft: '30vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Green</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'magenta', marginTop: '2vh', marginLeft: '30vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Magenta</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'red', marginTop: '2vh', marginLeft: '30vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Red</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'brown', marginTop: '2vh', marginLeft: '30vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Brown</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'grey', marginTop: '-33.5vh', marginLeft: '55vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Grey</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'blue', marginTop: '2vh', marginLeft: '55vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Blue</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'beigh', marginTop: '2vh', marginLeft: '55vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Beigh</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'purple', marginTop: '2vh', marginLeft: '55vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Purple</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'pink', marginTop: '2vh', marginLeft: '55vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Pink</span>
         </div>
         <div style={{width: '4vh', height: '4vh', backgroundColor: 'brown', marginTop: '2vh', marginLeft: '55vh'}}>
           <span style={{marginLeft: '6vh', color: '#9c7855'}}>Darks</span>
         </div>
         </div>

         <div>
    <h3 style={{color: '#494946', fontWeight: '500', marginTop: '6vh', marginLeft: '4vh'}}>Size</h3>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
        <div style={{borderRadius: '50%', border: '2px solid #4f4e4a', width: '8vh', height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft: '4vh'}}>
            <span style={{color:'#4a4945', fontWeight: 'bold'}}>XS</span>
        </div>
        <div style={{borderRadius: '50%', border: '2px solid #4f4e4a', width: '8vh', height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5vh'}}>
            <span style={{color:'#4a4945', fontWeight: 'bold'}}>S</span>
        </div>
        <div style={{borderRadius: '50%', border: '2px solid #4f4e4a', width: '8vh', height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5vh'}}>
            <span style={{color:'#4a4945', fontWeight: 'bold'}}>M</span>
        </div>
        <div style={{borderRadius: '50%', border: '2px solid #4f4e4a', width: '8vh', height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5vh'}}>
            <span style={{color:'#4a4945', fontWeight: 'bold'}}>L</span>
        </div>
        <div style={{borderRadius: '50%', border: '2px solid #4f4e4a', width: '8vh', height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5vh'}}>
            <span style={{color:'#4a4945', fontWeight: 'bold'}}>XL</span>
        </div>

    </div>

    <h3 style={{color: '#494946', fontWeight: '500', marginTop: '6vh', marginLeft: '4vh'}}>Prize</h3>

    <>
            <Form.Label style={{color:'#494946'}}>Range</Form.Label>
            <Form.Range  className="custom-range" min={1000} max={10000} step={500} value={price} onChange={handleRangeChange}/>
            <p style={{color:'#494946'}}>Price: {price}</p>
        </>

        <h4 style={{color: '#7a7671', fontWeight: '500', marginTop: '6vh', marginLeft: '6vh'}}>Quantity</h4>
        <div className="container"  style={{ display: 'flex',}}>
          <div style={{ display: 'flex' }}>
      <div className="box" onClick={handleDecrement}  style={{marginTop: '4vh',width: '40px',height: '40px',border: '2px solid black', display: 'flex',justifyContent: 'center', alignItems: 'center',cursor: 'pointer', fontSize: '20px'}}>-</div>
      <div className="box"  style={{marginTop: '4vh',width: '40px',height: '40px',border: '2px solid black', display: 'flex',justifyContent: 'center', alignItems: 'center',cursor: 'pointer', fontSize: '20px'}}>{count}</div>
      <div className="box" onClick={handleIncrement}  style={{marginTop: '4vh',width: '40px',height: '40px',border: '2px solid black', display: 'flex',justifyContent: 'center', alignItems: 'center',cursor: 'pointer', fontSize: '20px'}}>+</div>
      </div>
      <button className="horizontal-button" style={{marginTop: '3vh',color: 'white',backgroundColor: '#4f4e4a',   marginLeft: '7vh',width: '30vh', height: '9vh'}}>+ADD TO BAG</button>
    </div>
   
    <h4 style={{color: '#494946', fontWeight: '500', marginTop: '3vh', marginLeft: '6vh'}}>Details</h4>
    <p style={{fontSize: '2.5vh', color:'#494946'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas iste eveniet quam nemo quidem eaque nisi temporibus porro sit, 
      animi placeat harum necessitatibus possimus aperiam nam, repellat officia. Modi, illo.</p>
      <h4 style={{color: 'black', fontWeight: '500', marginTop: '3vh', marginLeft: '6vh'}}>Reviews</h4>
      <h6 style={{color: '#494946', fontWeight: '500', marginTop: '3vh', marginLeft: '6vh'}}>Your Reviewing:</h6>
      <h6 style={{color: '#494946', fontWeight: '500', marginTop: '3vh', marginLeft: '6vh'}}>Printed Embroidered Cambric | Top Bottoms</h6>
      <h6 style={{color: 'black', fontWeight: '500', marginTop: '3vh', marginLeft: '6vh'}}>Your Rating:</h6>
      <h6 style={{color: '#494946', fontWeight: '500', marginTop: '3vh', marginLeft: '6vh'}}>Quality</h6>
      <div style={{marginTop: '3vh'}}>
      <IoStar style={{fontSize: '6vh', marginLeft: '5vh'}}/>
      <IoStar style={{fontSize: '6vh',  marginLeft: '1vh'}}/>
      <IoStar style={{fontSize: '6vh',  marginLeft: '1vh'}}/>
      <IoStar style={{fontSize: '6vh',  marginLeft: '1vh'}}/>
      <IoStar style={{fontSize: '6vh',  marginLeft: '1vh'}}/>
      </div>

      <Form>
      <Form.Group className="mb-3 mt-4" >
        <Form.Label style={{color: '#020302', fontWeight: '500'}}>NickName</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label  style={{color: '#020302',  fontWeight: '500'}}>Summary</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label  style={{color: '#020302', fontWeight: '500'}}>Review</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
     
    </Form>
    <button className="horizontal-button" style={{marginTop: '3vh',color: 'white',backgroundColor: '#4f4e4a',   marginLeft: '7vh',width: '30vh', height: '9vh'}}>Submit Review</button>
    
</div>


        </Col>

       

    
      </Row>
      <h3 className="text-center" style={{color:'#4f4e4a', marginTop: '4vh'}}>RELATED PRODUCTS</h3>

      <Row>
     
      <Col>
      <img  src={Product1} alt="" style={{width: '40vh', height: '60vh'}}/>
      <h6 style={{marginTop: '1vh'}}>Fabrics 3 Piece Suit</h6>
      <h6 style={{marginTop: '0'}}>Printed Embroidered Lawn</h6>
      <h4 style={{marginLeft: '8vh'}}>PKR 5,390</h4>
      
      </Col>


      <Col>
      <img src={Product2} alt="" style={{width: '40vh', height: '60vh'}}/>
      <h6 style={{marginTop: '1vh'}}>Fabrics 3 Piece Suit</h6>
      <h6 style={{marginTop: '0'}}>Printed Embroidered Lawn</h6>
      <h4 style={{marginLeft: '8vh'}}>PKR 5,390</h4>
      
      </Col>

      <Col>
      <img src={Product3} alt="" style={{width: '40vh', height: '60vh'}}/>
      <h6 style={{marginTop: '1vh'}}>Fabrics 3 Piece Suit</h6>
      <h6 style={{marginTop: '0'}}>Printed Embroidered Lawn</h6>
      <h4 style={{marginLeft: '8vh'}}>PKR 5,390</h4>
      
      </Col>


      <Col>
      <img src={Product1} alt="" style={{width: '40vh', height: '60vh'}}/>
      <h6 style={{marginTop: '1vh'}}>Fabrics 3 Piece Suit</h6>
      <h6 style={{marginTop: '0'}}>Printed Embroidered Lawn</h6>
      <h4 style={{marginLeft: '8vh'}}>PKR 5,390</h4>
      
      </Col>
     

      </Row>

       <Footer/>
    </Container>
    </div>

    
  );
}
