import { useNavigate } from "react-router-dom";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";

export default function Work() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="container mx-auto    py-8">
        <h1 className="text-3xl font-semibold mb-10  sm:ml-[3rem] text-blue-900 ">
          Our Work
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:ml-20 mb-10 mt-2 gap-8 sm:pr-32">
          <div className="mb-4">
            <img src={CaseStudy1} alt="Case Study 1" className="w-full" />
            <h2 className="text-xl font-semibold mt-4 ">
              Greenfield Ocean Race Project Achieves X% Feasibility Milestone
            </h2>
            <p className="mt-4">
              Formulated a feasibility model for a sports and event management
              company for launch of a greenfield ocean race initiative in Saudi
              Arabia...
            </p>
            <div className="flex justify-between mt-8 items-center">
              <button
                className="bg-red-100 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full"
                onClick={() => navigate("/insights/casestudies")}
              >
                Start Ups
              </button>
              <a
                href="#"
                className="text-red-600 hover:text-blue-900 flex items-center mr-6 py-1"
                onClick={() => navigate("/insights/casestudies")}
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
          <div className="md:mt-16 mb-4">
            <img src={CaseStudy2} alt="Case Study 2" className="w-full" />
            <h2 className="text-xl font-semibold mt-4">
              Heritage Site Financial Feasibility Unveils Lucrative Potential:
              Over 1,000 Real Estate Assets Spanning Multiple Sectors
            </h2>
            <p className="mt-4">
              Engineered a Robust Financial Model for a UNESCO Heritage Site
              through Feasibility Analysis of over 1,000 Real Estate Assets in
              a, spanning multiple sectors (Read More….)
            </p>
            <div className="flex justify-between mt-8 items-center">
              <button
                className="bg-red-100 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full"
                onClick={() => navigate("/insights/casestudieed")}
              >
                Real Estate
              </button>
              <a
                href="#"
                className="text-red-600 hover:text-blue-900 flex items-center mr-6 py-1"
                onClick={() => navigate("/insights/casestudieed")}
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
          <div className="mb-4">
            <img src={CaseStudy3} alt="Case Study 3" className="w-full" />
            <h2 className="text-xl font-semibold mt-4">
              From Concept to Capital: How an Innovative F&B E-Commerce and
              FinTech Startup Raised $xxx Million
            </h2>
            <p className="mt-4">
              Crafted an Investor Memorandum and Financial Model to propel
              Fundraising Efforts for an Innovative F&B E-Commerce and FinTech
              Startup in KSA
            </p>
            <div className="flex justify-between mt-8 items-center">
              <button
                className="bg-red-100 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full"
                onClick={() => navigate("/insights/casestudy6")}
              >
                Start Ups
              </button>
              <a
                href="#"
                className="text-red-600 hover:text-blue-900 flex items-center mr-6  py-1"
                onClick={() => navigate("/insights/casestudy6")}
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
          <div className="md:mt-16 mb-4">
            <img src={CaseStudy4} alt="Case Study 4" className="w-full" />
            <h2 className="text-xl font-semibold mt-4">
              Strategic Investment Spark: From IPO Dreams to Multibillion-Dollar
              Reality, a Fund's Multifold Exit Triumph
            </h2>
            <p className="mt-4">
              Assisting a New York Hedge Fund in analyzing and investing in an
              E-Betting Platform, leading to a multibillion-dollar IPO and
              resulting in a multifold exit for the fund
            </p>
            <div className="flex justify-between mt-8 items-center">
              <button
                className="bg-red-100 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full"
                onClick={() => navigate("/insights/casestudy4")}
              >
                Hedge Fund
              </button>
              <a
                href="#"
                className="text-red-600 hover:text-blue-900 flex items-center mr-6"
                onClick={() => navigate("/insights/casestudy4")}
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
      </div>
    </div>
  );
}
