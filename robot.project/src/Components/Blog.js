import { Col, Container, Row } from "react-bootstrap";
import '../style/Blog.css';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import b4 from '../images/b4.jpg';
import { Link } from "react-router-dom";

const Blog = () => {
    return ( 
        <div id="start">
          <Container>
            <Row >
              <Col lg={12} xs={12} style={{marginTop:"4vw"}}>
                   <h1 className="blogheading text-center">Our Blog</h1>
                    <p className="blogp text-center">We write about building startups and thoughts going on our mind.
                    </p>
              </Col>
            </Row>

            {/* row 2  */}
            <Row style={{marginTop:"4vw"}}>
              <Col lg={6} xs={12} style={{display:"flex", justifyContent:"end"}}>
                <Link to="/Blog1">
                  <img className="img-fluid imageb1" src={b1} alt="b1"/>
                </Link>
               
              </Col>

              <Col lg={6} xs={12} style={{marginTop:"2vw"}}>
                <Link to="/Blog1"  style={{textDecoration:"none"}}>
                <p className="pb1">COURSES</p>
                <h1 className="headingb1">Introduction to the Essential <br/>Data Structures & Algorithms</h1>
                <p className="pb1wed">Marcell Ziemann . Wed Nov 09 2022</p>

                </Link>
              
              </Col>
            </Row>

            {/* row 3  */}
            <Row style={{marginTop:"5vw"}}>
              <Col lg={6} xs={12} style={{display:"flex", justifyContent:"end"}}>
                <Link to="/Blog2">
                    <img className="img-fluid imageb1" src={b2} alt="b2"/>
                </Link>
                
              </Col>

              <Col lg={6} xs={12} style={{marginTop:"2vw"}}>
                <Link to="/Blog2" style={{textDecoration:"none"}}>
                <p className="pb1">TUTORIALS</p>
                <h1 className="headingb1">The Complete Guide to Full <br/>Stack Web Development</h1>
                <p className="pb1wed">Janette Lynch • Tue Nov 08 2022</p>
                </Link>
                
              </Col>
            </Row>

            {/* row 4  */}
            <Row style={{marginTop:"5vw"}}>
              <Col lg={6} xs={12} style={{display:"flex", justifyContent:"end"}}>
                <Link to="/Blog3">
                    <img className="img-fluid imageb1" src={b3} alt="b3"/>
                </Link>
                
              </Col>

              <Col lg={6} xs={12} style={{marginTop:"2vw"}}>
                <Link to="/Blog3"  style={{textDecoration:"none"}}>
                <p className="pb1">TUTORIALS</p>
                <h1 className="headingb1">How to become a Frontend <br/>Master</h1>
                <p className="pb1wed">Connor Lopez • Mon Nov 07 2022</p>
                </Link>
               
              </Col>
            </Row>

            {/* row 5  */}
            <Row style={{marginTop:"5vw"}}>
              <Col lg={6} xs={12} style={{display:"flex", justifyContent:"end"}}>
                <Link to="/Blog4">
                <img className="img-fluid imageb1" src={b4} alt="b4"/>
                </Link>
              </Col>

              <Col lg={6} xs={12} style={{marginTop:"2vw"}}>
                <Link to="/Blog4"  style={{textDecoration:"none"}}>
                <p className="pb1">TECHNOLOGY</p>
                <h1 className="headingb1">Typography Example Post</h1>
                <p className="pb1wed">Charles North • Sat Nov 05 2022</p>

                </Link>
               
              </Col>
            </Row>

            {/* row 6  */}
            <Row>
                    <Col lg={12} >
                         <p className="lastcol text-center">
                         Copyright © 2023 Astroship. All rights reserved.<br/> Made by Web3Templates
                         </p>
                    </Col>
            </Row>

          </Container>
       </div>
     );
}
 
export default Blog;