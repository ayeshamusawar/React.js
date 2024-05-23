import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import logo from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';


const UserLogin = () => {


    const navigate = useNavigate(); // useHistory hook ka istemal

    const handleLogin = () => {
        // Yahaan aap user authentication logic add kar sakte hain
        // Agar authentication successful hoti hai, toh aap dashboard page per redirect kar sakte hain
        
        navigate('/'); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Default behavior ko rokne ke liye

        // Yahaan username aur password ko backend server tak bhejne ka logic hoga

     
    };

    return (
        <div>
            <Container>
                <Row>
                    {/* 1 column  */}
                    <Col lg={6} sm={12}>
                        <div>
                            <img src={logo} className='img-fluid' style={{ width: "55%", marginTop: "5vw", marginLeft: "7vw" }} />
                        </div>
                    </Col>

                    {/* 2 column 2  */}
                    <Col lg={6} sm={12} style={{ backgroundColor: "#E0D8CF", height: "100vh" }}>
                        <form onSubmit={handleSubmit} style={{ marginTop: "4vw" }}>
                            <h1 className='text-center' style={{color:"#4F4E4A"}}>USER LOGIN</h1>

                            <input className="form-control inputname w-75 mt-4" name="name" type="text"
                                placeholder="UERNAME"
                                
                                style={{ marginLeft: "4vw", borderRadius: "20px", backgroundColor:"#4F4E4A", 
                                WebkitTextFillColor: '#A4927E', paddingLeft:"2vw" }} />

                            <br />

                            <input className="form-control inputname w-75" name="user_email" type="password"
                                placeholder="PASSWORD" 
                                style={{ marginLeft: "4vw", borderRadius: "20px", backgroundColor:"#4F4E4A", 
                                WebkitTextFillColor: '#A4927E', paddingLeft:"2vw" }} />

                            <div className=" form-check mb-5 mt-5" style={{marginLeft:"5vw"}}>
                                <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label" style={{ color:"#66635E"}} 
                                    >Remember me</label>
                                    <a href="#" style={{marginLeft:"9.5vw", textDecoration:"none", color:"#66635E"}}
                                    >Forget password?</a>
                            </div>


                            <Button type="submit"  onClick={handleLogin}
                            style={{
                                borderRadius: "20px", width: "25%", height: "20%",
                                marginLeft: "14vw", color:"#A4927E",backgroundColor:"#4F4E4A"
                            }}
                                variant="light">Login</Button>


                        </form>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default UserLogin;
