import React, { useState, useEffect } from "react";
import AboutUs from "../section/AboutUs";
import ServiceCards from "../section/ServiceCards";
import ContactUs from "../components/ContactUs";
import Footer from "../components/FooterSection";
import Services from "../section/Services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Industries from "../section/Industries";
import Work from "../section/Work";
import RecentUpdates from "../section/RecentUpdates";
import HomeImage from "../assets/bg.png";
import HomeImage2 from "../assets/bg2.png";
import HomeImage3 from "../assets/bg3.png";
import "./App.css";
import Stats from "../components/Stats";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(HomeImage);
  const [activeSlide, setActiveSlide] = useState(0);

  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clientAUM, setClientAUM] = useState(0);

  useEffect(() => {
    const incrementValues = (target, setter, incrementSpeed) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value < target) {
          value += 1;
          setter(value);
        } else {
          clearInterval(interval);
        }
      }, incrementSpeed);
    };

    incrementValues(10, setExperience, 100);
    incrementValues(30, setClients, 50);
    incrementValues(7, setCountries, 150);
    incrementValues(100, setClientAUM, 30);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(incrementValues);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  useEffect(() => {
    const images = [HomeImage, HomeImage2, HomeImage3];
    setBackgroundImage(images[activeSlide]);
  }, [activeSlide]);

  const textItems = [
    "Management Consulting",
    "Investment Advisory",
    "Business Analytics",
  ];

  return (
    <>
      <Navbar />

      <div
        className={`relative flex flex-col items-center justify-center text-white bg-cover bg-center transition duration-500`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Slider
          {...settings}
          className="w-full ml-0 max-w-5xl mx-auto mt-16 sm:mt-24 md:mt-32 pb-8 relative"
        >
          <div className="h-80 md:h-80 ">
            <div
              style={{ backgroundColor: "#EDF5F5" }}
              className="opacity-85 p-4 sm:p-8 md:p-12 text-left md:text-left border-r-4 border-red-600"
            >
              <span className="text-red-600 font-medium">Consulting</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold my-4 text-zinc-900">
                Elevating Businesses through Strategic and Management Consulting
              </h1>

              <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg mt-6 hover:bg-red-700 transition flex items-center">
                Get Consultation Today{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="h-80 md:h-80 ">
            <div
              style={{ backgroundColor: "#EDF5F5" }}
              className="opacity-85 p-4 sm:p-8 md:p-12 text-left md:text-left border-r-4 border-red-600"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-zinc-900">
                Navigating Growth: Financial Expertise for Thriving Enterprises
              </h1>
              <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg mt-6 hover:bg-red-700 transition flex items-center">
                Get Consultation Today{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="h-80 md:h-96">
            <div
              style={{ backgroundColor: "#EDF5F5" }}
              className="opacity-85 p-4 sm:p-8 md:p-12 text-left md:text-left border-r-4 border-red-600"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold my-4 text-zinc-900">
                Charting Success: Data Driven Strategies Tailored to your
                Business
              </h1>
              <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg mt-6 hover:bg-red-700 transition flex items-center">
                View Case Studies{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </Slider>
        <div className="absolute bottom-0 w-full gap-2 bg-black bg-opacity-70 text-white flex justify-between py-2 sm:py-4 text-xs">
          {textItems.map((item, index) => (
            <div
              key={index}
              className={`relative  text-center ${
                activeSlide === index ? "red-underline" : ""
              } p-0 sm:px-10`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <AboutUs />
      </div>

      <div className="container mx-auto px-4 mb-10">
        <ServiceCards />
      </div>
      <div>
        <Services />
      </div>
      <div className="container mx-auto px-4">
        <Industries />
      </div>
      <Stats/>
      <div className="container mx-auto px-4">
        <Work />
      </div>

      <div className="md:ml-20">
        <RecentUpdates />
        <ContactUs />
      </div>
      <div className="flex justify-end text-end mr-16 mb-3" >
      In some of these engagements, our senior team members were involved in their individual <br /> capacity or previous associations, not under the official umbrella of Artevis Consulting.
      </div>

      <Footer />
    </>
  );
}
