import React, { useState } from "react";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import "./Slider.css";
import { useNavigate } from "react-router-dom";

const SucessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const items = [
    {
      bgurl: CaseStudy1,
      title: "Greenfield Ocean Race Project Achieves X% Feasibility Milestone",
      description:
        "Formulated a feasibility model for a sports and event management company for launch of a greenfield ocean race initiative in Saudi Arabia...",
      navigate: "/insights/casestudy3",
    },
    {
      bgurl: CaseStudy2,
      title:
        "From Concept to Capital: How an Innovative F&B E-Commerce and FinTech Startup Raised $xxx Million",
      description:
        "Crafted an Investor Memorandum and Financial Model to propel Fundraising Efforts for an Innovative F&B E-Commerce and FinTech Startup in KSA",
      navigate: "/insights/casestudieed",
    },
    {
      bgurl: CaseStudy3,
      title:
        "Strategic Investment Spark: From IPO Dreams to Multibillion-Dollar Reality, a Fund's Multifold Exit Triumph",
      description:
        "Assisting a New York Hedge Fund in analyzing and investing in an E-Betting Platform, leading to a multibillion-dollar IPO and resulting in a multifold exit for the fund",
      navigate: "/insights/casestudies",
    },
    {
      bgurl: CaseStudy4,
      title: "Feasibility Analysis for a one of its kind Ocean Race Event",
      description:
        "A prominent event and sports management company sought to explore the viability of initiating a greenfield ocean race in Saudi Arabia, requiring a detailed feasibility study and adaptable financial model to make critical planning and operating decisions",
      navigate: "/insights/casestudy5",
    },
    {
      bgurl: CaseStudy4,
      title: "Strategic Transformation for a National Real Estate Firm",
      description:
        "Desiring a company transformation, the client, a real estate firm, sought a comprehensive strategy revamp across multiple sectors to enhance innovation, customer experience, and profitability",
      navigate: "/insights/casestudy4",
    },
    {
      bgurl: CaseStudy4,
      title:
        "Fundraising Support and Investor Kit Creation for F&B Fintech Startup",
      description:
        "An extensive evaluation of the F&B and FinTech sectors was conducted to determine the Total Addressable Market (TAM) in KSA,revealing the startup’s growth potential",
      navigate: "/insights/casestudy6",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="slider-container relative mt-20 max-w-7xl mx-auto pb-16 lg:hidden px-5">
        <div className="slider overflow-hidden">
          <div
            className="slider-content flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 mb-20 px-2 lg:w-1/3"
                style={{ minWidth: "100%" }}
              >
                <div className="h-72 sm:h-96">
                  <div
                    className="bg-cover bg-center h-full"
                    style={{ backgroundImage: `url(${item.bgurl})` }}
                  ></div>
                </div>
                <div className="flex flex-col gap-3 mt-3">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base font-normal text-gray-700">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button className="rounded px-3 py-2 bg-red-200 text-xs text-red-600">
                    Start Ups
                  </button>
                  <p
                    className="text-red-600 text-xs font-semibold cursor-pointer"
                    onClick={() => navigate(item.navigate)}
                  >
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-[-3rem] right-0 left-0 flex items-center justify-between px-3">
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
            Success Stories
          </h1>
          <div className="flex gap-3 ">
            <button
              className="bg-gray-400 px-3 py-1 rounded-full text-white"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="bg-gray-400 px-3 py-1 rounded-full text-white"
              onClick={nextSlide}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>

      <div className="slider-container relative mt-20 max-w-7xl mx-auto pb-16 hidden lg:block">
        <div className="slider overflow-hidden">
          <div
            className="slider-content flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-1/3 flex-shrink-0 mb-20 px-2"
                style={{ minWidth: "calc(100% / 3)" }}
              >
                <div className="h-72 sm:h-96">
                  <div
                    className="bg-cover bg-center h-full"
                    style={{ backgroundImage: `url(${item.bgurl})` }}
                  ></div>
                </div>
                <div className="flex flex-col gap-3 mt-3">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base font-normal text-gray-700">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button className="rounded px-3 py-2 bg-red-200 text-xs text-red-600">
                    Start Ups
                  </button>
                  <p className="text-red-600 text-xs font-semibold cursor-pointer" onClick={() => navigate(item.navigate)}>
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-[-3rem] right-0 left-0 flex items-center justify-between px-3">
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
            Success Stories
          </h1>
          <div className="flex gap-3 ">
            <button
              className="bg-gray-400 px-3 py-1 rounded-full text-white"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="bg-gray-400 px-3 py-1 rounded-full text-white"
              onClick={nextSlide}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SucessStories;
