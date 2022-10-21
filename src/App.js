import React from "react";
import "../src/index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../src/Home";
import Navbar from "./Navbar";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
