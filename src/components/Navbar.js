import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


const Navbar = ({setInputSearch}) => {
  const [inputdata,setInputdata]=useState("");
  const handleChange=(e)=>{
    setInputdata(e.target.value)
  }
  const handleSearch=()=>{
    setInputSearch(inputdata);
    setInputdata("");
  }
  return (
    <>
      <div className="NavBar">
        <div className="NavBar-Body">
          <div>
            <input type="text" placeholder="Search here ...." value={inputdata} onChange={(e)=>handleChange(e)}/>
            <button onClick={handleSearch} ><FontAwesomeIcon icon={faSearch}/> </button>
          </div>
          <div className="Navbar-Filter">
            <h4>Relevence </h4>
            <h4>All Brands</h4>
          </div>
        </div>
        <h3>Car Searching Website</h3>
      </div>
    </>
  );
};

export default Navbar;
