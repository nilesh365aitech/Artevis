import Navbar from "../components/Navbar";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import Footer from "../components/FooterSection";
import Media from "../assets/media.png";
import SucessStories from "../components/SucessStories";

const CaseStudy6 = () => {
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
      title: "Expansion Strategy and Financial Plan for Healthcare Provider",
      description:
        "Developed a comprehensive expansion strategy and financial framework for a renowned regional healthcare provider in Jeddah, Saudi Arabia...",
    },
    {
      bgurl: CaseStudy4,
      title: "Strategic Transformation for a National Real Estate Firm",
      description:
        "A national real estate conglomerate in Riyadh, Saudi Arabia, sought a comprehensive strategy revamp across multiple sectors to enhance innovation, customer experience, and profitability...",
    },
    {
      bgurl: CaseStudy4,
      title:
        "Fundraising Support and Investor Kit Creation for F&B Fintech Startup",
      description:
        "Supported a Fintech Startup specializing in the e-commerce space with fundraising efforts and investor kit creation in Saudi Arabia...",
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
            Fundraising Support and Investor Kit Creation for F&B Fintech
            Startup
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between  p-6 rounded-lg md:p-20 ">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-blue-900 :text-blue-400">
            Business Need
          </h2>
          <p className="mt-2 text-zinc-700 :text-zinc-300">
            A Fintech Startup specializing in the e-commerce space sought
            fundraising support and the creation of an investor kit in Saudi
            Arabia.
          </p>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-10 border-t md:border-t-0 md:border-l border-zinc-200 :border-zinc-600">
          <h3 className="text-lg font-semibold text-red-600 :text-red-400">
            About the client
          </h3>
          <p className="text-zinc-900 :text-zinc-100 font-semibold">
            A Fintech Startup specializing in the e-commerce space
          </p>
          <h3 className="mt-4 text-lg font-semibold text-red-600 :text-red-400">
            Location
          </h3>
          <p className="text-zinc-900 font-semibold ">Saudi Arabia</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">Market Analysis</h2>
          <p>
            An extensive evaluation of the F&B and FinTech sectors was conducted
            to determine the Total Addressable Market (TAM) in KSA, revealing
            the startup’s growth potential.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className="p-12 text-indigo-900"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Comprehensive Assessments
          </h2>
          <p>
            Internal operations were analyzed for strengths and weaknesses,
            while external assessments explored market trends, competition, and
            opportunities in KSA.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className="text-indigo-900 p-12"
        >
          <h2 className="text-2xl font-semibold mb-2">Valuation Efforts</h2>
          <p>
            Both Relative Valuation and Discounted Cash Flow (DCF) methods were
            employed to derive an accurate estimation of the startup’s worth.
          </p>
        </div>
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">Funding Strategy</h2>
          <p>
            Requirements for funding were clearly articulated, alongside a
            strategic plan for their utilization, ensuring alignment with the
            startup’s strategic objectives.
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-20 md:flex-row justify-around items-center text-center space-y-4 md:space-y-0">
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">25%</p>
          <p className="text-zinc-700 :text-zinc-300">
            Market potential analysis accuracy improvement
          </p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">35%</p>
          <p className="text-zinc-700 :text-zinc-300">
            Increase in Investor Interest
          </p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">20%</p>
          <p className="text-zinc-700 :text-zinc-300">
            Exceeded Startup Valuation Estimates
          </p>
        </div>
      </div>

      <div className="py-24 mb-20 bg-[#F0F3F8] p-6 rounded-lg mt-20">
        <h2 className="text-xl md:ml-9 md:mr-52 font-semibold text-blue-00 :text-blue-500">
          Outcome
        </h2>
        <p className="mt-4 md:ml-9 md:mr-52 text-zinc-800 :text-zinc-200">
          Utilizing the persuasive investor teaser and flexible financial model
          provided, the client successfully garnered investor interest and was
          in active conversation to secure substantial funding. The strategic
          market analysis and comprehensive assessments ensured a robust
          understanding of the startup’s potential, while the accurate valuation
          efforts and clear funding strategy positioned the client favorably in
          the eyes of potential investors. This approach facilitated a
          structured and efficient fundraising process, highlighting the
          startup’s resilience and potential for success, ultimately paving the
          way for significant growth and market penetration.
        </p>
      </div>

      <SucessStories />
      <Footer />
    </>
  );
};

export default CaseStudy6;
