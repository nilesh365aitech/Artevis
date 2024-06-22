import { useEffect, useState } from "react";
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

const MidCaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
        "Strategic Investment Spark: From IPO Dreams to Multibillion-Dollar Reality, a Fund's Multifold Exit Triumph",
      description:
        "Assisting a New York Hedge Fund in analyzing and investing in an E-Betting Platform, leading to a multibillion-dollar IPO and resulting in a multifold exit for the fund",
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
            Driving USD 3 Bn Fundraise for an E-betting Platform
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between  p-6 rounded-lg md:p-20 ">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-blue-900 :text-blue-400">
            Business Need
          </h2>
          <p className="mt-2 text-zinc-700 :text-zinc-300">
            A New York-based hedge fund sought to invest in an emerging
            e-betting <br /> platform. Given the complexities of varied
            legalization landscapes across <br /> states, the client required
            meticulous due diligence and a robust <br /> valuation model to make
            an informed investment decision.
          </p>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-10 border-t md:border-t-0 md:border-l border-zinc-200 :border-zinc-600">
          <h3 className="text-lg font-semibold text-red-600 :text-red-400">
            About the client
          </h3>
          <p className="text-zinc-900 :text-zinc-100 font-semibold">
            Hedge fund for
            <br />
            E-betting platform
          </p>
          <h3 className="mt-4 text-lg font-semibold text-red-600 :text-red-400">
            Location
          </h3>
          <p className="text-zinc-900 font-semibold ">New York, USA</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap- mt-10">
        <div
          style={{ backgroundColor: "#151B8D" }}
          className="  text-white p-12"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Commercial Due Diligence
          </h2>
          <p>
            The initial phase involved an exhaustive assessment of the e-betting
            platform's market position, competitive landscape, growth potential,
            and operational capabilities. This comprehensive analysis aimed to
            understand the platform's strengths, weaknesses, opportunities, and
            threats within the rapidly evolving e-betting industry.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className=" p-12 text-indigo-900 "
        >
          <h2 className="text-2xl font-semibold mb-2">
            Financial Due Diligence
          </h2>
          <p>
            Rigorous financial analysis was conducted to scrutinize the
            platform's financial statements, cash flow, revenue streams, and
            cost structures. This step ensured the fiscal stability and
            transparency of the platform, highlighting its financial health and
            potential for sustainable growth.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className=" text-indigo-900 p-12"
        >
          <h2 className="text-2xl font-semibold mb-2">Valuation Model</h2>
          <p>
            A comprehensive valuation model was developed, integrating
            Discounted Cash Flow (DCF) and relative valuation techniques. This
            model was calibrated to account for the probabilities of betting
            legalization in various states, providing a nuanced analysis of the
            investment’s prospective worth. The valuation model incorporated
            various scenarios to reflect different legalization outcomes,
            ensuring a robust and flexible investment strategy.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#151B8D" }}
          className=" text-white p-12"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Investment and Tracking
          </h2>
          <p>
            The hedge fund facilitated a strategic investment in the e-betting
            platform, supported by the detailed due diligence and valuation
            model. A robust tracking mechanism was established to monitor the
            investment's performance, risks, and returns over time. This
            continuous monitoring allowed the hedge fund to make undefineddriven
            decisions and adjust strategies as needed.
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-20 md:flex-row justify-around items-center text-center space-y-4 md:space-y-0">
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">USD 3 bn</p>
          <p className="text-zinc-700 :text-zinc-300">Fund Raised</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">50+</p>
          <p className="text-zinc-700 :text-zinc-300">Clients Empowered</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">10+</p>
          <p className="text-zinc-700 :text-zinc-300">Countries served</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">$100+Bn</p>
          <p className="text-zinc-700 :text-zinc-300">Client AUM</p>
        </div>
      </div>

      <div className=" py-24 mb-20  bg-[#F0F3F8] p-6  rounded-lg mt-20">
        <h2 className="text-xl  md:ml-9 md:mr-52 font-semibold text-blue-00 :text-blue-500">
          Outcome
        </h2>
        <p className="mt-4  md:ml-9 md:mr-52 text-zinc-800 :text-zinc-200">
          Systematic evaluation of exit strategies and potential Return on
          Investment (ROI) was conducted <br /> throughout the investment
          period. This process involved regular reassessment of market
          conditions, performance metrics, and potential exit opportunities.
          Ultimately, this led to a well-informed decision-making process that
          culminated in a profitable multifold exit post-IPO.
        </p>
        <p className="mt-4 md:ml-9 md:mr-52 text-zinc-800 :text-zinc-200">
          This case study highlights the importance of thorough due diligence,
          robust financial analysis, and continuous performance monitoring in
          achieving successful investment outcomes in emerging markets. The
          strategic approach adopted by the hedge fund, supported by
          comprehensive commercial and financial due diligence, proved
          instrumental in realizing substantial returns on investment.
        </p>
      </div>

      <SucessStories />
      <Footer />
    </>
  );
};

export default MidCaseStudies;
