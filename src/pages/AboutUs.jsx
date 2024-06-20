import React, { useState, useEffect } from "react";
import AboutUsbg from "../assets/AboutUsbg.png";
import Navbar from "../components/Navbar";
import Illuminate from "../assets/illuminate.png";
import Gautam from "../assets/profile1.png";
import SUraj from "../assets/profile2.png";
import Footer from "../components/FooterSection";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clientAUM, setClientAUM] = useState(0);
  const navigate = useNavigate();

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

  return (
    <>
      <div
        className="bg-black text-white h-[100vh] md:h-[70vh] pb-10 mb-4 relative "
        style={{
          backgroundImage: `url(${AboutUsbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="sm:w-[50%] w-[70%] py-5 px-3 bg-white min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold text-lg md:text-2xl lg:text-3xl" style={{ color: "#FF6347" }}>
            Who we are
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ml-4 sm:ml-14">
            About Artevis
          </h1>
          <p className="ml-4 sm:ml-14 pr-10 text-base sm:text-lg md:text-xl">
            Artevis Consulting is a pioneering offshore management consulting
            and investment advisory firm. Our mission is clear: to equip CXOs,
            Investment Teams, and board members with essential insights for
            strategic decision-making and long-term value creation.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly items-center px-4 py-14 bg-white gap-5 sm:gap-0">
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            {experience}+
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Years of Experience
          </p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            {clients}+
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Clients Empowered
          </p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            {countries}+
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Countries Served
          </p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            ${clientAUM}Bn+
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Client AUM
          </p>
        </div>
      </div>

      <img
        src={Illuminate}
        alt="Img"
        className="md:w-full h-64 md:h-full mx-auto "
      />
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-[32px] sm:text-3xl md:text-4xl text-blue-900 pl-6 font-semibold">
          Leadership
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-0">
          <div
            className="flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 transition-all p-4"
            onClick={() => navigate(`/aboutus/Gautam Chhabra`)}
          >
            <div className="p-3">
              <img
                className="w-[160px] h-[160px] rounded-sm"
                alt="Gautam Chhabra"
                src={Gautam}
              ></img>
            </div>
            <div className="flex flex-col w-3/4">
              <p className="text-lg md:text-xl font-semibold">
                Gautam Chhabra
              </p>
              <p className="font-semibold text-base md:text-lg text-[#CC2027] my-1">
                Founder and Managing Director
              </p>
              <p className="text-sm md:text-base">
                Engineer and an MBA by education, Gautam has deep interest in
                finance. He brings over a decade of global advisory experience
                in offering strategic insights that drive growth, innovation,
                and productivity for organizations.
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 transition-all p-4"
            onClick={() => navigate(`/aboutus/Suraj Nayak`)}
          >
            <div className="p-3">
              <img
                className="w-[160px] h-[160px] rounded-sm"
                alt="Suraj Nayak"
                src={SUraj}
              ></img>
            </div>
            <div className="flex flex-col w-3/4">
              <p className="text-lg md:text-xl font-semibold">Suraj Nayak</p>
              <p className="font-semibold text-base md:text-lg text-[#CC2027] my-1">
                Director
              </p>
              <p className="text-sm md:text-base">
                Suraj specializes in investment and transaction advisory,
                offering strategic counsel on deal terms, valuations, and
                overall opportunity analysis. He has a strong track record of
                formulating and implementing strategies across various sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
          Our Expertise
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light mb-12">
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
            <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
              Our strategies are infused with unmatched value, crafted through
              collaborative efforts and a relentless pursuit of excellence.
            </p>
          </div>
          <div className="w-full md:w-3/4 md:ml-10 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Business Acumen & Agile Adaptability
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
              Our team possesses exceptional business acumen and sector-specific
              insights, enabling us to deliver tailored solutions with strategic
              impact from day one.
            </p>
          </div>
          <div className="w-full md:w-3/4 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Geographical Expertise
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
              With a profound understanding of the Saudi Arabian market and
              extensive Real Estate experience, we offer insights that lead to
              unparalleled success.
            </p>
          </div>
          <div className="w-full md:w-3/4 md:ml-10 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Strategic Execution
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
              We execute with precision and efficiency, ensuring optimal
              outcomes for every venture we undertake.
            </p>
          </div>
          <div className="w-full md:w-3/4 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Exceptional Pedigree
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
              Led by senior experts with over a decade of top-tier financial and
              business advisory experience, we consistently surpass industry
              benchmarks.
            </p>
          </div>
          <div className="w-full md:w-3/4 md:ml-10 h-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
              Cost Efficiency & Operational Flexibility
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-light">
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
