import React from "react";
import Filter from "./Filter";
import { Container, Row, Col, Card } from "react-bootstrap";
import Pink from "../Assets/pink.jpg";
import { FaChevronRight } from "react-icons/fa";
import Img1 from "../Assets/img1.jpeg"
import Img2 from "../Assets/img2.jpeg"
import Img3 from "../Assets/img3.jpeg"
import Img4 from "../Assets/img4.jpeg"
import Img5 from "../Assets/img5.jpeg"
import Img6 from "../Assets/img6.jpeg"
import Image1 from "../Assets/image 1.jpeg"
import Image2 from "../Assets/image 2.jpeg"
import Image3 from "../Assets/image 3.jpeg"
import Image4 from "../Assets/image 4.jpeg"
import Image5 from "../Assets/image 5.jpeg"
import New1 from "../Assets/new1.jpg";
import New2 from "../Assets/new2.jpg";
import New3 from "../Assets/new3.jpg";
import New4 from "../Assets/new4.jpg";
import Footer from "../../Footer/Footer";



export default function Stiched() {
    return (
        <div>
            <h3
                className="text-center"
                style={{
                    color: "#4f4e4a",
                    marginLeft: "10vh",
                    fontSize: "6vh",
                    fontWeight: "500",
                }}
            >
                WOMEN'S
            </h3>
            <h1
                className="text-center"
                style={{
                    color: "#4f4e4a",
                    marginLeft: "10vh",
                    fontSize: "10vh",
                    fontWeight: "620",
                }}
            >
                Stiched Suit
            </h1>
            <p
                className="text-center"
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
            <Filter />

            <div
                style={{
                    position: "relative",
                    width: "200px",
                    margin: "0 auto",
                    textAlign: "center",
                    marginTop: "13vh",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "-210px",
                        right: "-210px",
                        height: "12px",
                        background: "#4f4e4a",
                        zIndex: "-1",
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: "#4f4e4a",
                        padding: "20px",
                        boxShadow: "0px 4px 8px rgba(187, 183, 182, 0.5)",
                        position: "relative",
                    }}
                >
                    <h4
                        style={{
                            color: "#fff",
                            margin: "0",
                            textShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
                            fontWeight: "700",
                            fontSize: "6vh",
                        }}
                    >
                        categories
                    </h4>
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-8px",
                            left: "10px",
                            right: "-8px",
                            height: "75px",
                            zIndex: "-2",
                            boxShadow:
                                "10px 8px 10px rgba(186, 183, 181, 0.5), 0px 8px 8px rgba(186, 183, 181, 0.5)", // Shadows on bottom and right sides
                            backgroundColor: "#bab7b5",
                        }}
                    ></div>
                </div>
            </div>

            {/* AYESHA WORK */}

            <Container style={{ marginLeft: '15vh' }}>
                <Row>
                    <Col
                        lg={3}
                        md={6}
                        sm={12}
                        xs={12}
                        className="mt-3"
                        style={{ marginLeft: "25vh" }}
                    >
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
                        <a href="/Pcs1" style={{ textDecoration: "none" }}>
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
                    {/* col 3  */}

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
                        <a href="/Pcs2" style={{ textDecoration: "none" }}>
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

                    {/* col 4  */}

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
                        <a href="Pcs3" style={{ textDecoration: "none" }}>
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
                    <FaChevronRight
                        style={{ fontSize: "10vh", marginLeft: "75vh", marginTop: "-30vh" }}
                    />
                </Row>
            </Container>



            <div style={{ textAlign: "center", marginTop: '10vh' }}>
                <div
                    style={{
                        display: "inline-block",
                        width: "13vh",
                        height: "1.5vh",
                        backgroundColor: "#4e4d49",
                    }}
                ></div>
                <div
                    style={{
                        display: "inline-block",
                        backgroundColor: "white",
                        padding: "0 10px",
                        color: "#54534f",
                    }}
                >
                    <h1>ALL PRODUCTS</h1>
                </div>
                <div
                    style={{
                        display: "inline-block",
                        width: "13vh",
                        height: "1.5vh",
                        backgroundColor: "#4e4d49",
                    }}
                ></div>
            </div>



            <div style={{ textAlign: "center", marginTop: '10vh' }}>
                <div
                    style={{
                        display: "inline-block",
                        width: "13vh",
                        height: "1vh",
                        backgroundColor: "#4e4d49",
                    }}
                ></div>
                <div
                    style={{
                        display: "inline-block",
                        backgroundColor: "white",
                        padding: "0 10px",
                        color: "#54534f",

                    }}
                >
                    <h4 >Stiched 1 pcs</h4>
                </div>
                <div
                    style={{
                        display: "inline-block",
                        width: "13vh",
                        height: "1vh",
                        backgroundColor: "#4e4d49",
                    }}
                ></div>
            </div>

            <Container>
                <Row>
                    {/* 1ST COLUMN */}
                    <Col lg={3} sm={12}>
                        <Card style={{ border: 'none' }}>
                            <img src={Img1} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>


                    </Col>

                    {/* 2ND COLUMN */}
                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Img2} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>

                    {/* 3RD COLUMN */}

                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Img3} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>

                    {/* 4TH COLUMN */}

                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Img4} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>
                </Row>


                {/* STICHED 2 PCS */}
                <div style={{ textAlign: "center", marginTop: '10vh' }}>
                    <div
                        style={{
                            display: "inline-block",
                            width: "13vh",
                            height: "1vh",
                            backgroundColor: "#4e4d49",
                        }}
                    ></div>
                    <div
                        style={{
                            display: "inline-block",
                            backgroundColor: "white",
                            padding: "0 10px",
                            color: "#54534f",

                        }}
                    >
                        <h4 >Stiched 2 pcs</h4>
                    </div>
                    <div
                        style={{
                            display: "inline-block",
                            width: "13vh",
                            height: "1vh",
                            backgroundColor: "#4e4d49",
                        }}
                    ></div>
                </div>

                <Row>
                    {/* 1ST COLUMN */}
                    <Col lg={3} sm={12}>
                        <Card style={{ border: 'none' }}>
                            <img src={Image4} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>


                    </Col>

                    {/* 2ND COLUMN */}
                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Image1} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>

                    {/* 3RD COLUMN */}

                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Image2} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>

                    {/* 4TH COLUMN */}

                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Image3} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>
                </Row>

                {/* STICHED 3 PCS */}
                <div style={{ textAlign: "center", marginTop: '10vh' }}>
                    <div
                        style={{
                            display: "inline-block",
                            width: "13vh",
                            height: "1vh",
                            backgroundColor: "#4e4d49",
                        }}
                    ></div>
                    <div
                        style={{
                            display: "inline-block",
                            backgroundColor: "white",
                            padding: "0 10px",
                            color: "#54534f",

                        }}
                    >
                        <h4 >Stiched 3 pcs</h4>
                    </div>
                    <div
                        style={{
                            display: "inline-block",
                            width: "13vh",
                            height: "1vh",
                            backgroundColor: "#4e4d49",
                        }}
                    ></div>
                </div>

                <Row>
                    {/* 1ST COLUMN */}
                    <Col lg={3} sm={12}>
                        <Card style={{ border: 'none' }}>
                            <img src={Image5} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>


                    </Col>

                    {/* 2ND COLUMN */}
                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Img5} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>

                    {/* 3RD COLUMN */}

                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Img6} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>

                    {/* 4TH COLUMN */}

                    <Col lg={3} sm={12}>

                        <Card style={{ border: 'none' }}>
                            <img src={Image3} alt="img1 not found" />
                            <h4>Ladies suit AL 01</h4>
                            PKR: 1800
                        </Card>
                    </Col>

                </Row>




            </Container>


            <Container fluid>

                <Row>
                    <Col>
                        <h1
                            className="header text-center mt-5"
                            style={{ color: "#4f4e4a", fontWeight: "650", fontSize: "43px" }}
                        >
                            NEW ARRIVALS
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col
                        style={{
                            backgroundColor: "#c0c3ba",
                            height: "68vh",
                            borderRadius: "4vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <div>
                            <img
                                src={New1}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",
                                    left: "40vh",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>

                        <div
                            style={{
                                backgroundColor: "#c0c3ba",
                                height: "65vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                src={New2}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",

                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>

                        <div
                            style={{
                                backgroundColor: "#c0c3ba",
                                height: "65vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                src={New3}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",
                                    left: "30vh",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: "#c0c3ba",
                                height: "65vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                src={New4}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",
                                    left: "80vh",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>
                    </Col>
                </Row>


            </Container>

            <Container fluid>

                <Row>
                    <Col>
                        <h1
                            className="header text-center mt-3"
                            style={{ color: "#4f4e4a", fontWeight: "650", fontSize: "43px" }}
                        >
                            TOP SALES
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col
                        style={{
                            backgroundColor: "#c0c3ba",
                            height: "68vh",
                            borderRadius: "4vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <div>
                            <img
                                src={New1}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",
                                    left: "40vh",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>

                        <div
                            style={{
                                backgroundColor: "#c0c3ba",
                                height: "65vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                src={New2}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",

                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>

                        <div
                            style={{
                                backgroundColor: "#c0c3ba",
                                height: "65vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                src={New3}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",
                                    left: "30vh",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: "#c0c3ba",
                                height: "65vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                src={New4}
                                alt="Circle"
                                style={{
                                    width: "40vh",
                                    height: "58vh",
                                    boxShadow: "0px 0px 20px 10px rgba(51, 51, 51, 0.5)",
                                    position: "absolute",
                                    top: "50%",
                                    left: "80vh",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </div>
                    </Col>
                </Row>


            </Container>

            <Footer />



        </div>
    );
}
