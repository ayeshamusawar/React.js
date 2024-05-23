import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Records from '../../records.json';
import Card from "../Women/Card"
import Footer from '../../Footer/Footer';
import Filter from './Filter';
const StichedSuit = () => {
    return (
        <div>

<div>
         <h3 className='text-center'
        style={{
          color: "#4f4e4a",
          marginLeft: "10vh",
          fontSize: "6vh",
          fontWeight: "500",
        }}
      >
       WOMEN'S
      </h3>
          <h1 className='text-center'
        style={{
          color: "#4f4e4a",
          marginLeft: "10vh",
          fontSize: "10vh",
          fontWeight: "620",
        }}
      >
       Stiched Suit
      </h1>
      <p  className='text-center'
        style={{
          color: "#4e4d49",
          fontSize: "3.5vh",
          fontWeight: "650",
          marginTop: "1vh",
          marginLeft: "10vh",
        }}
      >
        Elisha offers a vast selection of women's clothing to shop.Each season
        <br />
        finds a careful assortment of clothing no matter the season,
        trend-driven
        <br />
        and classic pieces are available.Elisha is committed to helping shoppers
        <br />
        be their most stylish selves.
      </p>
      <Filter/>

            <Container>
                <Row>
                   
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
                                    ALL PRODUCTS <br /> of <br /> 2 pcs suit's
                                </h3>

                            </div>
                        </div>
                    </Col>




                    <div className='row'>
                    <div className="inner" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Records &&
        Records.map((record) => (
          <Card
            key={record.id}
            icon={record.icon}
            title={record.title}
            desc={record.desc}
            price={record.price}
          />
        ))}
    </div>
                    </div>


                    {/* page pagination  */}


                    <div className='container'>
                        <nav aria-label='Product Data of Suit'>
                            <ul className='pagination pagination-lg mt-5 justify-content-center' style={{ fontSize: "2.8vw", fontWeight: "500" }}>
                                <li className='page-items disabled'>
                                    <a href='/Pcs2' style={{
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


                                <div className='text-center'
                                    style={{

                                        width: "4vw",
                                        height: "9vh",
                                        border: '2px solid black',
                                        borderRadius: "5px",
                                        marginRight: '10px',
                                    }}>
                                    <li className='page-items'>
                                        <a href='/Pcs2' style={{
                                            color: "black", textDecoration: 'none',
                                            marginRight: '13px'
                                        }}>2 </a>
                                    </li>
                                </div>

                              
                                <li className='page-items'>
                                    <a href='/Pcs2' style={{
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
        </div>
    )
}

export default StichedSuit;
