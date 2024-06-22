import Navbar from "../components/Navbar";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy14 from "../assets/Case Study 4.png";
import Footer from "../components/FooterSection";
import Media from "../assets/media.png";
import SucessStories from "../components/SucessStories";
import { useEffect } from "react";

const CaseStudy4 = () => {
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
      bgurl: CaseStudy14,
      title:
        "Strategic Investment Spark: From IPO Dreams to Multibillion-Dollar Reality, a Fund's Multifold Exit Triumph",
      description:
        "Assisting a New York Hedge Fund in analyzing and investing in an E-Betting Platform, leading to a multibillion-dollar IPO and resulting in a multifold exit for the fund",
    },
  ];
  useEffect(()=>{
    window.scrollTo(0,0)
  })
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
            Strategic Transformation for a National Real Estate Firm
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between  p-6 rounded-lg md:p-20 ">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-blue-900 :text-blue-400">
            Business Need
          </h2>
          <p className="mt-2 text-zinc-700 :text-zinc-300">
            Desiring a company transformation, the client, a real estate firm,
            sought a comprehensive strategy revamp across multiple sectors to
            enhance innovation, customer experience, and profitability.
          </p>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-10 border-t md:border-t-0 md:border-l border-zinc-200 :border-zinc-600">
          <h3 className="text-lg font-semibold text-red-600 :text-red-400">
            About the client
          </h3>
          <p className="text-zinc-900 :text-zinc-100 font-semibold">
            A national real estate conglomerate
          </p>
          <h3 className="mt-4 text-lg font-semibold text-red-600 :text-red-400">
            Location
          </h3>
          <p className="text-zinc-900 font-semibold ">Riyadh, Saudi Arabia</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">Current Assessment</h2>
          <p>
            Conducted a comprehensive assessment of the client’s existing
            business practices, performance metrics, and operational efficiency
            across all sectors.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className="p-12 text-indigo-900"
        >
          <h2 className="text-2xl font-semibold mb-2">Market Analysis</h2>
          <p>
            Undertook an extensive market analysis to identify potential
            opportunities and areas for growth and innovation within healthcare,
            hospitality, commercial, and residential sectors.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className="text-indigo-900 p-12"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Portfolio Benchmarking
          </h2>
          <p>
            Analyzed the client’s asset portfolio, comparing it against industry
            benchmarks to ascertain competitiveness and identify areas for
            improvement.
          </p>
        </div>
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">Strategic Positioning</h2>
          <p>
            Developed a clear Investment Policy Statement and refined the
            corporate positioning to align with the client’s aspirations of
            being a market leader and destination creator.
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-20 md:flex-row justify-around items-center text-center space-y-4 md:space-y-0">
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">10%</p>
          <p className="text-zinc-700 :text-zinc-300">
            Operating Margin Increase
          </p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">30%</p>
          <p className="text-zinc-700 :text-zinc-300">DSCR Improvement</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">20%</p>
          <p className="text-zinc-700 :text-zinc-300">Yield Increase</p>
        </div>
      </div>

      <div className="py-24 mb-20 bg-[#F0F3F8] p-6 rounded-lg mt-20">
        <h2 className="text-xl md:ml-9 md:mr-52 font-semibold text-blue-00 :text-blue-500">
          Outcome
        </h2>
        <p className="mt-4 md:ml-9 md:mr-52 text-zinc-800 :text-zinc-200">
          The client successfully leveraged the strategic plan to optimize
          operations, resulting in enhanced efficiency and increased
          profitability. The detailed five-year strategy, encompassing strategic
          pillars, clear objectives, timelines, Delegation of Authority (DOA),
          RACI matrix, and projected financial returns, guided the firm towards
          achieving its ambitious goals. The comprehensive approach ensured a
          robust alignment with market opportunities, driving significant
          improvements in customer experience and operational efficiency. This
          strategic transformation positioned the client as a premier
          destination creator in their market, fostering sustainable growth and
          long-term success.
        </p>
      </div>

      <SucessStories />
      <Footer />
    </>
  );
};

export default CaseStudy4;
