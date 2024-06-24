
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
            Feasibility Analysis for a one of its kind Ocean Race Event            </h2>
            <p className="mt-4">
              Formulated a feasibility model for a sports and event management
              company for launch of a greenfield...
            </p>
            <div className="flex justify-between mt-8 items-center">
              <button
                className="bg-red-100 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full"
                onClick={() => navigate("/insights/casestudies")}
              >
                Start Ups
              </button>
              <Link
                to={"/insights/casestudy3"}
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
              </Link>
            </div>
          </div>
          <div className="md:mt-16 mb-4">
            <img src={CaseStudy2} alt="Case Study 2" className="w-full" />
            <h2 className="text-xl font-semibold mt-4">
            Strategic Transformation for a National Real Estate Firm
            </h2>
            <p className="mt-4">
            Desiring a company transformation, the client, a real estate firm, sought a comprehensive strategy revamp...
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
            Expansion Strategy and Financial Plan for Healthcare Provider
            </h2>
            <p className="mt-4">
            The client, a leading entity in healthcare and dermatology within KSA, sought a comprehensive expansion strategy...
            </p>
            <div className="flex justify-between mt-8 items-center">
              <button
                className="bg-red-100 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full"
                onClick={() => navigate("/insights/casestudy6")}
              >
                Start Ups
              </button>
              <Link
                to={"/insights/casestudy5"}
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
              </Link>
            </div>
          </div>
          <div className="md:mt-16 mb-4">
            <img src={CaseStudy4} alt="Case Study 4" className="w-full" />
            <h2 className="text-xl font-semibold mt-4">
            Enabling Investment in E-Betting Platform Leading to Multibillion-Dollar IPO
            </h2>
            <p className="mt-4">
            The client, a New York-based hedge fund, required meticulous due diligence and a robust valuation model...
            </p>
            <div className="flex justify-between mt-8 items-center">
              <button
                className="bg-red-100 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full"
                onClick={() => navigate("/insights/casestudy4")}
              >
                Hedge Fund
              </button>
              <Link
              to={"/insights/casestudy3"}
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
