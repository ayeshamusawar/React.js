import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../Assets/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_95x2n45', 'template_ls12ybr',
     e.target,'NKiYSqPlH1b7jDYHY',
    ).then(res => {
      console.log(res);
    }).catch(err=> console.log(err));
  }

  return (
    <div>
      <Container>
        <Row>

          <Col lg={6} sm={12}>
            <img src={logo} style={{ width: "50%", marginTop: "5vw", marginLeft: "7vw" }}
            />
          </Col>

          <Col lg={6} sm={12} className='mt-3' style={{ borderLeft: '2px solid #7F7B77', borderTop: '3px solid #4f4e4a' }}>
            <div style={{ padding: "3vw", paddingLeft: "6vw" }}>

              <form onSubmit={sendEmail}>
                <h1>Contact Us</h1>
               
                <input className="form-control inputname w-75" name="name" type="text"
                  style={{ borderBottom: '2px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none',
                   borderBottomLeftRadius: 0, borderBottomRightRadius: 0, fontWeight:"bold" }}
                  placeholder="Full Name" />
               
                <input className="form-control inputname w-75 mt-3" name="user_email" type="text"
                  style={{ borderBottom: '2px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none',
                   borderBottomLeftRadius: 0, borderBottomRightRadius: 0 , fontWeight:"bold"}}
                  placeholder="E-mail" />

                <textarea className="form-control inputaddress w-75 mt-3" row="1" name="message"
                 style={{ borderBottom: '2px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none',
                 borderBottomLeftRadius: 0, borderBottomRightRadius: 0, fontWeight:"bold" }}
                  placeholder="Message" />

                <div className='d-flex justify-content-between mt-5'>

                  <Button type="submit" style={{ borderRadius: "20px", width: "30%", height: "20%" }}
                    variant="dark">Submit</Button>

                  <div style={{ marginRight: "11vw", fontSize: "2vw" }}>
                    <FaFacebookF style={{ marginLeft: "1vw" }} />
                    <FaTiktok style={{ marginLeft: "1vw" }} />
                    <FaInstagram style={{ marginLeft: "1vw" }} />
                  </div>

                </div>




              </form>

            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Contact;

