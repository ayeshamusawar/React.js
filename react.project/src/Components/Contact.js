import { Button, Col, Container, Row } from "react-bootstrap";
import { IoMdLocate, IoMdChatbubbles, IoMdCall } from 'react-icons/io';
import emailjs from "emailjs-com";
import React from "react";
import '../style/Contact.css';

const Contact = () => {
    const formRef = React.useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_ga8kcqv',
            'template_pqneuvr',
            formRef.current,
            'NKiYSqPlH1b7jDYHY'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));

        formRef.current.reset();
    }

    return (
        <div id="startc">
            <Container>
                <Row>
                    <Col lg={12} xs={12} style={{ marginTop: "4vw" }}>
                        <h1 className="heading text-center">Contact</h1>
                        <p className="contactp text-center">We are here to help.</p>
                    </Col>
                </Row>

                {/* row 2  */}

                <Row style={{ marginLeft: "5vw", marginTop: "2vw" }}>
                    <Col lg={6} xs={12}>
                        <h2 className="contacth2">Contact Astroship</h2>
                        <p className="contactp2">Have something to say? We are here to help. Fill<br /> up the form or send email
                     or call phone.</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <IoMdLocate className="iconcont" />
                            <p className="location">1734 San Francisco, CA 93063</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <IoMdChatbubbles className="iconcont2" />
                            <p className="email">hello@astroshipstarter.com</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <IoMdCall className="iconcont2" />
                            <p className="phoneno">+1 (987) 4587 899</p>
                        </div>
                    </Col>

                    <Col lg={6} xs={12}>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input className="form-control inputname w-75" name="name" type="text" placeholder="Full Name" /><br />
                            <input className="form-control inputaddress w-75" name="user_email" type="email" placeholder="Email Address" />
                            <textarea className="form-control inputaddress w-75 mt-3" name="message" placeholder="Your Message" />

                            <Button type="submit" className="buttoncont w-75" variant="dark">Send Message</Button>

                        </form>
                    </Col>
                </Row>

                {/* row 3  */}

                <Row>
                    <Col lg={12} xs={12}>
                        <p className="lastcontact text-center">
                            Copyright © 2023 Astroship. All rights reserved.<br /> Made by Web3Templates
                         </p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Contact;
















































// import { Button, Col, Container, Row } from "react-bootstrap";
// import '../style/Contact.css';
// import { IoMdLocate, IoMdChatbubbles, IoMdCall} from 'react-icons/io';
// import emailjs from "emailjs-com";
// import React from "react";


// const Contact = () => {
//     const formRef = React.useRef();
//     function sendEmail(e) {
//         e.preventDefault();

//         emailjs.sendForm(
//             'service_ga8kcqv',
//             'template_pqneuvr',
//             formRef.current,
//             'NKiYSqPlH1b7jDYHY'
//             ).then(res=>{
//                 console.log(res);
//             }).catch(err=> console.log(err));
//             formRef.current.reset();
//     }
//     return ( 
//         <div id="startc">
//            <Container >
//             <Row >
//                 <Col lg={12} xs={12} style={{marginTop:"4vw"}}>
//                     <h1 className="heading text-center">Contact</h1>
//                     <p className="contactp text-center">We are a here to help.</p>
//                 </Col>
//             </Row>
            
//             {/* row 2  */}

//             <Row style={{marginLeft:"5vw", marginTop:"2vw"}} >
//                 <Col lg={6} xs={12}>
//                     <h1 className="contacth2">Contact Astroship</h1>
//                     <p className="contactp2">Have something to say? We are here to help. Fill<br /> up the form or send email
//                      or call phone.</p>
//                      <div style={{display:"flex", alignItems:"center"}}> 
//                         <IoMdLocate className="iconcont"/>               
//                        <p className="location">1734 Sanfransico, CA 93063</p>
//                     </div>

//                     <div style={{display:"flex", alignItems:"center"}}> 
//                         <IoMdChatbubbles className="iconcont2"/> {/* Icon name updated here */}
//                        <p className="email">hello@astroshipstarter.com</p>
//                     </div>

//                     <div style={{display:"flex", alignItems:"center"}}> 
//                         <IoMdCall className="iconcont2"/> {/* Icon name updated here */}
//                        <p className="phoneno">+1 (987) 4587 899</p>
//                     </div>
//                 </Col>

//                 <Col lg={6} xs={12}>
//                    <form onSubmit={sendEmail}>
//                    <input className="form-control inputname w-75" name="name" type="text"  placeholder="Full Name"/><br/>
//                     <input className="form-control inputaddress w-75" name="user_email" type="email"  placeholder="Email Address"/>
//                     <textarea className="inputaddress1 w-75" name="message" type="message"  placeholder="Your Message"/>

//                     <Button  type="submit" className="buttoncont w-75" variant="dark">Send Message</Button>
                    
//                    </form>
//                 </Col>
//             </Row>

//             {/* row 3  */}

//             <Row>
//                     <Col lg={12} xs={12}>
//                          <p className="lastcontact text-center">
//                          Copyright © 2023 Astroship. All rights reserved.<br/> Made by Web3Templates
//                          </p>
//                     </Col>
//                   </Row>

//            </Container>
//         </div>
//      );
// }
 
// export default Contact;