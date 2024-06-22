import React from "react";
import MidImage from "../assets/middle.png";
import BottomLeft from "../assets/bottomfirst.png";
import BottomRight from "../assets/bottom third.png";

const RecentUpdates = () => {
  return (
    <>
      <div className="">
        <div className="pb-4">
          <h1 className="text-3xl ml-3 font-semibold text-blue-900 pb-2 text-start">
            Recent Updates
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            style={{ backgroundColor: "#1E227F" }}
            className="text-white pt-11 pb-4"
          >
            <h2 className="text-xl font-semibold mb-3 ml-10">
              2024 Asset Management Trends: Future-Proofing Your Business and
              Commercial Model
            </h2>
            <p className="ml-10 relative">
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
                className="h-4 w-4 absolute bottom-[-3px] right-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </p>
            <div className="relative">
              <img
                src={BottomLeft}
                alt="Abstract Art"
                className="mt-4 w-full"
              />
            </div>
          </div>
          <div
            style={{ backgroundColor: "#262738" }}
            className="text-white pb-6 flex flex-col"
          >
            <img
              src={MidImage}
              alt="Abstract Shapes"
              className="mb-16 pb-2"
            />
            <h2 className="text-xl ml-4 pt-1 font-semibold mb-3">
              Factory of the Future: Transforming Manufacturing with Industry
              4.0 and AI
            </h2>
            <p className="ml-4 relative">
              New digital technologies can upgrade lean manufacturing,
              boosting performance and accelerating sustainability.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 absolute bottom-[-120px] right-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </p>
          </div>
          <div
            style={{ color: "#1E227F" }}
            className="bg-blue-100 pt-3"
          >
            <h2 className="text-xl font-semibold mb-3 mt-5 ml-10">
              Navigating Growth in Challenging Times: Maximizing Shareholder
              Value for Industrial Companies
            </h2>
            <p className="ml-10 mb-6 relative">
              Explore strategies for industrial companies to enhance shareholder
              value despite economic uncertainties and market challenges.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 absolute bottom-[-3px] right-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </p>
            <img
              style={{ height: "400px" }}
              src={BottomRight}
              alt="Building"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentUpdates;
