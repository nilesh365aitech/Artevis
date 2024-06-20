import React, { useState } from "react";
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
// import "./Home.css"
export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(HomeImage);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (current) => {
      setActiveSlide(current);
      switch (current) {
        case 0:
          setBackgroundImage(HomeImage);
          break;
        case 1:
          setBackgroundImage(HomeImage2);
          break;
        case 2:
          setBackgroundImage(HomeImage3);
          break;
        default:
          setBackgroundImage(HomeImage);
      }
    },
  };

  const textItems = [
    "Management Consulting",
    "Investment Advisory",
    "Business Analytics",
  ];

  return (
    <>
      <Navbar  />
      <div
        className={`relative flex flex-col items-center justify-center text-white  bg-cover bg-center transition duration-500`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          // minHeight: "100vh",
        }}
      >
        <Slider
          {...settings}
          className="w-full max-w-4xl mx-auto mt-16 sm:mt-24 md:mt-32 pb-8"
        >
          <div className="">
            <div
              style={{ backgroundColor: "#EDF5F5" }}
              className="opacity-85 p-8 md:p-16"
            >
              <span className="text-red-600 font-medium">Consulting</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-zinc-900">
                Elevating Businesses through Strategic and Management Consulting
              </h1>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-700 transition">
                Get Consultation Today <span>↗</span>
              </button>
            </div>
          </div>
          <div className="h-80 md:h-96">
            <div
              style={{ backgroundColor: "#EDF5F5" }}
              className="opacity-85 p-8 md:p-16"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-zinc-900">
                Navigating Growth: Financial Expertise for Thriving Enterprises
              </h1>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-700 transition">
                Get Consultation Today <span>↗</span>
              </button>
            </div>
          </div>
          <div className="h-80 md:h-96">
            <div
              style={{ backgroundColor: "#EDF5F5" }}
              className="opacity-85 p-8 md:p-16"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-zinc-900">
                Charting Success: Data Driven Strategies Tailored to your
                Business
              </h1>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-700 transition">
                View Case Studies <span>↗</span>
              </button>
            </div>
          </div>
        </Slider>
        <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white flex justify-between p-4">
          {textItems.map((item, index) => (
            <div
              key={index}
              className={`text-lg ${activeSlide === index ? "underline text-red-600 font-bold" : ""} border-r-2 pr-40 py-2 pl-10`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <AboutUs />
        <ServiceCards />
        <Services />
        <Industries />
        <Work />
        <RecentUpdates />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
