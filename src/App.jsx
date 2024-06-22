import React from "react";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainServices from "./pages/Services";
import Contact from "./pages/Contact";
import Industry from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import IndiAbout from "./pages/IndiAbout";
import MidCaseStudies from "./pages/MidCaseStudies";
import CaseStudiesBlog from "./pages/CaseStudiesBlog";
import CaseStudy3 from "./pages/CaseStudy3";
import CaseStudy4 from "./pages/CaseStudy4";
import CaseStudy5 from "./pages/CaseStudy5";
import CaseStudy6 from "./pages/CaseStudy6";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<MainServices />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<CaseStudies />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/:id" element={<IndiAbout />} />
        <Route path="/insights/casestudies" element={<MidCaseStudies />} />
        <Route path="/insights/casestudieed" element={<CaseStudiesBlog />} />
        <Route path="/insights/casestudy3" element={<CaseStudy3 />} />
        <Route path="/insights/casestudy4" element={<CaseStudy4 />} />
        <Route path="/insights/casestudy5" element={<CaseStudy5 />} />
        <Route path="/insights/casestudy6" element={<CaseStudy6 />} />
      </Routes>
    </Router>
  );
};

export default App;
