import React from "react";
import MidImage from "../assets/middle.png";
import BottomLeft from "../assets/bottomfirst.png";
import BottomRight from "../assets/bottom third.png";

const RecentUpdates = () => {
  return (
    <>
      <div className="md:ml-40  md:mr-36 ml-8 mr-8">
        <div className="pb-4">
          <h1 className="text-3xl ml-3  font-bold pb-2 text-start">
            Recent Updates
          </h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5">
          <div style={{backgroundColor: "#1E227F"}} className="   md:h-46 text-white pt-10 md:ml-3 md:col-span-2">
            <h2 className="text-2xl font-bold mb-3 ml-10">
              News/Blog Headline
            </h2>
            <p className="ml-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className="relative">
              
              <img src={BottomLeft} alt="Abstract Art" className="mt-7  " />
              <div className="absolute inset-0 flex items-center md:mt-28 justify-center">
                <p>
                  <h2 className="text-2xl font-bold mb-3 ml-10">
                    News/Blog Headline
                  </h2>
                  <p className="ml-10">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div style={{backgroundColor: "#262738"}} className="  text-white  pb-6  h-full flex flex-col md:col-span-1">
              <img
                src={MidImage}
                alt="Abstract Shapes"
                className="md:mb-16 mb-6"
              />
              <h2 className="text-2xl ml-8 pt-1 font-bold mb-3">
                News/Blog Headline
              </h2>
              <p className="ml-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>

          <div style={{color: "#1E227F"}} className="bg-blue-100  md:mr-20 md:pt-3 pt-3 md:col-span-2">
            <h2 className="text-2xl font-bold mb-3 mt-5 ml-10 pb-">
              News/Blog Headline
            </h2>
            <p  className="ml-10  mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <img src={BottomRight} alt="Building" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentUpdates;
