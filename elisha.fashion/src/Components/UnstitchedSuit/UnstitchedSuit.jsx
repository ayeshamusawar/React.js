import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Pink from '../Assets/pink.jpg'
import { FaChevronRight } from "react-icons/fa";
import Records from '../../records.json';
import Button from 'react-bootstrap/Button';
import Footer from '../../Footer/Footer';
import Filter from './Filter';
const UnstitchedSuit = () => {

    return (
        <div>
            <Container>
                <Row>
                    {/* 1 col  */}
                    <Col lg={12} md={12} sm={12}>
                        <h3 className='text-center'>WOMEN'S</h3>
                        <h1 className='header text-center'>Unstitched Suit</h1>
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

                    {/* button 2 col  */}
                    <Filter />


                    {/* 3 col  */}
                    <Col lg={12} md={12} sm={12}>
                        <div style={{
                            position: "relative", width: "250px", margin: "0 auto", textAlign: "center",
                            marginTop: "5vh",
                        }}>
                            {/* line  */}
                            <div style={{
                                position: "absolute", bottom: "30px", left: "-210px", right: "-210px",
                                height: "12px", background: "#4f4e4a", zIndex: "-1"
                            }}>
                            </div>
                            {/* box text  */}
                            <div style={{
                                backgroundColor: "#4f4e4a", padding: "20px",
                                position: "relative",
                            }} >

                                <h3 style={{
                                    color: "#fff", margin: "0",
                                    textShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
                                    fontWeight: "400"
                                }}>
                                    categories
                                </h3>

                            </div>
                        </div>
                    </Col>

                    <Container>
                        <Row>
                            {/* circle 1  */}
                            <Col lg={3} md={6} sm={12} xs={12} className="mt-3" style={{ marginLeft: "25vh" }}>

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
                                </div>
                                <a href='/Pcs1' style={{ textDecoration: 'none' }}>
                                    <h3
                                        className="header text-center"
                                        style={{
                                            color: "#605f5f",
                                            marginTop: "43vh",
                                            fontWeight: "500",
                                            fontSize: "4.5vh",
                                        }}
                                    >
                                        1 PCS
                                    </h3>
                                </a>


                            </Col>

                            {/* Circle 2 */}

                            <Col lg={3} sm={12} className="mt-5">
                                <div style={{ position: "relative", marginTop: "50px" }}>
                                    {/* Outer Circle */}
                                    <div
                                        className="mt-5"
                                        style={{
                                            width: "200px",
                                            height: "195px",
                                            borderRadius: "50%",
                                            border: "10px solid #4f4e4a", // Outer color
                                            position: "absolute",
                                            top: "-48%", // Adjust this value to align with other circles
                                            left: "30%", // Adjust this value to align with other circles
                                            transform: "translate(-45%, -45%)",
                                        }}
                                    ></div>

                                    {/* Inner Circle */}
                                    <div
                                        className="mt-5"
                                        style={{
                                            width: "198px",
                                            height: "182px",
                                            borderRadius: "50%",
                                            backgroundColor: "#e0d8cf", // Inner color
                                            position: "absolute",
                                            top: "-55%", // Adjust this value to align with other circles
                                            left: "30%", // Adjust this value to align with other circles
                                            transform: "translate(-44%, -44%)",
                                            zIndex: "-1",
                                            boxShadow: "inset 0px -5px 4px rgba(79, 78, 74, 0.5)", // Inner shadow
                                        }}
                                    ></div>

                                    {/* Image Circle */}
                                    <img
                                        src={Pink}
                                        alt="Circle"
                                        style={{
                                            width: "160px",
                                            height: "159px",
                                            borderRadius: "50%",
                                            position: "absolute",
                                            top: "-35%", // Adjust this value to align with other circles
                                            left: "30%", // Adjust this value to align with other circles
                                            transform: "translate(-43%, -15%)",
                                            zIndex: "1",
                                        }}
                                    />
                                </div>
                                <a href='/Pcs2' style={{ textDecoration: 'none' }}>
                                    <h3
                                        className="header"
                                        style={{
                                            color: "#605f5f",
                                            marginTop: "38vh",
                                            marginLeft: "5vh",
                                            fontWeight: "500",
                                            fontSize: "4.5vh",
                                        }}
                                    >
                                        2 PCS
                                    </h3>

                                </a>

                            </Col>

                            {/* circle 3*/}

                            <Col lg={3} sm={12} className="mt-5">
                                <div style={{ position: "relative", marginTop: "50px" }}>
                                    {/* Outer Circle */}
                                    <div
                                        className="mt-5"
                                        style={{
                                            width: "200px",
                                            height: "195px",
                                            borderRadius: "50%",
                                            border: "10px solid #4f4e4a", // Outer color
                                            position: "absolute",
                                            top: "-48%", // Adjust this value to align with other circles
                                            left: "15%", // Adjust this value to align with other circles
                                            transform: "translate(-45%, -45%)",
                                        }}
                                    ></div>

                                    {/* Inner Circle */}
                                    <div
                                        className="mt-5"
                                        style={{
                                            width: "200px",
                                            height: "182px",
                                            borderRadius: "50%",
                                            backgroundColor: "#e0d8cf", // Inner color
                                            position: "absolute",
                                            top: "-55%", // Adjust this value to align with other circles
                                            left: "18%", // Adjust this value to align with other circles
                                            transform: "translate(-49%, -44%)",
                                            zIndex: "-1",
                                            boxShadow: "inset 0px -5px 4px rgba(79, 78, 74, 0.5)", // Inner shadow
                                        }}
                                    ></div>

                                    {/* Image Circle */}
                                    <img
                                        src={Pink}
                                        alt="Circle"
                                        style={{
                                            width: "160px",
                                            height: "159px",
                                            borderRadius: "50%",
                                            position: "absolute",
                                            top: "-35%", // Adjust this value to align with other circles
                                            left: "15%", // Adjust this value to align with other circles
                                            transform: "translate(-43%, -15%)",
                                            zIndex: "1",
                                        }}
                                    />
                                </div>
                                <a href='Pcs3' style={{ textDecoration: 'none' }}>
                                    <h3
                                        className="header"
                                        style={{
                                            color: "#605f5f",
                                            marginTop: "38vh",
                                            fontWeight: "500",
                                            fontSize: "4.5vh",
                                        }}
                                    >
                                        3 PCS
                                    </h3>

                                </a>

                            </Col>



                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <FaChevronRight style={{ fontSize: '16vh', marginLeft: '65vh', marginTop: '-35vh' }} />

                        </Row>
                    </Container>


                    {/* products ka data jo json sa arha hai  */}
                    <div className='row mt-3'>
                        {
                            Records && Records.map(record => {
                                return (

                                    <div className='col-4' style={{ fontSize: '0.8em' }}>
                                        <img src={record.icon} alt="Icon" style={{ width: '100%', height: 'auto' }} />
                                        <br />


                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ color: "#666461", fontSize: '1em', fontWeight: "600" }}>
                                                {record.title}
                                                <br />
                                                {record.description}
                                                <br />
                                                {record.price}
                                            </div>
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
                                        <a href='/unstiched' style={{
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
                                    <a href='/Pcs3' style={{
                                        color: "black", textDecoration: 'none',
                                        marginRight: '10px'
                                    }}>3</a>
                                </li>
                                <li className='page-items'>
                                    <a href='/Pcs2' style={{
                                        color: "black", textDecoration: 'none',
                                        marginRight: '10px'
                                    }}>4</a>
                                </li>
                                <li className='page-items'>
                                    <a href='/Pcs2' style={{
                                        color: "black", textDecoration: 'none',
                                        marginRight: '10px'
                                    }}>5</a>
                                </li>

                                <li className='page-items'>
                                    <a href='/Pcs3' style={{
                                        color: "black", textDecoration: 'none',
                                        marginRight: '10px'
                                    }}>6</a>
                                </li>

                                <li className='page-items'>
                                    <a href='/Pcs2' style={{
                                        color: "black", textDecoration: 'none',
                                        marginRight: '10px'
                                    }}>7</a>
                                </li>
                            </ul>
                        </nav>
                    </div>



                </Row>
            </Container>




            <Footer />
        </div>
    )
}

export default UnstitchedSuit;



