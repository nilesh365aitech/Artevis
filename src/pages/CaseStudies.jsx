import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSection";
import Insightbg from "../assets/insightbg.png";
import RecentUpdates from "../section/RecentUpdates";
import ContactUs from "../components/ContactUs";
import SucessStories from "../components/SucessStories";

const CaseStudies = () => {
  return (
    <>
      <div
        className="bg-black text-white h-[100vh] md:h-[70vh] pb-10 mb-4 relative"
        style={{
          backgroundImage: `url(${Insightbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="sm:w-[80%] xl:w-[70%] w-[80%] py-10 px-3 bg-white min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600 md:pl-[3.7rem]">
          <p className="ml-4 sm:ml-14 font-bold text-red-700">What we think</p>
          <h1 className="text-4xl font-semibold ml-4 sm:ml-14">
            Insights, Media & Case Studies
          </h1>
          <p className="ml-4 sm:ml-14 pr-10 mt-6 text-blue-800">
            We combine sector expertise with extensive management competence to
            offer solutions that are as unique as our clientele. Every strategy
            applied and every recommendation made is customized to the
            individual needs of our customers.
          </p>
        </div>
      </div>
      
      <SucessStories />
     
      <div className="md:ml-20">
        <RecentUpdates />
        <div className="">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;
