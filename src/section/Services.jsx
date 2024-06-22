import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Services() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { title: "Corporates", content: "We work with corporations to solve their most pressing problems, from strategic planning to enhancing operational efficiency, helping them stay agile and competitive in today’s dynamic business landscape." },
    { title: "Sovereign Wealth Funds and Governments", content: " Sovereign Wealth Funds aim at economic development and diversification for the country while ensuring financial returns. Artevis Consulting understands these objectives and assists SWFs in creating investment strategies, conducting due diligence, providing fund support, and developing financial models. Governments focus on economic development and public infrastructure enhancement. We support these goals by delivering public policy advisory, infrastructure modelling, and urban development strategies." },  
    { title: "Asset Management Firms", content: " Asset Management Firms manage diverse portfolios requiring meticulous strategy and performance monitoring. Artevis Consulting offers portfolio monitoring, financial modelling, and investment strategy formulation." },
    { title: "HNIs", content: " High Net Worth Individuals seek personalized wealth management and investment strategies. Artevis Consulting offers tailored portfolio assessments, wealth preservation strategies, and real estate investment advisory." },
    { title: "Private Equity & Venture Capital", content: " Private Equity and Venture Capital firms invest in high-growth potential ventures. Our advisory extends through the entire spectrum of the investment lifecycle, from deal origination and due diligence to portfolio management and exit strategies. With a granular understanding of the intricacies involved in Private Equity and Venture Capital, we position ourselves as a pivotal ally for financial leaders." },
    { title: "Investment Banks", content: " Investment Banks facilitate complex financial transactions and provide advisory services. Artevis Consulting supports these efforts by offering industry research, valuation, M&A support, fundraising assistance, and strategic insights to drive successful financial operations." },
    { title: "Real Estate Firms", content: " Real Estate Firms require robust strategic insights to optimize their investments. Our expertise traverses the full real estate value chain, encompassing land acquisition, feasibility analysis, project development/investment, asset management, and strategic exits. Our intimate understanding of the real estate value chain positions us as the go-to resource for industry leaders." },
    { title: "Hedge Funds", content: " Hedge Funds need in-depth market analysis and strategic investment insights. Artevis Consulting provides valuation, due diligence, and opportunity screening to enhance investment decision-making." },
    { title: "Startups", content: " Startups need agile strategies and solid financial foundations to thrive in competitive markets. Artevis Consulting provides expert fundraising support, market strategies, business and financial planning, go to market strategies to drive growth and sustainability." }
  ];

  return (
    <>

      <div className=" pb-4">

      <div className="  px-6 sm:px-16 sm:py-24 bg-[#F5F6F8]">

        <h2 style={{color: "#000F89"}} className="text-2xl font-semibold text-blue-900 mb-4">Who do we cater to?</h2>
        <p className="text-zinc-600 mb-8">
          At Artevis, we work with organisations of different sizes, complexities
          and across industries. Our offerings are customised to meet the
          specific requirements across the following and more.
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
      </div>
    </>
  );
}
