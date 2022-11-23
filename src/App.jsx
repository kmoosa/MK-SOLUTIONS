import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import index from './index.css';
import Footer from "./Footer";
function App() {
  return (
    <>
    <Navbar/>
       <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/service' element={<Service/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
    <Footer/>    
      
    </>
  );
}

export default App;
