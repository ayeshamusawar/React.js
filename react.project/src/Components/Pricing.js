import { Button, Col, Container, Row } from "react-bootstrap";
import '../style/Pricing.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const Pricing = () => {
    return ( 
        <div id="startp">
            <Container>
                <Row>
                    {/* column 12  */}
                    <Col lg={12} className="col text-center">
                      <h1 className="pricingh1">Pricing</h1>
                      <p className="pricingp">Simple & Predictable pricing. No Surprises.</p>
                    </Col>
                    </Row>

                    {/* row 2  */}
                   <Row>
                         {/* column (1)  */}
                    <Col lg={4} xs={12} className="pricingcol-1">

                        <div className="text-center">
                        <h3 className="personal">Personal</h3>
                        <h2 className="free">Free</h2>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}> 
                        <IoMdCheckmarkCircleOutline className="iconp"/> {/* Icon name updated here */}
                        <h5 className="header5"> Lifetime free</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Up to 3 users</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Unlimited Pages</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Astro Sub domain</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5">Basic Integrations</h5>
                        </div>
                       
                       <div style={{display:"flex", alignItems:"center"}}>
                       <IoMdCheckmarkCircleOutline className="iconp"/> 
                       <h5 className="header5">Community Support</h5>
                       </div>
                        
                        <HashLink smooth to="/#start">
                          
                       <Button className="text-center w-75 button" variant="outline-secondary">Get Started</Button>
                        </HashLink>
                        
                     </Col>

                     {/* column 2  */}
                     <Col lg={4} xs={12} className="pricingcol-1">

                        <div className="text-center">
                        <h3 className="personal">Startup</h3>
                        <h2 className="free">$19</h2>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}> 
                        <IoMdCheckmarkCircleOutline className="iconp"/> {/* Icon name updated here */}
                        <h5 className="header5">All Free Features</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Up to 20 users</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5">20 Custom domains</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Unlimited Collaborators</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Advanced Integrations</h5>
                        </div>
                       
                       <div style={{display:"flex", alignItems:"center"}}>
                       <IoMdCheckmarkCircleOutline className="iconp"/> 
                       <h5 className="header5">Priority Support</h5>
                       </div>
                       <HashLink smooth to="#startp">
                       <Button className="text-center w-75 button2" variant="outline-secondary">Get Started</Button>
                       </HashLink>
                     </Col>


                     {/* column 3  */}
                    <Col lg={4} xs={12} className="pricingcol-1">

                        <div className="text-center">
                        <h3 className="personal">Enterprise</h3>
                        <h2 className="free">Custom</h2>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}> 
                        <IoMdCheckmarkCircleOutline className="iconp"/> {/* Icon name updated here */}
                        <h5 className="header5"> Lifetime free</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Up to 3 users</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Unlimited Pages</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5"> Astro Sub domain</h5>
                        </div>

                        <div style={{display:"flex", alignItems:"center"}}>
                        <IoMdCheckmarkCircleOutline className="iconp"/> 
                        <h5 className="header5">Basic Integrations</h5>
                        </div>
                       
                       <div style={{display:"flex", alignItems:"center"}}>
                       <IoMdCheckmarkCircleOutline className="iconp"/> 
                       <h5 className="header5">Community Support</h5>
                       </div>
                        <Link to="/contact#startc">
                        <Button className="text-center w-75 button" variant="outline-secondary">Get Started</Button>
                        </Link>
              
                        
                     </Col>

                   </Row>
                

                       {/* row 2  */}
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
 
export default Pricing;












































// import { Button, Col, Container, Row } from "react-bootstrap";
// import '../style/Pricing.css';
// import { IoMpCheckmarkCircleOutline } from 'react-icons/io';

// const Pricing = () => {
//     return ( 
//         <div>
//             <Container>
//                 <Row>
//                     {/* column 12  */}
//                     <Col lg={12} className="col text-center">
//                       <h1 className="pricingh1">Pricing</h1>
//                       <p className="pricingp">Simple & Predictable pricing. No Surprises.</p>
//                     </Col>

//                     {/* column-12 (1)  */}
//                     <Col lg={4} xs={12} className="pricingcol-1">

//                         <div className="text-center">
//                         <h3 className="personal">Personal</h3>
//                         <h2 className="free">Free</h2>
//                         </div>
//                         <IoMpCheckmarkCircleOutline className="iconp"/>
//                         <h5 className="header5"> Lifetime free</h5>
//                         <h5 className="header5"> Up to 3 users</h5>
//                         <h5 className="header5"> Unlimited Pages</h5>
//                         <h5 className="header5"> Astro Sub domain</h5>
//                         <h5 className="header5">Basic Integrations</h5>
//                         <h5 className="header5">Community Support</h5>
                       
//                        <Button className="text-center w-75 button" variant="outline-secondary">Get Started</Button>
                        
//                      </Col>

                  
//                 </Row>
//             </Container>
//         </div>
//      );
// }
 
// export default Pricing;