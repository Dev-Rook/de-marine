import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";


// Component Imports Start
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
// Component Imports End

// Routes Import Start
import Index from "./Routes/Index";
import Services from "./Routes/Services";
// Routes Import End

const App = () => {
  return <div className="App">
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"services"} element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
