import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../Assets/logo.png';
import topimg from '../Assets/topimg.jpeg';
import Button from 'react-bootstrap/Button';
import Footer from '../../Footer/Footer';

const About = () => {
    return (
        <div>
            <Container>
                <Row>
                    {/* circle 1  */}
                    <Col className="mt-3" style={{ marginLeft: "" }}>

                        <div style={{ position: "relative", marginTop: "50px" }}>
                            <div
                                className="mt-5"
                                style={{
                                    width: "162px",
                                    height: "155px",
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
                                        width: "172px",
                                        height: "165px",
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
                                src={topimg}
                                alt="Circle"
                                style={{
                                    width: "140px",
                                    height: "121px",
                                    borderRadius: "50%",
                                    top: "69px",
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
                                marginTop: "37vh",
                                fontWeight: "500",
                                fontSize: "3.5vh",
                            }}
                        >
                            Manging Director
                        </h3>
                        <Button style={{
                            borderRadius: "20px", fontWeight: '500', backgroundColor: "#e0d8cf",
                            color: "#605f5f", marginLeft: "3vw"
                        }}
                            variant="light">Mehak Tarik</Button>



                    </Col>

                    {/* Circle 2 */}

                    <Col className="mt-3" style={{ marginLeft: "" }}>

                        <div style={{ position: "relative", marginTop: "50px" }}>
                            <div
                                className="mt-5"
                                style={{
                                    width: "162px",
                                    height: "155px",
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
                                        width: "172px",
                                        height: "165px",
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
                                src={logo}
                                alt="Circle"
                                style={{
                                    width: "140px",
                                    height: "121px",
                                    borderRadius: "50%",
                                    top: "69px",
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
                                marginTop: "37vh",
                                fontWeight: "500",
                                fontSize: "3.5vh",
                            }}
                        >
                            Business Partner
                        </h3>
                        <Button style={{
                            borderRadius: "20px", fontWeight: '500', backgroundColor: "#e0d8cf",
                            color: "#605f5f", marginLeft: "3vw"
                        }}
                            variant="light">Danial Manzor</Button>



                    </Col>


                    {/* circle 3*/}

                    <Col className="mt-3" style={{ marginLeft: "" }}>

                        <div style={{ position: "relative", marginTop: "50px" }}>
                            <div
                                className="mt-5"
                                style={{
                                    width: "162px",
                                    height: "155px",
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
                                        width: "172px",
                                        height: "165px",
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
                                src={logo}
                                alt="Circle"
                                style={{
                                    width: "140px",
                                    height: "121px",
                                    borderRadius: "50%",
                                    top: "69px",
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
                                marginTop: "37vh",
                                fontWeight: "500",
                                fontSize: "3.5vh",
                            }}
                        >
                            Web Develper
                        </h3>
                        <Button style={{
                            borderRadius: "20px", fontWeight: '500', backgroundColor: "#e0d8cf",
                            color: "#605f5f", marginLeft: "4vw"
                        }}
                            variant="light">M.Waleed</Button>



                    </Col>

                    {/* circle 4*/}
                    <Col className="mt-3" style={{ marginLeft: "" }}>

                        <div style={{ position: "relative", marginTop: "50px" }}>
                            <div
                                className="mt-5"
                                style={{
                                    width: "162px",
                                    height: "155px",
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
                                        width: "172px",
                                        height: "165px",
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
                                src={logo}
                                alt="Circle"
                                style={{
                                    width: "140px",
                                    height: "121px",
                                    borderRadius: "50%",
                                    top: "69px",
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
                                marginTop: "37vh",
                                fontWeight: "500",
                                fontSize: "3.5vh",
                            }}
                        >
                            Backend Develper
                        </h3>
                        <Button style={{
                            borderRadius: "20px", fontWeight: '500', backgroundColor: "#e0d8cf",
                            color: "#605f5f", marginLeft: "4vw"
                        }}
                            variant="light">M.Mazz</Button>



                    </Col>



                    {/* circle 5*/}

                    <Col className="mt-3" style={{ marginLeft: "" }}>

                        <div style={{ position: "relative", marginTop: "50px" }}>
                            <div
                                className="mt-5"
                                style={{
                                    width: "162px",
                                    height: "155px",
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
                                        width: "172px",
                                        height: "165px",
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
                                src={logo}
                                alt="Circle"
                                style={{
                                    width: "140px",
                                    height: "121px",
                                    borderRadius: "50%",
                                    top: "69px",
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
                                marginTop: "37vh",
                                fontWeight: "500",
                                fontSize: "3.5vh",
                            }}
                        >
                            Logo & UI Design
                        </h3>
                        <Button style={{
                            borderRadius: "20px", fontWeight: '500', backgroundColor: "#e0d8cf",
                            color: "#605f5f", marginLeft: "4vw"
                        }}
                            variant="light">M.Jamal</Button>



                    </Col>

                </Row>

                <Container className='mt-5'>
                    <Row>
                        <Col>
                            <h1 style={{fontSize:"1.5vw", fontWeight:"bold"}}>Message From Managing Director:</h1>
                            <h2 style={{fontSize:"1.5vw"}}>Dear valued fashion enthusiasts</h2>
                            <h6>
                            Exciting news awaits you as we are thrilled to introduce our brand-new clothing venture - Elisha! 
                            We are on the verge of launching an online fashion emporium that will redefine your style, elegance, and individuality.
                            < br />
                            < br />
                             At Elisha, we believe that fashion is more than just clothing; it's a form of self-expression and an art of 
                             embracing one's uniqueness. Our carefully curated collection will cater to all your fashion desires, ensuring
                              you step into the spotlight wherever you go. 
                              < br />
                              < br />
                              Our team has worked tirelessly to bring you a diverse range of high-quality apparel and 
                              accessories that embody the latest trends and timeless classics. From chic casual wear to 
                              sophisticated formal ensembles, we have something special in store for every occasion and
                               every taste.
                            </h6>
                            <br />

                            <h3  style={{fontSize:"1.5vw", fontWeight:"bold"}}>Meet the Mastermind</h3>
                            <h6>
                            Allow me to introduce myself, Mehak Tariq, the Managing Director of Elisha. With an 
                            unwavering passion for fashion and a vision to bring forth a brand that resonates
                             with the modern generation, I am delighted to embark on this sartorial journey with you.
                           </h6>
                              <br />
                            <h3  style={{fontSize:"1.5vw", fontWeight:"bold"}}>Stay Connected</h3>
                            <h6>
                            As the launch of our online store approaches rapidly, we encourage you to stay connected
                               with us. Bookmark our website domain - theelisha.com - and be the first to e xperience
                                our exclusive collection. Additionally, you can reach out to us through the provided 
                                contact details for any inquiries or to join our mailing list.
                            </h6>
                            <br />
                            <h3  style={{fontSize:"1.5vw", fontWeight:"bold"}}>Visit Our Office</h3>
                            <h6>     
                            For our patrons in Lahore, Pakistan, we invite you to our office located at  Plaza, Jail 
                            road. Come and get a sneak peek into the world of Elisha while we prepare to unveil our digital wonderland.
                     
                            </h6>
                            <br />
                            <h3  style={{fontSize:"1.5vw", fontWeight:"bold"}}>Get Ready For Elisha</h3>
                            <h6>
                              We are counting down the days until our grand opening, and we cannot wait to share 
                              the Elisha experience with all of you. Your unwavering support will be our guiding 
                              light as we embark on this exciting journey together.
                              <br />
                              <br />
                               Fashion forward, trendsetters - the future belongs to Elisha! Be a part of this
                                captivating venture, and let's redefine fashion in Pakistan and beyond.
                                <br />
                                <br />
                                 With fashionable regards,
                                 <br />
                                 <br />
                                 --
                                 <br />
                                  Mehak Tariq 
                                  <br />
                                  Managing Director, Elisha 
                                  <br />
                                  Contact: +92 306 4313804 
                                  <br />
                                  Email: info@theelisha.com
                                  <br />
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Footer />
        </div>
    )
}

export default About;