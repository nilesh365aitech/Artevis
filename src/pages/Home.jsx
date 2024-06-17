import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AboutUs from "../section/AboutUs";
import ServiceCards from "../section/ServiceCards";
import Contact from "../components/ContactUs";
import Footer from "../components/FooterSection";
import Services from "../section/Services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Industries from "../section/Industries";
import Work from "../section/Work";
import RecentUpdates from "../section/RecentUpdates";
import HomeImage from "../assets/home.png";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(`url(${HomeImage})`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current) => {
      // Change the background image based on the current slide index
      switch (current) {
        case 0:
          setBackgroundImage(`url(${HomeImage})`);
          break;
        case 1:
          setBackgroundImage(HomeImage);
          break;
        case 2:
          setBackgroundImage(HomeImage);
          break;
        default:
          setBackgroundImage(HomeImage);
      }
    },
  };

  return (
    <>
      <div
        className="h-3/4 text-white p-4"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "40vh",
        }}
      >
        <Navbar />
        <Slider {...settings} className="max-w-4xl mx-auto mb-20 pb-8 mt-32">
          <div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#ff6347" }}
            >
            Thrive Ahead
            </h1>
            <p className="text-lg mb-8">
            Elevate Your Business with Strategic and Financial Consulting
            </p>
          </div>
          <div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#ff6347" }}
            >
              Building Futures
            </h1>
            <p className="text-lg mb-8">
            Consulting Solutions to Propel Your Business Forward
            </p>
          </div>
          <div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#ff6347" }}
            >
              Elevate, Expand, Excel

            </h1>
            <p className="text-lg mb-8">
            Financial Expertise for Your Business Journey
            </p>
          </div>
        </Slider>
      </div>

      <AboutUs />
      <ServiceCards />
      <Services />
      <Industries />
      <Work />
      <RecentUpdates />
      <Contact />
      <Footer />
    </>
  );
}
