import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Button } from 'react-bootstrap';
import '../style/Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <div id="start">
            <Navbar id="startp" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/" id="startc">Astro 
                     <span style={{color:"gray"}}>ship</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 justify-content-center ml-5" style={{ maxHeight: '100px' }} navbarScroll>
                           
                            <NavDropdown  className='left' title="Features" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={NavLink} to="/">Action</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="#action4">Dropdown Sub Menu</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="#action4">404 Page</NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link as={NavLink} to="/pricing" className='mx-lg-3'>Pricing</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='mx-lg-3'>About</Nav.Link>
                            <Nav.Link as={NavLink} to="/blog" className='mx-lg-3'>Blog</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className='mx-lg-3'>Contact</Nav.Link>
                        </Nav>
                        <Link to="/addblog">
                        <Button style={{ marginTop: '1vh' }} variant="light">Add Blog</Button>
                        </Link>
                        <Link to="/todolist">
                        <Button style={{ marginTop: '1vh' }} variant="light">To-Do List</Button>
                        </Link>
                        <Link to="/login">
                        <Button style={{ marginTop: '1vh' }} variant="light">Log in</Button>
                        </Link>
                        <Link to="/signup">
                        <Button style={{ marginTop: '1vh' }} variant="dark">Sign up</Button>
                        </Link>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
















































// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import {NavDropdown,  Button } from 'react-bootstrap';
// import '../style/Navbar.css';
// import React from 'react';
// import { NavLink } from 'react-router-dom';


// function ColorSchemesExample  () {
//     return ( 
//         <>
//             <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>

//         <Navbar.Brand as = { NavLink } to="/">Astroship</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">

//           <Nav
//             className="me-auto my-2 justify-content-center ml-5"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//              <NavDropdown className='left' title="Features" id="navbarScrollingDropdown">
//               <NavDropdown.Item as= { NavLink } to="/">Action</NavDropdown.Item>
//               <NavDropdown.Item as= { NavLink } to="#action4">Another action</NavDropdown.Item>
//               <NavDropdown.Item  as= { NavLink } to="#action4">Dropdown Sub Menu</NavDropdown.Item>
//               <NavDropdown.Item  as= { NavLink } to="#action4">404 Page</NavDropdown.Item>

//              </NavDropdown>


//             <Nav.Link  as= { NavLink } to="/pricing" className='mx-lg-3'>Pricing</Nav.Link>
//             <Nav.Link  as= { NavLink } to= "/about"  className='mx-lg-3'>About</Nav.Link>
//             <Nav.Link  as= { NavLink } to="/bLog" className='mx-lg-3'>Blog</Nav.Link>
//             <Nav.Link  as= { NavLink } to="/contact" className='mx-lg-3'>Contact</Nav.Link>
//             {/* <Button variant="outline-success">Log in</Button>
//             <Button variant="outline-success">Sign up</Button>
//             */}

//           </Nav>
         
//           <Button style={{marginTop:'1vh'}} variant="light">Log in</Button>
//            <Button style={{marginTop:'1vh'}} variant="dark">Sign up</Button>
            
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//         </>
//      );
// }
 
// export default  ColorSchemesExample ;