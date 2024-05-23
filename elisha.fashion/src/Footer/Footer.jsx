import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Components/Assets/logo 1.png";
import Logo2 from "../Components/Assets/pak logo.png";
import "../index.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* <Container> */}
        <Row  style={{
              backgroundColor: "#e0d8cf",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginTop: "15vh",
            }}> 
        
            <Col lg={3} xm={12}>
            <div>
              <img
                src={Logo}
                alt="Circle"
                style={{
                  width: "38vh",
                  height: "22vh",
                  position: "absolute",
                  top: "50%",
                  left: "27vh",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>

            <h5
              style={{
                fontWeight: "650",
                color: "#51504e",
                position: "absolute",
                top: "27%",
                left: "48vh",
              }}
            >
              CUSTOMER SERVICES
            </h5>

            <h6
              style={{
                fontWeight: "400",
                fontSize: "1.7vw",
                color: "#51504e",
                position: "absolute",
                top: "33%",
                left: "48vh",
                display: "block",
              }}
            >
              Conatct Us
              <br />
              Delivery & Orders
              <br />
              Returns & Exchanges
              <br />
              Terms & Conditions <br />
              Privacy Policy <br />
              Track My Order <br />
              Payment Guides
            </h6>
            </Col>

        <Col lg={3} xs={12}>

        
            <h5
              style={{
                fontWeight: "650",
                color: "#51504e",
                position: "absolute",
                top: "27%",
                left: "105vh",
              }}
            >
              FOR ASSISTANCE
            </h5>

            <h6
              style={{
                fontWeight: "400",
                fontSize: "1.6vw",
                color: "#51504e",
                position: "absolute",
                top: "33%",
                left: "105vh",
                display: "block",
              }}
            >
              Whatsapp : 0322 6773534
              <br />
              Email : elisha@gmail.com 
              <div className="horizontal-line" style={{ marginTop: '2vw' }}></div>
             
            </h6>
            
            <div
              style={{
                fontWeight: "400",
                fontSize: "5vh",
                color: "#51504e",
                position: "absolute",
                top: "50%",
                left: "105vh",
              }}
            >
              <FaFacebookF />
              <FaTiktok style={{ marginLeft: "6vh" }} />
              <FaInstagram style={{ marginLeft: "6vh" }} />
              <FaYoutube style={{ marginLeft: "6vh" }} />
            </div>

            </Col>

            <Col lg={3}  xm={12}>

            <h5
              style={{
                fontWeight: "650",
                color: "#51504e",
                position: "absolute",
                top: "26%",
                left: "170vh",
              }}
            >
              CURRENCY
            </h5>

            <img
              src={Logo2}
              alt="pak logo"
              style={{
                height: "5vh",
                width: "10vh",
                position: "absolute",
                top: "33%",
                left: "168vh",
                display: "block",
              }}
            />

            <h6
              style={{
                fontWeight: "400",
                fontSize: "1.8vw",
                color: "#51504e",
                position: "absolute",
                top: "33%",
                left: "179vh",
                display: "block",
              }}
            >
              PKR
            </h6>

            <h5
              style={{
                fontWeight: "650",
                color: "#51504e",
                position: "absolute",
                top: "44%",
                left: "170vh",
              }}
            >
              COMPANY
            </h5>

            <h6
              style={{
                fontWeight: "400",
                fontSize: "1.7vw",
                color: "#51504e",
                position: "absolute",
                top: "50%",
                left: "170vh",
                display: "block",
              }}
            >
              About Us <br />
              Careers <br />
              Store locator <br />
              Store addresses
            </h6>

            </Col>

        
          
        </Row>
      {/* </Container> */}
    </div>
  );
}
