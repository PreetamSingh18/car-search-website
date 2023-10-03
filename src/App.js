import React, { useEffect, useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import CarsData from "./cars.json";
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [inputSearch,setInputSearch]=useState("");
  const [data,setData]=useState([]);
  // useEffect(()=>{
  //   setData(CarsData);
  // },[])
 
  useEffect(()=>{
   setData(CarsData.filter((car)=>{
       return (
         car.title.toLowerCase().includes(inputSearch)
       )
   }))

  },[inputSearch])



  return (
    <div>
    <Navbar setInputSearch={setInputSearch}/>
    {/* <Products data={data}/> */}
    <BrowserRouter>
      <Routes>
      <Route index element={<Products data={data}/>}/>
        <Route path='/page/:pageId' element={<Products data={data}/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App