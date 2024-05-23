import React from 'react';
import { GoFilter } from "react-icons/go";
import { IoIosRadioButtonOn } from "react-icons/io";
import { Dropdown } from 'react-bootstrap';


function FilterButton() {
  const handleFilterClick = () => {
    console.log("Products filtered!"); 
  };

  return (
    <div style={{ display: 'flex', gap: '2vh',marginLeft: '9vh', marginTop: '9vh' }}>
      {/* FIRST BUTTON */}
      <button
        style={{ backgroundColor: '#e0d8cf', border: 'none', padding: '7px 30px', fontSize: '16px', borderRadius: '3vh', cursor: 'pointer' }}
        onClick={handleFilterClick}
      >
        <GoFilter style={{ verticalAlign: 'middle', marginRight: '20px', marginTop: '-1vh', fontSize: '6vh', color: '#4f4e4a' }} />
        <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a' }}>Filter</span>
      </button>

      {/* SECOND BUTTON */}
      <button
        style={{ backgroundColor: '#e0d8cf', border: 'none', padding: '7px 20px', fontSize: '16px', borderRadius: '3vh', cursor: 'pointer' }}
        onClick={handleFilterClick}
      >
        <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a' }}>Ready & Ship</span> 
        <IoIosRadioButtonOn style={{ verticalAlign: 'middle', marginLeft: '2vh', marginTop: '-1vh', fontSize: '6vh', color: '#4f4e4a' }} />
      </button>

      {/* THIRD BUTTON WITH DROPDOWN */}
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
    <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a', marginRight: '2vh',}}>Size</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

 {/* FOURTH BUTTON WITH DROPDOWN */}
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
    <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a', marginRight: '2vh',}}>Price</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

{/* FIFTH BUTTON WITH DROPDOWN */}

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
    <span style={{ fontSize: '4vh', fontWeight: '500', color: '#4f4e4a', marginRight: '2vh',}}>Discount</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

{/* SIXTH BUTTON WITH DROPDOWN */}
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

      <Dropdown.Menu style={{backgroundColor: '#4f4e4a'}}>
        <Dropdown.Item href="#/action-1" style={{color: '#dfd7cf'}}>Best Selling</Dropdown.Item>
        <Dropdown.Item href="#/action-2"  style={{color: '#dfd7cf'}}>Newest First</Dropdown.Item>
        <Dropdown.Item href="#/action-3"  style={{color: '#dfd7cf'}}>Price: Low to High</Dropdown.Item>
        <Dropdown.Item href="#/action-3"  style={{color: '#dfd7cf'}}>Price:High to Low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
  );
}

export default FilterButton;
