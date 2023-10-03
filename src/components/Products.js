import React, { useState } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";

const Products = ({ data }) => {
    const [currentPage,setCurrentPage]=useState(1);
   const totalPages=Math.ceil(data.length/6);
   const lastCardIndex=currentPage*6;
   const firstCardIndex=lastCardIndex-6;
   const NewData=data.slice(firstCardIndex,lastCardIndex);

  return (

    <div className="Cards-Container">
      { data.length==0?(<div className="Not-found"><h5>Oops! no car found</h5></div>)
       :( NewData &&
        NewData.map((product, ind) =><Cards key={ind} product={product}/> ))}
      <div className="pagination">
       <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

      </div>
    </div>

 
  );
};

export default Products;
