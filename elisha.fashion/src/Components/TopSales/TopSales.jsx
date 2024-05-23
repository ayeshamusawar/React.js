import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Filter from '../UnstitchedSuit/Filter';
import Pink from "../Assets/pink.jpg";
import Baya from "../Assets/baya.jpg";
import Circle3 from "../Assets/circle3.jpg";
import Abaya from "../Assets/Abaya.jpg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
// import Records from '../../records.json';
import Products from './products.json';
import Button from 'react-bootstrap/Button';
import Footer from '../../Footer/Footer';

const TopSales = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>

            <h1 className='header text-center'>Top Sales</h1>
            <p className='text-center'
              style={{
                color: "#666461",
                fontSize: "3vh",
                fontWeight: "600",
                marginTop: "3vh",
                marginLeft: "10vh",
              }}
            >
              Elisha offers a vast selection of women's clothing to shop.Each season<br />
              finds a careful assortment of clothing no matter the season, trend-driven <br />
              and classic pieces are available.Elisha is committed to helping shoppers<br />
              be their most stylish selves.
            </p>

          </Col>

          {/* buttons  */}
          <Filter />


          <Container className="mt-2 justify-content-center">

            <Row>

                {/* 1 Circle */}
              <Col className="mt-3" style={{ marginLeft: "25vh" }}>

                <div style={{ position: "relative", marginTop: "50px" }}>
                  <div
                    className="mt-5"
                    style={{
                      width: "200px",
                      height: "182px",
                      borderRadius: "50%",
                      backgroundColor: "#e0d8cf", // Inner color
                      position: "absolute",
                      top: "-47px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: "-1",
                      boxShadow: "inset 0px -4px 4px rgba(79, 78, 74, 0.5)", // Inner shadow
                    }}
                  >

                    <div
                      style={{
                        width: "200px",
                        height: "195px",
                        borderRadius: "50%",
                        border: "10px solid #4f4e4a", // Outer color
                        position: "absolute",
                        top: "48%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </div>

                  <img
                    src={Pink}
                    alt="Circle"
                    style={{
                      width: "163px",
                      height: "161px",
                      borderRadius: "50%",
                      top: "90px",
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "1",
                    }}
                  />
                  {/* Input field */}
                  <input type="text" placeholder="70%"

                    style={{
                      width: "105%", height: "30px", borderRadius: "15px", position: "absolute", top: "60%", left: "50%",
                      transform: "translate(-48%, 250%)", textAlign: "center", border: "none", backgroundColor: "#e0d8cf",
                      color: "#4f4e4a", fontSize: "16px", padding: "10px", boxSizing: "border-box", zIndex: "1",
                      fontWeight: "bold"
                    }}
                  />
                </div>


                <h3
                  className="header text-center"
                  style={{
                    color: "#605f5f",
                    marginTop: "44vh",
                    fontWeight: "bold",
                    fontSize: "3vh",
                  }}
                >
                  UNIVERSITY WEAR
                </h3>

              </Col>

              {/* 2nd Circle */}
              <Col className="mt-3" style={{ marginLeft: "3vw" }}>
                <div style={{ position: "relative", marginTop: "50px" }}>
                  <div
                    className="mt-5"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                      backgroundColor: "#e0d8cf", // Inner color
                      position: "absolute",
                      top: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: "-1",
                      boxShadow: "inset 0px -4px 4px rgba(79, 78, 74, 0.5)", // Inner shadow
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "195px",
                        borderRadius: "50%",
                        border: "20px solid #4f4e4a", // Outer color
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </div>

                  <img
                    src={Circle3}
                    alt="Circle"
                    style={{
                      width: "175px",
                      height: "175px",
                      borderRadius: "50%",
                      top: "85px",
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "1",
                    }}
                  />

                  {/* Input field */}
                  <input type="text" placeholder="50%"

                    style={{
                      width: "100%", height: "30px", borderRadius: "15px", position: "absolute", top: "60%", left: "50%",
                      transform: "translate(-48%, 250%)", textAlign: "center", border: "none", backgroundColor: "#e0d8cf",
                      color: "#4f4e4a", fontSize: "16px", padding: "10px", boxSizing: "border-box", zIndex: "1",
                      fontWeight: "bold"
                    }}
                  />
                </div>

                <h3
                  className=" text-center header"
                  style={{
                    color: "#605f5f",
                    marginTop: "44vh",
                    fontWeight: "bold",
                    fontSize: "3vh",
                  }}
                >
                  DESI WEAR
                </h3>


              </Col>

              {/* 3rd Circle */}

              <Col className="mt-3">
                <div style={{ position: "relative", marginTop: "50px", marginLeft: "3vw" }}>
                  <div
                    className="mt-5"
                    style={{
                      width: "164px",
                      height: "166px",
                      borderRadius: "50%",
                      backgroundColor: "#e0d8cf", // Inner color
                      position: "absolute",
                      top: "-50px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: "-1",
                      boxShadow: "inset 0px -4px 4px rgba(79, 78, 74, 0.5)", // Inner shadow
                    }}
                  >
                    <div
                      style={{
                        width: "185px",
                        height: "185px",
                        borderRadius: "50%",
                        border: "10px solid #4f4e4a", // Outer color
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </div>

                  <img
                    src={Baya}
                    alt="Circle"
                    style={{
                      width: "147px",
                      height: "154px",
                      borderRadius: "50%",
                      top: "78px",
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -47%)",
                      zIndex: "1",
                    }}
                  />

                  {/* Input field */}
                  <input type="text" placeholder="40%"

                    style={{
                      width: "118%", height: "30px", borderRadius: "15px", position: "absolute", top: "60%", left: "50%",
                      transform: "translate(-50%, 250%)", textAlign: "center", border: "none", backgroundColor: "#e0d8cf",
                      color: "#4f4e4a", fontSize: "16px", padding: "10px", boxSizing: "border-box", zIndex: "1",
                      fontWeight: "bold"
                    }}
                  />
                </div>

                <h3
                  className="header text-center"
                  style={{
                    color: "#605f5f",
                    marginTop: "44vh",
                    fontWeight: "bold",
                    fontSize: "3vh",
                  }}
                >
                  SHADDI BAYA WEAR
                </h3>


              </Col >

              {/* 4th Circle */}
              <Col className="mt-3" style={{ marginRight: "27vh", marginLeft: "3vw" }}>
                <div style={{ position: "relative", marginTop: "50px" }}>
                  <div
                    className="mt-5"
                    style={{
                      width: "165px",
                      height: "167px",
                      borderRadius: "50%",
                      backgroundColor: "#e0d8cf", // Inner color
                      position: "absolute",
                      top: "-55px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: "-1",
                      boxShadow: "inset 0px -4px 4px rgba(79, 78, 74, 0.5)", // Inner shadow
                    }}
                  >
                    <div
                      style={{
                        width: "185px",
                        height: "185px",
                        borderRadius: "50%",
                        border: "10px solid #4f4e4a", // Outer color
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </div>

                  <img
                    src={Abaya}
                    alt="Circle"
                    style={{
                      width: "145px",
                      height: "145px",
                      borderRadius: "50%",
                      top: "78px",
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "1",
                    }}
                  />
                  {/* Input field */}
                  <input type="text" placeholder="30%"

                    style={{
                      width: "95%", height: "30px", borderRadius: "15px", position: "absolute", top: "60%", left: "50%",
                      transform: "translate(-48%, 250%)", textAlign: "center", border: "none", backgroundColor: "#e0d8cf",
                      color: "#4f4e4a", fontSize: "16px", padding: "10px", boxSizing: "border-box", zIndex: "1",
                      fontWeight: "bold"
                    }}
                  />
                </div>

                <h3
                  className="header text-center"
                  style={{
                    color: "#605f5f",
                    marginTop: "44vh",
                    fontWeight: "bold",
                    fontSize: "3vh"
                  }}
                >
                  ABAYAS
                </h3>

              </Col>


              <Container>
                <Row>
                  <FaChevronLeft style={{ fontSize: '15vh', marginLeft: '-79vh', marginTop: '-35vh' }} />
                </Row>
              </Container>

              <Container>
                <Row>
                  <FaChevronRight style={{ fontSize: '15vh', marginLeft: '79vh', marginTop: '-35vh' }} />
                </Row>
              </Container>



              {/* products ka data jo json sa arha hai  */}
              <div className='row mt-5'>
                {
                  Products && Products.map(product => {
                    return (

                      <div className='col-4' style={{ fontSize: '0.8em' }}>
                        <img src={product.icon} alt="Icon" style={{ width: '100%', height: 'auto' }} />
                        <br />


                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ color: "#666461", fontSize: '1em', fontWeight: "600" }}>
                            {product.title}
                            <br />
                            {product.description}
                            <br />
                            {product.price}
                          </div>
                          <Button style={{ borderRadius: "20px", borderWidth: '2px', fontWeight: '500' }}
                           variant="outline-secondary">40% OFF</Button>
                      
                          <Button style={{ borderRadius: "20px", borderWidth: '2px', fontWeight: '500' }} 
                          variant="outline-secondary">Buy Now</Button>
                        </div>

                      </div>
                    )
                  })
                }
              </div>


              {/* page pagination  */}


              <div className='container'>
                <nav aria-label='Product Data of Suit'>
                  <ul className='pagination pagination-lg mt-5 justify-content-center' style={{ fontSize: "2.8vw", fontWeight: "500" }}>
                    <li className='page-items disabled'>
                      <a href='#' style={{
                        color: "black", textDecoration: 'none',
                        marginRight: '18px'
                      }}>Page</a>
                    </li>

                    <div className='text-center'
                      style={{

                        width: "4vw",
                        height: "9vh",
                        border: '2px solid black',
                        borderRadius: "5px",
                        marginRight: '10px',
                      }}>
                      <li className='page-items'>
                        <a href='/topsales' style={{
                          color: "black", textDecoration: 'none',
                          marginRight: '13px'
                        }}>1 </a>
                      </li>
                    </div>

                    <li className='page-items'>
                      <a href='/Pcs2' style={{
                        color: "black", textDecoration: 'none',
                        marginRight: '10px'
                      }}>2</a>
                    </li>

                    <li className='page-items'>
                      <a href='' style={{
                        color: "black", textDecoration: 'none',
                        marginRight: '10px'
                      }}>3</a>
                    </li>
                    <li className='page-items'>
                      <a href='' style={{
                        color: "black", textDecoration: 'none',
                        marginRight: '10px'
                      }}>4</a>
                    </li>
                    <li className='page-items'>
                      <a href='' style={{
                        color: "black", textDecoration: 'none',
                        marginRight: '10px'
                      }}>5</a>
                    </li>

                    <li className='page-items'>
                      <a href='' style={{
                        color: "black", textDecoration: 'none',
                        marginRight: '10px'
                      }}>6</a>
                    </li>

                    <li className='page-items'>
                      <a href='' style={{
                        color: "black", textDecoration: 'none',
                        marginRight: '10px'
                      }}>7</a>
                    </li>
                  </ul>
                </nav>
              </div>



            </Row>
          </Container>

        </Row>
      </Container>

      <Footer />

    </div>
  )
}

export default TopSales;