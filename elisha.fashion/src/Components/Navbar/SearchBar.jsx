import React, { useEffect, useState } from "react";
import Records from "../../records.json";
import { IoMdClose } from "react-icons/io";

import "./SearchBar.css";
import { IoSearchCircle } from "react-icons/io5";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = () => {
    setSearch("")
    setSearchData([])
  }

  useEffect(() => {
    if (search !== "") {
      const newFilterRecords = Records.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
      setSearchData(newFilterRecords); 
    } else {
      setSearchData([]); 
    }
  }, [search]);

  return (
    <section className="search_section" style={{ marginLeft: "-30vh" }}>
      <div className="search_input_div">
        <input
          type="text"
          className="search_input"
          placeholder="Search..."
          autoComplete="off"
          onChange={handleChange}
          value={search}
        />
        <div className="search_icon" style={{display: 'flex',}}>
            {
                search === "" ? <IoSearchCircle/> :  <IoMdClose onClick={handleClose} style={{marginLeft: '-10vh'}}/>
            }
         
        
        </div>
        
      </div>
      <div className="search_result">
      {searchData.slice(0, 2).map((product, index) => (
          <a
            key={index} 
            href="Pcs1"
            className="search_suggestion_line"
            style={{ display: "inline-block", textDecoration: 'none' }}
          >
            <h6 style={{ textDecoration: "none", color: "inherit" }}>
              {product.title}
            </h6>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
