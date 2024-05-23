import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import Yellow from "../Assets/yellow.jpg";
import Shadi from "../Assets/shadi.png";
import Abaya from "../Assets/Abaya.jpg";
import Desi from "../Assets/Desi.jpg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import Pink from "../Assets/pink.jpg";
import Baya from "../Assets/baya.jpg";
import Circle3 from "../Assets/circle3.jpg";
import Data from '../../data.json';
import Card1 from './Card1';
import Image1 from "../Assets/image 1.jpeg";
import Image2 from "../Assets/image 2.jpeg";
import Image3 from "../Assets/image 3.jpeg"
import Image4 from "../Assets/image 4.jpeg"
import Image5 from "../Assets/image 5.jpeg";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";




export default function Women() {
  return (
    <div>
      <h1
        style={{
          color: "#4f4e4a",
          marginTop: "7vh",
          marginLeft: "10vh",
          fontSize: "9vh",
          fontWeight: "620",
        }}
      >
        WOMENS
      </h1>
      <p
        style={{
          color: "#4e4d49",
          fontSize: "3vh",
          fontWeight: "600",
          marginTop: "3vh",
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

      {/* CATEGORIES */}

      <Container >
        <Row>
          <Col>
            <h1
              className="header text-center mt-5"
              style={{ color: "#4f4e4a", fontWeight: "650", fontSize: "43px" }}
            >
              CATEGORIES
            </h1>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg='6' md='12'>
            <div
              style={{
                backgroundColor: "#f1e5dc",
                width: "90vh",
                height: "65vh",
                position: "relative",
                marginBottom: "5vh",
              }}
            >
              <h5
                style={{
                  color: "#474643",
                  fontWeight: "700",
                  marginLeft: "50vh",
                  fontSize: "4vh",
                  position: "absolute",
                  top: "20%",
                }}
              >
                UNIVERSITY WEAR
              </h5>
              <Link to="/Pcs1">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "40%",
                  }}
                >
                  Short shirts
                </h3>
              </Link>
              <br />
              <Link to="/Pcs2">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "46%",
                  }}
                >
                  Long shirts
                </h3>
              </Link>
              <br />
              <Link to="/Pcs3">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "52%",
                  }}
                >
                  Froks
                </h3>
              </Link>
              <br />
              <Link to="/Pcs1">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "58%",
                  }}
                >
                  Gowns
                </h3>
              </Link>

              <img
                src={Yellow}
                alt="Circle"
                style={{
                  width: "50vh",
                  height: "45vh",
                  position: "absolute",
                  top: "65%",
                  left: "27vh",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </Col>

          <Col lg='6' md='12'>
            <div
              style={{
                backgroundColor: "#e1b39b",
                width: "90vh",
                height: "65vh",
                position: "relative",
                marginBottom: "5vh",
              }}
            >

              <h5
                style={{
                  color: "#474643",
                  fontWeight: "700",
                  marginLeft: "10vh",
                  fontSize: "4vh",
                  position: "absolute",
                  top: "20%",
                }}
              >
                SHADDI BAYA WEAR
              </h5>
              <Link to="/Pcs1">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "15vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "38%",
                  }}
                >
                  Sharara
                </h3>
              </Link>
              <br />
              <Link to="/Pcs2">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "15vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "44%",
                  }}
                >
                  Lehnga
                </h3>
              </Link>
              <br />
              <Link to="/Pcs3">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "15vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "50%",
                  }}
                >
                  Maxi
                </h3>
              </Link>
              <br />
              <Link to="/Pcs1">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "15vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "56%",
                  }}
                >
                  Angharakha
                </h3>
              </Link>

              <img
                src={Shadi}
                alt="Circle"
                style={{
                  width: "40vh",
                  height: "65vh",
                  position: "absolute",
                  top: "50%",
                  left: "70vh",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg='6' md='12'>
            <div
              style={{
                backgroundColor: "#cfcfcd",
                width: "90vh",
                height: "65vh",
                position: "relative",
                marginBottom: "5vh",
              }}
            >
              <h5
                style={{
                  color: "#474643",
                  fontWeight: "700",
                  marginLeft: "60vh",
                  fontSize: "5vh",
                  position: "absolute",
                  top: "40%",
                }}
              >
                ABAYAS
              </h5>

              <img
                src={Abaya}
                alt="Circle"
                style={{
                  width: "50vh",
                  height: "65vh",
                  position: "absolute",
                  top: "50%",
                  left: "27vh",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </Col>

          <Col lg='6' md='12'>
            <div
              style={{
                backgroundColor: "#e8ddcc",
                width: "90vh",
                height: "65vh",
                position: "relative",
                marginBottom: "5vh",
              }}
            >
              <h5
                style={{
                  color: "#474643",
                  fontWeight: "700",
                  marginLeft: "60vh",
                  fontSize: "5vh",
                  position: "absolute",
                  top: "20%",
                }}
              >
                DESI WEAR
              </h5>
              <Link to="/Pcs1">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "38%",
                  }}
                >
                  Shalwar Kameez
                </h3>
              </Link>
              <br />
              <Link to="/Pcs2">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "44%",
                  }}
                >
                  Patyala
                </h3>
              </Link>
              <br />
              <Link to="/Pcs3">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "50%",
                  }}
                >
                  Tulip
                </h3>
              </Link>
              <br />
              <Link to="/Pcs1">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "56%",
                  }}
                >
                  Trousers
                </h3>
              </Link>
              <Link to="/Pcs2">
                <h3
                  style={{
                    color: "#494944",
                    fontWeight: "700",
                    marginLeft: "60vh",
                    fontSize: "3vh",
                    position: "absolute",
                    top: "61%",
                  }}
                >
                  Kurta
                </h3>
              </Link>

              <img
                src={Desi}
                alt="Circle"
                style={{
                  width: "45vh",
                  height: "62vh",
                  position: "absolute",
                  top: "50%",
                  left: "27vh",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </Col>

          <div
            style={{
              position: "relative",
              width: "250px",
              margin: "0 auto",
              textAlign: "center",
              marginTop: "5vh",
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
              <h3
                style={{
                  color: "#fff",
                  margin: "0",
                  textShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
                  fontWeight: "400",
                }}
              >
                50% OFF
              </h3>
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

          <Container className="mt-2 justify-content-center">

            <Row>

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
                </div>
                <h3
                  className="header text-center"
                  style={{
                    color: "#605f5f",
                    marginTop: "43vh",
                    fontWeight: "500",
                    fontSize: "4.5vh",
                  }}
                >
                  UNI WEAR
                </h3>

              </Col>

              {/* 2nd Circle */}
              <Col className="mt-3" style={{ marginLeft: "3vh" }}>
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
                </div>
                <h3
                  className=" text-center header"
                  style={{
                    color: "#605f5f",
                    marginTop: "43vh",
                    fontWeight: "500",
                    fontSize: "4.5vh",
                  }}
                >
                  SHADI WEAR
                </h3>


              </Col>

              {/* 3rd Circle */}

              <Col className="mt-3">
                <div style={{ position: "relative", marginTop: "50px" }}>
                  <div
                    className="mt-5"
                    style={{
                      width: "161px",
                      height: "162px",
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
                        width: "182px",
                        height: "182px",
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
                      transform: "translate(-50%, -50%)",
                      zIndex: "1",
                    }}
                  />
                </div>
                <h3
                  className="header text-center"
                  style={{
                    color: "#605f5f",
                    marginTop: "42vh",
                    fontWeight: "500",
                    fontSize: "4.5vh",
                  }}
                >
                  ABAYAS
                </h3>


              </Col >

              {/* 4th Circle */}
              <Col className="mt-3" style={{ marginRight: "27vh" }}>
                <div style={{ position: "relative", marginTop: "50px" }}>
                  <div
                    className="mt-5"
                    style={{
                      width: "161px",
                      height: "162px",
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
                        width: "182px",
                        height: "182px",
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
                      width: "150px",
                      height: "145px",
                      borderRadius: "50%",
                      top: "78px",
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "1",
                    }}
                  />
                </div>
                <h3
                  className="header text-center"
                  style={{
                    color: "#605f5f",
                    marginTop: "42vh",
                    fontWeight: "500",

                  }}
                >
                  DESI WEAR
                </h3>

              </Col>
            </Row>


          </Container>
          <Container>
            <Row>
              <FaChevronLeft style={{ fontSize: '12vh', marginLeft: '-95vh', marginTop: '-32vh' }} />
            </Row>
          </Container>

          <Container>
            <Row>
              <FaChevronRight style={{ fontSize: '12vh', marginLeft: '92vh', marginTop: '-32vh' }} />
            </Row>
          </Container>
        </Row>

        <div
          style={{
            position: "relative",
            width: "320px",
            margin: "0 auto",
            textAlign: "center",
            marginTop: "9vh",
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
            <h3
              style={{
                color: "#fff",
                margin: "0",
                textShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
                fontWeight: "400",
              }}
            >
              ALL PRODUCTS
            </h3>

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


        <Container>
          <Row>
            {Data &&
              Data.map((data, index) => (
                <Col key={data.id} lg={4} md={6} sm={12}>
                  <Link to={`/women/${data.id}`} style={{ textDecoration: 'none' }}>
                    <Card1
                      icon={data.icon}
                      title={data.title}
                      desc={data.desc}
                      price={data.price}
                    />
                  </Link>
                </Col>
              ))}
          </Row>
        </Container>

        <div
          style={{
            position: "relative",
            width: "320px",
            margin: "0 auto",
            textAlign: "center",
            marginTop: "25vh",
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
            <h3
              style={{
                color: "#fff",
                margin: "0",
                textShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
                fontWeight: "400",
              }}
            >
              NEW ARRIVALS
            </h3>
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

        <Row >
          <Col className="mt-5 img-fluid">
            <img src={Image1} alt="not found" style={{ height: '123vh', marginLeft: '5vh' }} />
          </Col>

          <Col className="mt-5">
            <img src={Image2} alt="not found" style={{ height: '60vh', marginLeft: '-2vh' }} />
            <img src={Image3} alt="not found" style={{ height: '60vh', marginLeft: '6vh' }} />
            <img src={Image4} alt="not found" style={{ height: '60vh', marginLeft: '-2vh', marginTop: '3vh' }} />
            <img src={Image5} alt="not found" style={{ height: '60vh', marginLeft: '6vh', marginTop: '2vh' }} />

          </Col>
        </Row>
      </Container>

      <Footer />

    </div>
  );
}
