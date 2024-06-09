import { Col, Container, Row } from "react-bootstrap";
import '../style/About.css';
import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';

const About = () => {
    return ( 
        <div>
          <Container>
            <Row>
              <Col lg={12} xs={12} sm={12} style={{marginTop:"4vw"}}>
                 <h1 className="heading text-center">About</h1>
                  <p className="aboutp text-center">We are a small passionate team.</p>
              </Col>
            </Row>

            {/* row 2  */}
            <Row style={{marginTop:"3vw", marginLeft:"3vw"}}>
              
               <Col lg={12} xs={12}>
                  <h1 className="heading2">Empowering the world with Astro.</h1>
                  <p className="aboutp2">We're a multi-cultural team from around the world! We come from diverse
                   backgrounds, bringing different<br/> personalities, experiences and skills to the job. This is what
                    makes our team so special.</p>
               </Col>
               
            </Row>

            {/* row 3  */}
            <Row style={{marginTop:"1vw"}}>
               <Col lg={4} xs={12}>
              <img className="img-fluid image1" src={a1} alt="a1" />
              <h5 className="text-center">Janette Lynch</h5>
              <p className="text-center" style={{color:"gray"}}>Senior Director</p>
               </Col>

               
               <Col lg={4} xs={12}>
              <img className="img-fluid image2" src={a2} alt="a1" />
              <h5 className="text-center">Marcell Ziemann</h5>
              <p className="text-center" style={{color:"gray"}}>Principal Strategist</p>
               </Col>

               <Col lg={4} xs={12} >
              <img className="img-fluid image3" src={a3} alt="a1" />
              <h5 className="text-center">Robert Palmer</h5>
              <p className="text-center" style={{color:"gray"}}>Marketing Engineer</p>
               </Col>
            </Row>

            {/* row 4  */}

            <Row>
                    <Col lg={12} xs={12}>
                         <p className="lastcol text-center">
                         Copyright © 2023 Astroship. All rights reserved.<br/> Made by Web3Templates
                       
                         </p>
                    </Col>
            </Row>
          </Container>
        </div>
     );
}
 
export default About;