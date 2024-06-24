import React, { useState, useEffect } from "react";
import AboutUsbg from "../assets/AboutUsbg.png";
import Navbar from "../components/Navbar";
import Illuminate from "../assets/consultingaboutus.png";
import Suraj from "../assets/profile1.png";
import Gautam from "../assets/profile2.png";
import Footer from "../components/FooterSection";
import { useNavigate } from "react-router-dom";
import LinkedInLogo from "../assets/linkedinlogo.png";
import Stats from "../components/Stats";
const AboutUs = () => {
  const navigate = useNavigate();


  return (
    <>
      <div
        className="bg-black text-white h-[78vh] md:h-[74vh] pb-10 mb-4 relative "
        style={{
          backgroundImage: `url(${AboutUsbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className="sm:w-[84%] w-[90%] py-5 px-3 bg-white min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600 lg:w-[70%]">
          <p
            className="ml-4 sm:ml-14 font-bold text-lg md:text-2xl lg:text-3xl"
            style={{ color: "red" }}
          >
            Who we are
          </p>
          <h1 className="text-2xl sm:text-3xl mt-3 md:text-4xl font-semibold ml-4 sm:ml-14">
            About Artevis
          </h1>
          <p className="ml-4 sm:ml-14 pr-10 text-base mt-5 mb-5 text-blue-900">

          We are dedicated to empowering businesses with tailored solutions that <br /> drive sustainable growth and operational excellence, ensuring our clients <br /> thrive in a competitive landscape. Our expertise spans across Strategic  Planning, <br /> Investment Advisory, and Management Consultancy.


          </p>
        </div>
      </div>
<Stats/>
      <img
        src={Illuminate}
        alt="Img"
        className="md:w-full h-64 md:h-full mx-auto "
      />

      <div className="  mt-10 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold ml-28">
          Leadership
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div
            className="flex flex-col items-center justify-center md:flex-row sm:items-center hover:cursor-pointer md:bg-white  bg-gray-100 hover:bg-gray-200 transition-all p-4"
            onClick={() => navigate(`/aboutus/Gautam Chhabra`)}
          >
            <div className="flex-shrink-0 p-3">
              <img
                className="w-40 h-40 md:w-48 md:h-48 rounded-sm"
                alt="Gautam Chhabra"
                src={Gautam}
              />
            </div>
            <div className="flex flex-col w-full ml-4">
              <p className="text-lg md:text-xl font-semibold">Gautam Chhabra</p>
              <p className="font-semibold text-base md:text-lg text-[#CC2027] my-1 flex items-center">
              Co-Founder and Managing Director
                <img alt="1" src={LinkedInLogo} className="ml-5 h-4"></img>
              </p>
              <p className="text-sm md:text-base">
              Engineer and an MBA by education, Gautam has deep interest in Strategy and Private Equity. He brings over a decade of global advisory experience in offering strategic insights that drive growth, innovation, and productivity for organizations. 

              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center md:flex-row sm:items-center hover:cursor-pointer md:bg-white bg-gray-100 hover:bg-gray-200 transition-all p-4"
            onClick={() => navigate(`/aboutus/Suraj Nayak`)}
          >
            <div className="flex-shrink-0 p-3">
              <img
                className="w-40 h-40 md:w-48 md:h-48 rounded-sm"
                alt="Suraj Nayak"
                src={Suraj}
              />
            </div>
            <div className="flex flex-col w-full ml-4">
              <p className="text-lg md:text-xl font-semibold">Suraj Nayak</p>
              <p className="font-semibold text-base md:text-lg text-[#CC2027] my-1 flex items-center">
              Co-Founder and Director
                <img alt="1" src={LinkedInLogo} className="ml-5 h-4"></img>
              </p>
              <p className="text-sm md:text-base">
              Suraj specializes in investment and transaction advisory, offering strategic counsel on deal terms, valuations, and overall opportunity analysis. He has a strong track record of formulating and implementing strategies across various sectors. 

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
          Our Expertise
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-base mb-12">
          Artevis Consulting boasts a team of seasoned experts with deep
          industry knowledge and diverse perspectives. We operate
          collaboratively across all levels of client organizations, dedicated
          to fostering success and driving positive change in the world.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full md:w-3/4 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Unparalleled Value
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-base">
              Our strategies are infused with unmatched value, crafted through
              collaborative efforts and a relentless pursuit of excellence.
            </p>
          </div>
          <div className="w-full md:w-3/4 md:ml-10 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Business Acumen & Agile Adaptability
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-base">
              Our team possesses exceptional business acumen and sector-specific
              insights, enabling us to deliver tailored solutions with strategic
              impact from day one.
            </p>
          </div>
          <div className="w-full md:w-3/4 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Geographical Expertise
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-base">
            With profound knowledge of the US and Middle Eastern markets, particularly KSA and UAE, combined with extensive real estate and technology experience, we provide insights that drive unparalleled success.
            </p>
          </div>
          <div className="w-full md:w-3/4 md:ml-10 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Strategic Execution
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-base">
              We execute with precision and efficiency, ensuring optimal
              outcomes for every venture we undertake.
            </p>
          </div>
          <div className="w-full md:w-3/4 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Exceptional Pedigree
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-base">
              Led by senior experts with over a decade of top-tier financial and
              business advisory experience, we consistently surpass industry
              benchmarks.
            </p>
          </div>
          <div className="w-full md:w-3/4 md:ml-10 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Cost Efficiency & Operational Flexibility
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-base">
              Engage with us for cost-efficient offshore solutions and the
              flexibility to adapt the team according to your project needs,
              without compromising on quality or results.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
