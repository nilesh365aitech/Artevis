import React from "react";
import Home from "./pages/Home";
import Services from "./section/Services";
import Industries from "./section/Industries";
import ServiceCards from "./section/ServiceCards";
import Work from "./section/Work";
import RecentUpdates from "./section/RecentUpdates";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainServices from "./pages/Services";
import Contact from "./pages/Contact";
import Industry from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs"



const App = () => {
  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<MainServices />} />
          <Route path="/industries" element={<Industry />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="casestudies" element={<CaseStudies/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </Router>
   
    </main>
  );
};

export default App;
