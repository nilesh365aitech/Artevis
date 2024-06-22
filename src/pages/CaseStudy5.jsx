import { useState } from "react";
import Insightbg from "../assets/insightbg.png";
import Navbar from "../components/Navbar";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import ContactUs from "../components/ContactUs";
import Footer from "../components/FooterSection";
import Media from "../assets/media.png";
import SucessStories from "../components/SucessStories";

const CaseStudy5 = () => {
  const items = [
    {
      bgurl: CaseStudy1,
      title: "Greenfield Ocean Race Project Achieves X% Feasibility Milestone",
      description:
        "Formulated a feasibility model for a sports and event management company for launch of a greenfield ocean race initiative in Saudi Arabia...",
    },
    {
      bgurl: CaseStudy2,
      title:
        "From Concept to Capital: How an Innovative F&B E-Commerce and FinTech Startup Raised $xxx Million",
      description:
        "Crafted an Investor Memorandum and Financial Model to propel Fundraising Efforts for an Innovative F&B E-Commerce and FinTech Startup in KSA",
    },
    {
      bgurl: CaseStudy3,
      title:
        "Strategic Investment Spark: From IPO Dreams to Multibillion-Dollar Reality, a Fund's Multifold Exit Triumph",
      description:
        "Assisting a New York Hedge Fund in analyzing and investing in an E-Betting Platform, leading to a multibillion-dollar IPO and resulting in a multifold exit for the fund",
    },
    {
      bgurl: CaseStudy4,
      title:
        "Expansion Strategy and Financial Plan for Healthcare Provider",
      description:
        "Developed a comprehensive expansion strategy and financial framework for a renowned regional healthcare provider in Jeddah, Saudi Arabia...",
    },
  ];

  return (
    <>
      <div
        className="bg-black text-white h-[80vh] md:h-[70vh] pb-10 mb-4 relative "
        style={{
          backgroundImage: `url(${Media})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="sm:w-[80%] w-[80%] lg:w-[70%] py-5 px-3  bg-white  min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold" style={{ color: "#FF6347" }}>
            Case Study
          </p>
          <h1 className="text-4xl mt-4 mb-6 font-semibold  ml-4 sm:ml-14 ">
            Expansion Strategy and Financial Plan for Healthcare Provider
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between  p-6 rounded-lg md:p-20 ">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-blue-900 :text-blue-400">
            Business Need
          </h2>
          <p className="mt-2 text-zinc-700 :text-zinc-300">
            The client, a leading entity in healthcare and dermatology within KSA, sought a comprehensive expansion strategy and a solid financial framework, aiming to fortify its market position and extend its reach across the nation.
          </p>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-10 border-t md:border-t-0 md:border-l border-zinc-200 :border-zinc-600">
          <h3 className="text-lg font-semibold text-red-600 :text-red-400">
            About the client
          </h3>
          <p className="text-zinc-900 :text-zinc-100 font-semibold">
            A renowned regional healthcare provider
          </p>
          <h3 className="mt-4 text-lg font-semibold text-red-600 :text-red-400">
            Location
          </h3>
          <p className="text-zinc-900 font-semibold ">Jeddah, Saudi Arabia</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">Vision Alignment</h2>
          <p>The client's vision and mission were defined and aligned with future aspirations in healthcare and dermatology.</p>
        </div>
        <div style={{ backgroundColor: "#EDF5F5" }} className="p-12 text-indigo-900">
          <h2 className="text-2xl font-semibold mb-2">Comprehensive Assessments</h2>
          <p>Internal operations were analyzed for strengths and weaknesses, while external assessments explored market trends, competition, and opportunities in KSA.</p>
        </div>
        <div style={{ backgroundColor: "#EDF5F5" }} className="text-indigo-900 p-12">
          <h2 className="text-2xl font-semibold mb-2">Milestone Planning and Bottleneck Identification</h2>
          <p>Expansion milestones were strategically planned, encompassing hiring, marketing, and branding, clinic land acquisition, and a Doctor Partnership Program. Potential obstacles to expansion were identified, and tailored strategies were developed to mitigate risks and facilitate growth.</p>
        </div>
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">Financial Modeling and Planning</h2>
          <p>The financial implications of all the above steps were considered, outlining the funding requirements, expected returns, and establishing timelines for implementation.</p>
        </div>
      </div>

      <div className="flex flex-col pt-20 md:flex-row justify-around items-center text-center space-y-4 md:space-y-0">
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">100%</p>
          <p className="text-zinc-700 :text-zinc-300">Market Reach Expansion</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">30%</p>
          <p className="text-zinc-700 :text-zinc-300">Operational Efficiency Improvement</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">20%</p>
          <p className="text-zinc-700 :text-zinc-300">Workforce Increase through Strategic Hiring</p>
        </div>
      </div>

      <div className="py-24 mb-20 bg-[#F0F3F8] p-6 rounded-lg mt-20">
        <h2 className="text-xl md:ml-9 md:mr-52 font-semibold text-blue-00 :text-blue-500">
          Outcome
        </h2>
        <p className="mt-4 md:ml-9 md:mr-52 text-zinc-800 :text-zinc-200">
          The client is on the path to achieving a well-defined strategic plan of financial stability, culminating in a seamless expansion across KSA and reinforcing its stature in the healthcare and dermatology sector. The strategic approach has set the stage for successful nationwide scaling, with a comprehensive expansion plan that incorporates a revised business model, optimized operations, strategic hiring plans, and targeted marketing strategies. This alignment with market opportunities and internal capabilities ensures a robust foundation for sustained growth and enhanced market presence.
        </p>
      </div>

      <SucessStories />
      <Footer />
    </>
  );
};

export default CaseStudy5;
