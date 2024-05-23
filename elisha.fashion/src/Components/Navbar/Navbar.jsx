
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../Assets/logo.png";
import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingCartIcon from "../Icons/ShoppingCart";
import "../../index.css";
import { useNavigate } from 'react-router-dom'; 
import React, { useContext} from 'react';
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
// import { CartContext } from './ShoppingCart';


const MyNavbar = ({ count, className,onClick, style }) => {
  // const { totalItem } = useContext(CartContext);


  const navigate = useNavigate(); // useHistory hook ka istemal karein


  const handleClickFauser = () =>{
    navigate('/userlogin');
  };

  const handleClick = () => {
    // ShoppingCart page par redirect karein
    navigate('/shoppingcart'); // Yahan '/shoppingcart' aapke ShoppingCart page ka URL hai
  };


  return (
    <div>
      <div
        style={{
          paddingTop: "1px",
          paddingBottom: "1px",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        <div
          className="text-center"
          style={{
            backgroundColor: "#4f4e4a",
            width: "100%",
            color: "#8c8b8a",
            fontSize: "15px",

          }}
        >
          Avail free shipping National Worldwide for orders above PKR 3000!
        </div>
      </div>


      <div className="d-flex justify-content-center align-items-center px-3">
        <img
          src={Logo}
          width="13%"
          height="9%"
          className="d-inline-block align-top img-fluid"
          alt="Your Logo"
          style={{ marginLeft: "34%", marginTop: "3vw" }}
        />
       <div
          className="ml-auto d-flex align-items-center"
          style={{ marginLeft: "30%",}}
        >
        <SearchBar  style={{ fontSize: "4vh", }} />
       
       <div style={{marginLeft: '9vh', display : 'flex', marginTop: '9vh'}}>

          <FaUser onClick={handleClickFauser} className="mx-4" style={{ fontSize: "4vh" }} />

          <div className={className} style={style} onClick={handleClick}>
          {/* <span style={{ marginRight: '5px' }}>{totalItem}</span> */}
            <ShoppingCartIcon
              count={9}
              className="mx-2"
              style={{ fontSize: "4vh" }}
            />

          </div>

          </div>
        </div>
      </div>




      <Navbar expand="lg" style={{ marginLeft: "15vw", marginTop: '3vh' }}>
        <Container className="mt-4">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <Link to="/"
                className="nav-link mx-3"
                style={{
                  margin: "15px",
                  color: "#686763",
                  fontWeight: "500",
                  fontSize: "20px",
                  borderBottom: "none"
                }}
              >
                Home
              </Link>
              <Link to="/women"
                className="nav-link mx-3"
                style={{
                  margin: "15px",
                  color: "#686763",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Women
              </Link>
              <Link to="/stiched"
                className="nav-link mx-3"
                style={{
                  margin: "15px",
                  color: "#686763",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Stiched
              </Link>
              <Link to="/unstiched"
                className="nav-link mx-3"
                style={{
                  margin: "15px",
                  color: "#686763",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Unstiched
              </Link>
              <Link to="/topsales"
                className="nav-link mx-3"
                style={{
                  margin: "15px",
                  color: "#686763",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Top Sales
              </Link>
              <Link to="/about"
                className="nav-link mx-3"
                style={{
                  margin: "15px",
                  color: "#686763",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                About Us
              </Link>
              <Link to="/contact"
                className="nav-link mx-3"
                style={{
                  margin: "15px",
                  color: "#686763",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
