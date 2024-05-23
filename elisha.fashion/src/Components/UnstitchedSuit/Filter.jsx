import React from 'react';
import { GoFilter } from "react-icons/go";
import { IoIosRadioButtonOn } from "react-icons/io";
import { Col, Container, Dropdown, Row } from 'react-bootstrap';


function FilterButton() {
  const handleFilterClick = () => {
    console.log("Products filtered!");
  };

  return (
    <Container>
    <Row>
      
        <div style={{ display: 'flex', gap: '2vh', marginLeft: '9vh', marginTop: '9vh' }}>
        <Col className='lg={2} md={3} sm={6}'>
          {/* FIRST BUTTON */}
          <button className='d-flex justify-content-center'
            style={{ backgroundColor: '#e0d8cf', border: 'none', height:"8vh", padding: '5px 10px', borderRadius: '3vh', cursor: 'pointer' }}
            onClick={handleFilterClick}
          >
            <GoFilter style={{ verticalAlign: 'middle', marginRight: '10px', marginTop: '1vh', fontSize: '5vh', color: '#4f4e4a' }} />
            <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a' }}>Filter</span>
          </button>
          </Col>

          {/* SECOND BUTTON */}
          <Col className='lg={2} md={3} sm={6}'>
          <button  className='d-flex justify-content-center'
            style={{ backgroundColor: '#e0d8cf', border: 'none',  height:"8vh", padding: '6px 10px', fontSize: '16px', borderRadius: '3vh', cursor: 'pointer' }}
            onClick={handleFilterClick}
          >
            <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a' }}>Ready&Ship</span>
            <IoIosRadioButtonOn style={{ verticalAlign: 'middle', marginLeft: '2vh', marginTop: '1vh', fontSize: '5vh', color: '#4f4e4a' }} />
          </button>
          </Col>
         

          {/* THIRD BUTTON WITH DROPDOWN */}
          <Col className='lg={2} md={3} sm={6}'>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                color: '#4f4e4a',
                backgroundColor: '#e0d8cf',
                border: 'none',
                padding: '6px 40px',
                fontSize: '25px',
                borderRadius: '3vh',
                cursor: 'pointer',
                position: 'relative',


              }}
              id="dropdown-basic"
            >
              <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a', marginRight: '2vh', }}>Size</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            
          </Col>
          
          {/* FOURTH BUTTON WITH DROPDOWN */}
          <Col className='lg={2} md={3} sm={6}'>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                color: '#4f4e4a',
                backgroundColor: '#e0d8cf',
                border: 'none',
                padding: '6px 40px',
                fontSize: '25px',
                borderRadius: '3vh',
                cursor: 'pointer',
                position: 'relative',


              }}
              id="dropdown-basic"
            >
              <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a', marginRight: '2vh', }}>Price</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            
          </Col>
          

          {/* FIFTH BUTTON WITH DROPDOWN */}
          <Col className='lg={2} md={3} sm={6}'>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                color: '#4f4e4a',
                backgroundColor: '#e0d8cf',
                border: 'none',
                padding: '6px 40px',
                fontSize: '25px',
                borderRadius: '3vh',
                cursor: 'pointer',
                position: 'relative',


              }}
              id="dropdown-basic"
            >
              <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a', marginRight: '2vh', }}>Discount</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            
          </Col>

         

          {/* SIXTH BUTTON WITH DROPDOWN */}
          <Col className='lg={2} md={3} sm={6}'>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                color: '#4f4e4a',
                backgroundColor: '#e0d8cf',
                border: 'none',
                padding: '6px 40px',
                fontSize: '25px',
                borderRadius: '3vh',
                cursor: 'pointer',
                position: 'relative',
              }}
              id="dropdown-basic"
            >

              <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a' }}>Sort By</span>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#4f4e4a' }}>
              <Dropdown.Item href="#/action-1" style={{ color: '#dfd7cf' }}>Best Selling</Dropdown.Item>
              <Dropdown.Item href="#/action-2" style={{ color: '#dfd7cf' }}>Newest First</Dropdown.Item>
              <Dropdown.Item href="#/action-3" style={{ color: '#dfd7cf' }}>Price: Low to High</Dropdown.Item>
              <Dropdown.Item href="#/action-3" style={{ color: '#dfd7cf' }}>Price:High to Low</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            
          </Col>
       
        </div>
    
    </Row>
    </Container>

  );
}

export default FilterButton;