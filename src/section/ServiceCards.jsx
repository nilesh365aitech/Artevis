import React from "react";
import { Link } from "react-router-dom";
import Service1 from "../assets/servicefirst.png";
import Service2 from "../assets/servicesecond.png";
import Service3 from "../assets/servicethird.png";

const ServiceCards = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="py-8 mx-auto px-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-semibold text-start mb-8 ">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/services" onClick={scrollToTop}>
            <div className="group flex bg-[#F1F4F7] hover:bg-blue-900 flex-col items-center ">
              <img
                src={Service1}
                alt="Service 1"
                className="mx-auto mb-4 w-full"
              />
              <div className=" group-hover:text-white px-4">
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  Management Consulting
                </h3>
                <p className="text-sm sm:text-base  mb-6">
                  Artevis Consulting crafts clear strategies and operational
                  plans for business success. We offer tailored solutions, from
                  business plans to insightful studies, guiding you through
                  every challenge.
                </p>
                <div className="text-right px-4 pb-6">
                  <a
                    href="#"
                    className="inline-flex pt-6 items-center text-red-600 font-medium  group-hover:text-white"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/services" onClick={scrollToTop}>
            <div className="group flex bg-[#F5EDEF] hover:bg-red-700 flex-col items-center ">
              <img
                src={Service2}
                alt="Service 2"
                className="mx-auto mb-4 w-full"
              />

              <div className=" group-hover:text-white px-4">
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  Investment Advisory
                </h3>
                <p className="text-sm sm:text-base mb-6">
                  Navigate complex investment landscapes with Artevis
                  Consulting's expert guidance. From financial modeling to
                  opportunity analysis, we equip clients with insights to make
                  informed decisions, aligning investments with their
                  objectives.
                </p>
                <div className="text-right px-4  pb-6">
                  <a
                    href="#"
                    className="inline-flex items-center text-red-600 font-medium group-hover:text-white"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/services" onClick={scrollToTop}>
            <div className="group flex bg-gray-100 hover:bg-blue-900 flex-col items-center ">
              <img
                src={Service3}
                alt="Service 3"
                className="mx-auto mb-4 w-full"
              />

              <div className=" group-hover:text-white px-4">
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  Business Analytics
                </h3>
                <p className="text-sm sm:text-base mb-6">
                  Enhance decision-making across your enterprise and investment
                  teams with our business analytics services. By leveraging
                  data-driven insights, we enable better decisions that drive
                  growth, improve efficiency, and foster innovation to enable
                  your success.
                </p>
                <div className="text-right px-4 pb-6">
                  <a
                    href="#"
                    className="inline-flex items-center text-red-600 font-medium group-hover:text-white"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
