import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
                            position: "relative", width: "285px", margin: "0 auto", textAlign: "center",
                            marginTop: "5vh",
                        }}>
                            {/* line top */}
                            <div style={{
                                position: "absolute", top: "30px", left: "-210px", right: "-210px",
                                height: "12px", background: "#7F7B77", zIndex: "-1"
                            }}>
                            </div>
                            {/* line botttom */}
                            <div style={{
                                position: "absolute", bottom: "30px", left: "-80px", right: "-80px",
                                height: "12px", background: "#4f4e4a", zIndex: "-1"
                            }}>
                            </div>
                            {/* box text  */}
                            <div style={{
                                backgroundColor: "#4f4e4a", padding: "20px",
                                position: "relative",
                            }} >

                                <h3 style={{ color: "#EAE2D8", margin: "2", fontWeight: "500" }}>
                                    ALL PRODUCTS <br /> of <br /> 3 pcs suit's
                                </h3>

                            </div>
                        </div>
                    </Col>




                    <div className='row' style={{ marginTop: "7vw" }}>
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
                                            <Button style={{ borderRadius: "20px", borderWidth: '2px', fontWeight: '500' }} variant="outline-secondary">Buy Now</Button>
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

                                <li className='page-items'>
                                    <a href='/unstiched' style={{
                                        color: "black", textDecoration: 'none',
                                        marginRight: '10px'
                                    }}>1</a>
                                </li>

                               

                                <li className='page-items'>
                                    <a href='/Pcs2' style={{
                                        color: "black", textDecoration: 'none',
                                        marginRight: '10px'
                                    }}>2</a>
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
                                        <a href='/Pcs3' style={{
                                            color: "black", textDecoration: 'none',
                                            marginRight: '13px'
                                        }}>3 </a>
                                    </li>
                                </div>

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
                                    <a href='/Pcs2' style={{
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