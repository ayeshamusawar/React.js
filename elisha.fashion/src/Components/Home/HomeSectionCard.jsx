import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Red from "../Assets/red.jpg";
import Hania from "../Assets/hania.jpg";
import Grey from "../Assets/grey.jpg";
import Circle1 from "../Assets/circl1.jpg";
import Circle2 from "../Assets/circle2.jpg";
import Circle3 from "../Assets/circle3.jpg";
import Circle4 from "../Assets/circle4.jpg";
import New1 from "../Assets/new1.jpg";
import New2 from "../Assets/new2.jpg";
import New3 from "../Assets/new3.jpg";
import New4 from "../Assets/new4.jpg";
import Brands from "../Assets/brands.png";
import Serika from "../Assets/serika.jpg"
import Harir from "../Assets/harir.jpg"
import Inayat from "../Assets/inayat.jpg";
import MonoChrome from "../Assets/monochrome.jpg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import Footer from "../../Footer/Footer";



export default function HomeSectionCard() {


  return (
    <div>
      <Container className="mt-3 ">
        <Row>
          {/* 1st Column */}
          <Col style={{ marginLeft: "12vh" }}>
            <div>
              <Card style={{ width: "18rem", position: "relative" }}>
                <Card.Img variant="top" src={Red} />
              </Card>
              <div style={{ display: "inline-block" }}>
                <h6
                  style={{
                    color: "#605f5f",
                    display: "inline-block",
                    margin: 0,
                    fontSize: "19px",
                    marginLeft: "15px",
                  }}
                >
                  ZCE23-1A
                </h6>
                <h6
                  style={{
                    color: "#605f5f",
                    display: "inline-block",
                    margin: 0,
                    marginLeft: "110px",
                    fontSize: "20px",
                  }}
                >
                  Rs.9,030
                </h6>
              </div>
            </div>
          </Col>

          {/* 2nd Column */}
          <Col>
            <div>
              <Card style={{ width: "18rem", position: "relative" }}>
                <Card.Img variant="top" src={Hania} />
              </Card>
              <div style={{ display: "inline-block" }}>
                <h6
                  style={{
                    color: "#605f5f",
                    display: "inline-block",
                    margin: 0,
                    fontSize: "19px",
                    marginLeft: "15px",
                  }}
                >
                  ZCE23-6B
                </h6>
                <h6
                  style={{
                    color: "#605f5f",
                    display: "inline-block",
                    margin: 0,
                    marginLeft: "120px",
                    fontSize: "20px",
                  }}
                >
                  Rs.9,030
                </h6>
              </div>
            </div>
          </Col>

          {/* 3rd Column */}
          <Col style={{ marginRight: "15vh" }}>
            <div>
              <Card style={{ width: "19rem", position: "relative" }}>
                <Card.Img variant="top" src={Grey} />
              </Card>
              <div style={{ display: "inline-block" }}>
                <h6
                  style={{
                    color: "#605f5f",
                    display: "inline-block",
                    margin: 0,
                    fontSize: "19px",
                    marginLeft: "15px",
                  }}
                >
                  Z23-6B
                </h6>
                <h6
                  style={{
                    color: "#605f5f",
                    display: "inline-block",
                    margin: 0,
                    marginLeft: "130px",
                    fontSize: "20px",
                  }}
                >
                  Rs.8,820
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          position: "relative",
          width: "240px",
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
            Shop By Type
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

      {/* 4 Round Circles */}

      <Container className="mt-2 justify-content-center">
        <Row>
          <Col style={{ marginLeft: "38vh" }}>
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle1}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                fontSize: "4.5vh",
              }}
            >
              SILK{" "}
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>

          {/* 2nd Circle */}
          <Col style={{ marginLeft: "3vh" }}>
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle2}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                fontSize: "4.5vh",
              }}
            >
              COTTON NET{" "}
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>

          {/* 3rd Circle */}

          <Col>
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle3}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                fontSize: "4.5vh",
              }}
            >
              ORGANZA{" "}
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>

          {/* 4th Circle */}
          <Col style={{ marginRight: "27vh" }}>
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle4}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                fontSize: "4.5vh",
              }}
            >
              LAWN
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={12} sm={12}>
            <h1
              className="header text-center mt-5"
              style={{ color: "#4f4e4a", fontWeight: "650", fontSize: "43px" }}
            >
              NEW ARRIVALS
            </h1>
          </Col>
        </Row>
      </Container>
           {/* FEATURED DESIGNS AND NEW ARRIVALS */}
      <Container fluid>
        <Row className="mb-5">
          <Col  lg={12} sm={12}
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

        <Row>
          <Col>
            <h1
              className="header text-center mt-5"
              style={{ color: "#4f4e4a", fontWeight: "650", fontSize: "43px" }}
            >
             FEATURED DESIGNER BRANDS
            </h1>
          </Col>
        </Row>
          {/* brands logos images */}
        <Row>
       <img
       src={Brands}
       alt="brands"
       />
        </Row>
      </Container>

      {/* DEALS BY CATEGORIES BOXES */}
      <div
        style={{
          position: "relative",
          width: "320px",
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
           DEALS BY CATEGORY
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

      {/* DEALS BY CATEGORIES IMAGES */}
      <Container className="mt-5 ">
        <Row>
          {/* 1st Column */}
          <Col style={{ marginLeft: "5vh" }}>
            <div>
              <Card style={{ width: "21rem", position: "relative" }}>
                <Card.Img variant="top" src={Serika} />
              </Card>
              <div style={{ display: "inline-block" }}>
                <h6 className="mt-2"
                  style={{
                    color: "#191819",
                    display: "inline-block",
                    margin: 0,
                    fontSize: "28px",
                    marginLeft: "67px",
                  }}
                >
                 Serika Premium
                </h6>
                <h6
                  style={{
                    color: "#3c3c3c",
                    display: "inline-block",
                    margin: 0,
                    marginLeft: "90px",
                    fontSize: "25px",
                  }}
                >
                  upto <span style={{color: '#1f1f1f'}}>60%</span> off
                </h6>
              </div>
            </div>
          </Col>

          {/* 2nd Column */}
          <Col>
            <div>
              <Card style={{ width: "21rem", position: "relative" }}>
                <Card.Img variant="top" src={Harir} />
              </Card>
              <div style={{ display: "inline-block" }}>
                <h6 className="mt-2"
                  style={{
                    color: "#191819",
                    display: "inline-block",
                    margin: 0,
                    fontSize: "28px",
                    marginLeft: "67px",
                  }}
                >
                 Al-Harir Apparel
                </h6>
                <h6
                  style={{
                    color: "#3c3c3c",
                    display: "inline-block",
                    margin: 0,
                    marginLeft: "90px",
                    fontSize: "25px",
                  }}
                >
                  upto <span style={{color: '#1f1f1f'}}>40%</span> off
                </h6>
              </div>
            </div>
          </Col>

          {/* 3rd Column */}
          <Col >
            <div>
              <Card style={{ width: "21rem", position: "relative" }}>
                <Card.Img variant="top" src={Inayat} />
              </Card>
              <div style={{ display: "inline-block" }}>
                <h6 className="mt-2 text-center"
                  style={{
                    color: "#191819",
                    display: "inline-block",
                    margin: 0,
                    fontSize: "28px",
                    marginLeft: "120px",
                  }}
                >
                 Inayat
                </h6>
                <h6
                  style={{
                    color: "#3c3c3c",
                    display: "inline-block",
                    margin: 0,
                    marginLeft: "90px",
                    fontSize: "25px",
                  }}
                >
                  upto <span style={{color: '#1f1f1f'}}>30%</span> off
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* MONOCHROME */}
      <Container>
        <Row>
         <Col lg={12} xm={12}>
         <img className="mt-5"
         src={MonoChrome}
         alt="monochrome"
         style={{height: '85vh'}}
         />
         </Col>
        </Row>
      </Container>

      {/* PRES STYLES */}
      
             
             

      <div
        style={{
          position: "relative",
          width: "320px",
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
           PRES STYLES
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
        
          <Col style={{ marginLeft: "38vh" }}>
         
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle1}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                fontSize: "4.5vh",
              }}
            >
              LONG SHIRT
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>

          {/* 2nd Circle */}
          <Col style={{ marginLeft: "3vh" }}>
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle2}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                fontSize: "4.5vh",
              }}
            >
              KURTA
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>

          {/* 3rd Circle */}

          <Col>
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle3}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                fontSize: "4.5vh",
              }}
            >
              KAFTAN
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>

          {/* 4th Circle */}
          <Col style={{ marginRight: "27vh" }}>
            <div style={{ position: "relative", marginTop: "50px" }}>
              <div
                className="mt-5"
                style={{
                  width: "135px",
                  height: "135px",
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
                    width: "142px",
                    height: "142px",
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
                src={Circle4}
                alt="Circle"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  top: "65px",
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
                marginTop: "35vh",
                fontWeight: "500",
                
              }}
            >
              KAMEEZ
            </h3>
            <Button
              className="text-center "
              style={{
                marginLeft: "4vh",
                borderRadius: "3vh",
                backgroundColor: "#e0d8cf",
                border: "none",
                color: "#605f5f",
                fontWeight: "400",
                fontSize: "19px",
              }}
            >
              SHOP NOW
            </Button>
          </Col>
        </Row>

       
      </Container>
      <Container>
     <Row>
        <FaChevronLeft style={{fontSize: '12vh',marginLeft: '-80vh' ,marginTop: '-32vh'}}/>
        </Row>
     </Container>

     <Container>
     <Row>
        <FaChevronRight style={{fontSize: '12vh',marginLeft: '96vh' ,marginTop: '-32vh'}}/>
        </Row>
     </Container>
     <Footer/>

     
    </div>
  );
}
