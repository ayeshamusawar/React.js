import { Button, Card, Col, Container, Row } from "react-bootstrap";
import '../style/Home.css';
import robotImage from '../images/robot.webp';
import {FaBriefcase, FaReact, FaGithub, FaDatabase} from 'react-icons/fa';
import { IoMdCloudDownload } from "react-icons/io";
import {IoTriangleSharp } from 'react-icons/io5';
import {SiSvelte, SiTailwindcss, SiAlpinedotjs, SiAstro} from 'react-icons/si';
import { HashLink } from "react-router-hash-link";
import { MdOutlineWebAsset} from "react-icons/md";
import { RiFileSearchFill } from "react-icons/ri";
import { BsFilePersonFill } from "react-icons/bs";
import { BiSolidBot } from "react-icons/bi";
import React from "react";


const Home = () => {
   
    
    return ( 
        <div id="start">
            <Container>
                {/* first row  */}
                <Row style={{marginTop:"4vw"}}>
                   <Col lg={6} xs={12}>
                   <h1 className="header head">Marketing website <br/>done with Astro</h1>
                   <p className="p">Astroship is a starter template for startups,marketing websites &<br/>
                    landing pages. Built with Astro.build and TailwindCSS. You can<br /> quickly create any 
                    website with this starter. </p>
       
                   <Button className="button1" variant="dark">
                           <IoMdCloudDownload className="btnicon" />
                              Download for Free
                  </Button>
                     
                     <Button className="btn2 mt-3" variant="outline-dark">
                     <FaGithub className="btnicon" />
                       GitHub Repo
                     </Button>

                   </Col>

                   <Col lg={6} xs={12}>
                   <img className="img-fluid" src= {robotImage} alt="robot" />
                   </Col>
                </Row>

                 {/* 2 row  */}

                 <Row style={{marginTop:"10vw"}}>
                    {/* col-12  */}
                    <Col lg={12}>
                         <h1 className="header2">Everything you need to start a website</h1>
                         <p className="p2">Astro comes batteries included. It takes the best parts of state-of-the-art tools 
                            and adds its own innovations.</p>
                    </Col>

                    {/* col-12  */}
                    <Col lg={4} xs={12}>
                         <div  style={{display:"flex", alignItems:"center"}}>
                         <div className="circle">
                         <FaBriefcase className="Icons"/>
                         </div>
                         <div>
                         <h1 className="col-h1">Bring Your Own Framework</h1>
                         <p className="col-p1">Build your site using React, Svelte, Vue, Preact, web components, or just 
                         plain ol' HTML + JavaScript.</p>

                         </div>
                         </div>      
                    </Col>

                    <Col  lg={4} xs={12}>
                         <div style={{display:"flex", alignItems:"center"}}>
                         <div className="circle">
                            <MdOutlineWebAsset className="Icons" />
                         </div>

                         <div>
                         <h1 className="col-h1">100% Static HTML, No JS</h1>
                         <p className="col-p1">Astro renders your entire page to static HTML, removing all JavaScript 
                         from your final build by default.</p>
                         </div>

                         </div>   
                    </Col>

                    <Col  lg={4} xs={12}>
                         <div style={{display:"flex", alignItems:"center"}}>
                              <div className="circle">
                                   <FaDatabase className="Icons" />
                              </div>
                         <div>
                         <h1 className="col-h1">On-Demand Components</h1>
                         <p className="col-p1">Need some JS? Astro can automatically hydrate interactive components when 
                         they become visible on the page.</p>

                         </div>

                         </div>  
                    </Col>

                    {/* col-12  */}
                    <Col  lg={4} xs={12}>
                         <div style={{display:"flex", alignItems:"center"}}>
                              <div className="circle">
                                   <BiSolidBot className="Icons" />
                              </div>
                         <div>
                         <h1 className="col-h1">Broad Integration</h1>
                        <p className="col-p1">Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown,
                         MDX, and any other npm packages.</p>
                         </div>

                         </div>
                    </Col>

                    <Col  lg={4} xs={12}>
                         <div style={{display:"flex", alignItems:"center"}}>
                              <div className="circle">
                                   <RiFileSearchFill className="Icons" />
                              </div>
                              <div>
                              <h1 className="col-h1">SEO Enabled</h1>
                              <p className="col-p1">Automatic sitemaps, RSS feeds, pagination and collections 
                              take the pain out of SEO and syndication. It just works!</p>
                              </div>
                         </div>
                        
                    </Col>

                    <Col  lg={4} xs={12}>
                         <div style={{display:"flex", alignItems:"center"}}>
                              <div className="circle">
                                   <BsFilePersonFill className="Icons" />
                              </div>
                              <div>
                              <h1 className="col-h1">Community</h1>
                              <p className="col-p1">Astro is an open source project powered by hundreds of contributors
                                making thousands of individual contributions.</p>

                              </div>
                         </div>
                        
                    </Col>

                 </Row>

                 {/* 3 row  */}
                  <Row style={{marginTop:"6vw",}}>
                    <Col lg={12} xs={9}>
                       <h4 className="text-center" style={{color:"grey", fontSize:"3vh" }}>Works with your technologies</h4>
                       <FaReact className="icon"/>
                       <SiSvelte className="icon" />
                       <SiTailwindcss className="icon" />
                       <SiAlpinedotjs className="icon" />
                       <IoTriangleSharp className="icon"/>
                       <SiAstro className="icon"/> 
                    </Col>

                    <Col lg={12} xs={12}>
                      <Card className="" style={{ width: '80vw', height:'20rem', margin:"auto", backgroundColor:"black" }}>
                      <Card.Body>
                                <Card.Title className="ctitle text-center">Build faster websites.</Card.Title>
                               <Card.Text className="ctext text-center">Pull content from anywhere and serve it fast with Astro's next-gen island architecture.
                               </Card.Text>
                              
                              <div className="text-center">
                                   <HashLink smooth to="#start">
                                   <Button className="cbtn" size="lg" variant="light"> Get Started</Button>
                                   </HashLink>
                              
                              </div>
                             
                       </Card.Body>
                      </Card>
                     
                    </Col>
                  </Row>
                      

                {/* 4 row  */}
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
 
export default Home;