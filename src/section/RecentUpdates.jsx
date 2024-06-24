import React from "react";
import MidImage from "../assets/middle.png";
import BottomLeft from "../assets/bottomfirst.png";
import BottomRight from "../assets/bottom third.png";

const RecentUpdates = () => {
  return (
    <>
      <div className="lg:mx-20 mx-4">
        <div className="pb-4">
          <h1 className="text-3xl ml-3 font-semibold text-blue-900 pb-2 text-start">
            Recent Updates
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
          <div
            style={{ backgroundColor: "#1E227F" }}
            className="md:h-42 text-white pt-11 md:ml-3 md:col-span-2 relative"
          >
            <h2 className="text-xl font-semibold mb-3 ml-10 pr-4">
              2024 Asset Management Trends: Future-Proofing Your Business and
              Commercial Model
            </h2>
            <p className="ml-10 pr-4">
              Examine important developments in asset management, provide
              insights into the key trends and derive recommendations on how
              asset managers need to position themselves to be successful and
              profitable in the long run.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 absolute bottom-3 right-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </p>
            <img
              src={BottomLeft}
              alt="Abstract Art"
              className="mt-4 w-fit h-fit object-cover"
            />
          </div>
          <div>
            <div
              style={{ backgroundColor: "#262738" }}
              className="text-white pb-6 h-full flex flex-col md:col-span-1"
            >
              <img
                src={MidImage}
                alt="Abstract Shapes"
                className="mb-4 w-full h-64 object-cover"
              />
              <h2 className="text-xl ml-4 pt-1 font-semibold mb-3 pr-4">
                Factory of the Future: Transforming Manufacturing with Industry
                4.0 and AI
              </h2>
              <p className="ml-4 pr-4 relative">
                New digital technologies can upgrade lean manufacturing,
                boosting performance and accelerating sustainability.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 absolute bottom-3 right-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div
            style={{ color: "#1E227F" }}
            className="bg-blue-100 md:mr-40 pt-3 md:col-span-2 relative"
          >
            <h2 className="text-xl font-semibold mb-3 mt-5 ml-10 pr-4">
              Navigating Growth in Challenging Times: Maximizing Shareholder
              Value for Industrial Companies
            </h2>
            <p className="ml-10 mb-6 pr-4 flex relative">
              Explore strategies for industrial companies to enhance shareholder
              value despite economic uncertainties and market challenges.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 absolute bottom-3 right-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </p>
            <img
              src={BottomRight}
              alt="Building"
              className="w-fit h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentUpdates;
