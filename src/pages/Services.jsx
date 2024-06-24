import Footer from "../components/FooterSection";
import Navbar from "../components/Navbar";
import ServiceImage from "../assets/insite.png";
import ServiceBuilding from "../assets/ServiceBuilding.png";
import ServiceBuilding2 from "../assets/servicebuilding2.png";
import ServiceBuilding3 from "../assets/servicebuilding3.png";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import ContactUs from "../components/ContactUs";
import Services from "../section/Services";
import SucessStories from "../components/SucessStories";
import servicesbg from "../assets/servicesbg.png";

export default function MainServices() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      title: "Corporates",
      content:
        "We work with corporations to solve their most pressing problems, from strategic planning to enhancing operational efficiency, helping them stay agile and competitive in today’s dynamic business landscape.",
    },
    {
      title: "Sovereign Wealth Funds and Governments",
      content:
        " Sovereign Wealth Funds aim at economic development and diversification for the country while ensuring financial returns. Artevis Consulting understands these objectives and assists SWFs in creating investment strategies, conducting due diligence, providing fund support, and developing financial models. Governments focus on economic development and public infrastructure enhancement. We support these goals by delivering public policy advisory, infrastructure modelling, and urban development strategies.",
    },
    {
      title: "Asset Management Firms",
      content:
        " Asset Management Firms manage diverse portfolios requiring meticulous strategy and performance monitoring. Artevis Consulting offers portfolio monitoring, financial modelling, and investment strategy formulation.",
    },
    {
      title: "HNIs",
      content:
        " High Net Worth Individuals seek personalized wealth management and investment strategies. Artevis Consulting offers tailored portfolio assessments, wealth preservation strategies, and real estate investment advisory.",
    },
    {
      title: "Private Equity & Venture Capital",
      content:
        " Private Equity and Venture Capital firms invest in high-growth potential ventures. Our advisory extends through the entire spectrum of the investment lifecycle, from deal origination and due diligence to portfolio management and exit strategies. With a granular understanding of the intricacies involved in Private Equity and Venture Capital, we position ourselves as a pivotal ally for financial leaders.",
    },
    {
      title: "Investment Banks",
      content:
        " Investment Banks facilitate complex financial transactions and provide advisory services. Artevis Consulting supports these efforts by offering industry research, valuation, M&A support, fundraising assistance, and strategic insights to drive successful financial operations.",
    },
    {
      title: "Real Estate Firms",
      content:
        " Real Estate Firms require robust strategic insights to optimize their investments. Our expertise traverses the full real estate value chain, encompassing land acquisition, feasibility analysis, project development/investment, asset management, and strategic exits. Our intimate understanding of the real estate value chain positions us as the go-to resource for industry leaders.",
    },
    {
      title: "Hedge Funds",
      content:
        " Hedge Funds need in-depth market analysis and strategic investment insights. Artevis Consulting provides valuation, due diligence, and opportunity screening to enhance investment decision-making.",
    },
    {
      title: "Startups",
      content:
        " Startups need agile strategies and solid financial foundations to thrive in competitive markets. Artevis Consulting provides expert fundraising support, market strategies, business and financial planning, go to market strategies to drive growth and sustainability.",
    },
  ];

  return (
    <>
      <div
        className="bg-black text-white h-[110vh] md:h-[70vh] pb-10 mb-4 relative"
        style={{
          backgroundImage: `url(${servicesbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="sm:w-[90%] xl:w-[70%] w-[70%] py-8 px-3 bg-gray-100 min-h-fit text-black mt-20 flex flex-col gap-4 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-8 font-bold" style={{ color: "#CC2027" }}>
            Who we are
          </p>
          <h1 className="text-2xl md:text-4xl font-bold ml-4 sm:ml-8">
            Empower Businesses through Expertise and Support
          </h1>
          <p className="ml-4 sm:ml-8 pr-10 text-base sm:text-lg md:text-xl">
            Artevis Consulting is a pioneering offshore management consulting
            and investment advisory firm. Our mission is clear: to equip CXOs,
            Investment Teams, and board members with essential insights for
            strategic decision-making and long-term value creation.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto ml-3 md:ml-[3rem] px-4 py-20 sm:px-0">
        <h2 className="text-3xl font-semibold text-[#1E227F]">
          Core Service Offerings
        </h2>
        <p className="mt-4 text-zinc-600">
          At our consulting firm, our core service offerings are designed to
          empower businesses to thrive in today's dynamic landscape. From
          strategic planning and transformational leadership to market entry
          strategies and operational optimization, we provide tailored solutions
          that drive sustainable growth and success. With a focus on innovation,
          collaboration, and client-centricity, we partner with organizations to
          unlock their full potential, achieve their goals, and stay ahead of
          the competition.
        </p>
      </div>

      <div
        style={{ backgroundImage: `url(${ServiceBuilding})` }}
        className="bg-[#1E227F] text-white bg-no-repeat bg-right-bottom p-5 bg-cover lg:bg-contain"
      >
        <h1 className="text-[32px] font-[600] md:ml-[1.5rem] md:mt-3 md:mb-5 mb-4">
          Management Consulting
        </h1>
        <p className="text-[16px] mb-4 md:ml-[1.5rem] lg:mr-[33rem] ">
          Empower your business with our management consulting services,
          designed to maximize value through in-depth financial, economic, and
          strategic guidance. We specialize in crafting and implementing
          corporate strategies, business planning, go-to-market strategies, and
          strategy execution, ensuring your organization's objectives are met
          with precision and insight.
        </p>
        <div className="grid grid-cols-1 md:ml-[1.5rem] lg:mr-[30rem] md:grid-cols-3 gap-2">
          <ul className="text-sm lg:text-[16px]">
            <li className="pb-2">• Corporate & Business Strategy</li>
            <li className="pb-2">• Project Design & Development</li>
            <li className="pb-2">• Transformation & Expansion Strategy</li>
            <li className="pb-2">• Business Plans</li>
          </ul>
          <ul className="text-sm lg:text-[16px]">
            <li className="pb-2">• Business Process Consulting</li>
            <li className="pb-2">• Board Meeting Readiness and Support</li>
            <li className="pb-2">• Annual Operating Plans</li>
            <li className="pb-2">• HBU & Feasibility Studies</li>
          </ul>
          <ul className="text-sm lg:text-[16px]">
            <li className="pb-4">• Strategy Implementation Support</li>
          </ul>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${ServiceBuilding2})` }}
        className="bg-white text-black bg-no-repeat bg-left-bottom py-10 bg-cover lg:bg-contain"
      >
        <h1 className="text-[32px] lg:text-4xl lg:ml-[25rem] lg:mt-3 lg:mb-5 mb-4 text-[#1E227F] font-[600] mx-5">
          Investment Advisory
        </h1>
        <p className="text-[18px] md:text-base mb-4 lg:ml-[25rem] mx-5">
          Our investment advisory services are tailored to enhance business
          outcomes for Institutional Investors through an outsourced capacity
          model, providing meticulous planning and execution of strategic
          projects. We deliver end-to-end support across the deal cycle,
          encompassing research, due diligence, financial modeling, and PPM
          creation, ensuring comprehensive assistance through every facet of the
          investment process.
        </p>
        <div className="grid grid-cols-1 lg:ml-[25rem] md:grid-cols-3 gap-4 mx-5">
          <ul className="text-sm lg:text-[16px]">
            <li className="pb-2">• Transaction Support (IMs, Models)</li>
            <li className="pb-2">• Opportunity Screening and Analysis</li>
            <li className="pb-2">• Portfolio Monitoring & Reporting</li>
            <li className="pb-2">• Pitch Decks & Internal Presentations</li>
          </ul>
          <ul className="text-sm lg:text-[16px]">
            <li className="pb-2">• Investor Kit for fundraising</li>
            <li className="pb-2">• Fund Modeling & Manager Screening</li>
            <li className="pb-2">• Business & Asset Valuation</li>
            <li className="pb-2">• Company & Industry Research</li>
          </ul>
          <ul className="text-sm lg:text-[16px]">
            <li className="pb-2">• Data Room Management</li>
          </ul>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${ServiceBuilding3})` }}
        className="bg-red-600 text-white bg-no-repeat bg-right-bottom py-10 bg-cover lg:bg-contain"
      >
        <h1 className="text-[30px] lg:ml-10 lg:mt-3 lg:mb-5 mb-4 font-[600] mx-5">
          Business Analytics
        </h1>
        <p className="text-[16px] mb-4 lg:ml-10 lg:mr-[27rem] mx-5">
          Artevis Consulting specializes in Business Consultancy services
          tailored to meet the unique needs of each client. With a focus on
          delivering practical solutions and driving tangible results, we
          collaborate closely with businesses to identify opportunities for
          improvement and growth. From developing innovative strategies to
          optimizing operations, our team of experienced consultants is
          committed to helping businesses thrive in today's competitive
          landscape. Whether it's refining existing processes or exploring new
          market opportunities, we provide expert guidance every step of the
          way. Choose Artevis Consulting as your trusted partner in achieving
          sustainable success and realizing your business objectives.
        </p>
        <div className="grid grid-cols-3 lg:ml-10 lg:mr-[27rem] lg:grid-cols-3 gap-2 mx-5">
          <ul className="text-sm lg:text-[16px] mb-4 lg:mb-0">
            <li className="pb-2">• Data Engineering</li>
            <li className="pb-2">• Data Mining</li>
            <li className="pb-2">• Web Scraping</li>
            <li className="pb-2">• Big Data Analytics</li>
          </ul>
          <ul className="text-sm lg:text-[16px] mb-4 lg:mb-0">
            <li className="pb-2">• Descriptive Analytics</li>
            <li className="pb-2">• Prescriptive Analytics</li>
            <li className="pb-2">• Predictive Analytics</li>
            <li className="pb-2">• Business Intelligence</li>
          </ul>
          <ul className="text-sm lg:text-[16px]">
            <li className="pb-2">• Cloud Integration & Migration</li>
          </ul>
        </div>
      </div>

      <div className="  pb-4">
        <div className="  sm:px-10 py-24 px-5">


          <h2
            style={{ color: "#000F89" }}
            className="text-2xl font-semibold text-blue-900 mb-4"
          >
            Who do we cater to?
          </h2>
          <p className="text-zinc-600 mb-8">
            At Artevis, we work with organisations of different sizes,
            complexities and across industries. Our offerings are customised to
            meet the specific requirements across the following and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-lg font-semibold text-blue-900 flex justify-between items-center">
                  {section.title}
                  <span
                    className="cursor-pointer"
                    onClick={() => toggleSection(index)}
                  >
                    {expandedSections[index] ? (
                      <IoIosArrowUp className="text-blue-900" />
                    ) : (
                      <IoIosArrowDown className="text-blue-900" />
                    )}
                  </span>
                </h3>
                {expandedSections[index] && section.content && (
                  <p className="text-zinc-600 mt-2">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="sm:ml-[-6.3rem]">

        <SucessStories />
        </div>
      </div>
      <div className="md:ml-8">
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}
