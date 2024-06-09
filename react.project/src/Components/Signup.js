import { Button, Col, Container, Row } from "react-bootstrap";
import img from '../images/img.jpg';

const Signup = () => {
    return ( 
        <Container>
            <Row>
                <Col lg={6} xs={12}>
                        <img className='img-fluid mt-2' style={{width:"50vw"}} src={img} alt='img'/>
                 </Col>

                <Col lg={6} xs={12} style={{marginTop:"4vw"}}>
                        <h1 className=' m-3'>SIGN UP</h1> 
                    <input className="form-control inputname w-75" type="text"  placeholder="Full Name"/><br/>
                    <input className="form-control inputname w-75" type="text"  placeholder="Last Name"/><br/>  
                    <input className="form-control inputaddress w-75" type="email"  placeholder="Email Address"/><br/>
                    <input className="form-control inputname w-75" type="password"  placeholder="Password"/>
            
                    <Button className='w-75 mt-5' style={{backgroundColor:"#0864B5",color:"white"}}>Sign up</Button>
                 </Col>
            </Row>
        </Container>
     );
}
 
export default Signup;