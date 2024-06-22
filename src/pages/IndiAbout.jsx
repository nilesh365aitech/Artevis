import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from "../assets/icon.png";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import { AboutUsData } from "../data/aboutusData";
import Navbar from "../components/Navbar";
import SurajNayak from "../assets/SurajNayak.png";
import GautamChabra from "../assets/GautamChabra.png";
import ContactUs from "../components/ContactUs";
import Stats from "../components/Stats";
import SucessStories from "../components/SucessStories";
import Footer from "../components/FooterSection";

const IndiAbout = () => {
  const { id } = useParams();

  const [response, setResponse] = useState(AboutUsData);
  const [indiResponse, setIndiResponse] = useState("");

  useEffect(() => {
    const fetchData = response.filter((e) => e.name === id);
    console.log(Object(fetchData));
    setIndiResponse(Object(fetchData));
  }, []);

  return (
    <div className="w-full h-screen">
      {indiResponse && (
        <div>
          <div
            className="bg-black text-white sm:h-[70vh] pb-10 mb-4 relative"
            style={{
              backgroundImage: `url(${
                id == "Gautam Chhabra" ? GautamChabra : SurajNayak
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Navbar />
            <div className="w-full md:w-1/2 bg-white text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600 p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="p-3">
                  <img
                    className="w-40 h-40 md:w-48 md:h-48 rounded-sm"
                    alt={indiResponse[0].imgsrc}
                    src={indiResponse[0].imgsrc}
                  />
                </div>
                <div className="flex flex-col w-full md:w-3/4 mt-4 md:mt-0 md:ml-4">
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                    {indiResponse[0].name}
                  </p>
                  <p className="font-semibold text-lg md:text-xl lg:text-2xl text-[#CC2027] my-1">
                    {indiResponse[0].position}
                  </p>
                  <div className="flex space-x-4 mt-2">
                    <div>
                      <img src={icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col gap-8 mb-10">
            <div className="ml-5 mr-5">
              <h1 className="text-[26px] font-[600] text-[#1E227F]">
                About{" "}
                {`${id}` == "Gautam Chhabra" ? "GautamChabra" : "SurajNayak"}
              </h1>
              <p>
                {indiResponse[0].roles.map((e, index) => (
                  <p key={index} className="my-3">
                    {e}
                  </p>
                ))}
              </p>
            </div>
            <div className="ml-5 mr-5">
              <h1 className="text-[21px] font-[600] text-[#000000]">
                Educational Background
              </h1>
              <p className="my-3">{indiResponse[0].educationalbackground}</p>
            </div>
            <div className="ml-5 mr-5">
              <h1 className="text-[21px] font-[600] text-[#000000]">
                Global Impact
              </h1>
              <p className="my-3">{indiResponse[0].globalimpact}</p>
            </div>
          </div>
          <SucessStories />
        </div>
      )}

      <div className="md:ml-20">
        {" "}
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default IndiAbout;
