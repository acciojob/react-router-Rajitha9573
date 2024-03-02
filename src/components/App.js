
import React from "react";
import './../styles/App.css'
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Nav />

      <Routes>
        <Route path ="/" element={ <Home />}/>
        <Route path ="/about" element={ <About />}/>


      </Routes>
      
      </BrowserRouter>
      
     
     

        {/* Do not remove the main div */}
    </div>
  )
}

export default App
