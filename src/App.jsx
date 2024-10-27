import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ideas from "./Pages/Ideas";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Careers from "./Pages/Careers";
import FetchData from "./FetchData";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  function Layout() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Ideas />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  }
};

export default App;
