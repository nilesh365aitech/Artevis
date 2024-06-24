import React, { useState, useEffect } from "react";
import bgOurFootprint from "../assets/bgOurFootprint.png";
import Navbar from "../components/Navbar";
import MapImage from "../assets/fp.png";
import RecentUpdates from "../section/RecentUpdates";
import ContactUs from "../components/ContactUs";
import Footer from "../components/FooterSection";
import country1 from "../assets/country1.png";
import country2 from "../assets/country2.png";
import country3 from "../assets/country3.png";
import country4 from "../assets/country4.png";
import SucessStories from "../components/SucessStories";

const Industries = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regionContent = {
    "North America": (
      <div>
        <h1 className="text-[#E84140] text-[20px] font-bold mb-1">
          North America{" "}
        </h1>
        <p className="text-[#1E227F] mb-4">
          Artevis Consulting has been instrumental in various high-impact
          ventures across diverse industries
        </p>
        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">E-betting IPO Success:</h2>
            <p>
              Advised a hedge fund on an e-betting IPO, resulting in a $3.0
              billion success.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Ride-Hailing Venture Expansion</h2>
            <p>
              Developed expansion strategies and conducted valuations for a
              ride-hailing venture, contributing to its growth trajectory.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Capital Raise Facilitation</h2>
            <p>
              Facilitated a $50.0 million capital raise for the Chief Financial
              Officer of a ride-hailing company, enhancing its financial
              capabilities.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">SaaS M&A Oversight</h2>
            <p>
              Provided due diligence and fund oversight for Software as a
              Service (SaaS) mergers and acquisitions, managing over $150
              million in Assets Under Management (AUM).
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">
              Investment Strategy in Shipping Sector
            </h2>
            <p>
              Advised a New York hedge fund on investment strategies in the
              shipping sector in light of IMO 2020 regulations.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">AI and ML Series C Diligence</h2>
            <p>
              Conducted diligence for a Middle Market Private Equity firm's
              Series C investment in Artificial Intelligence and Machine
              Learning technologies.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Pharma Valuation and Analysis</h2>
            <p>
              Conducted valuation and analysis for an orphan drug company in the
              pharmaceutical sector.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Middle Market PE Deal Support</h2>
            <p>
              Provided support for technology and healthcare deals for a Middle
              Market Private Equity firm.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">
              Financial Modeling for Cable Operator
            </h2>
            <p>
              Developed financial models for equity assessment of a cable
              operator in the United States.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Oil and Gas Investment Thesis</h2>
            <p>
              Contributed to the development of a $100 billion investment thesis
              for an oil and gas company.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">
              Aquaculture and Shipping Due Diligence
            </h2>
            <p>
              Conducted due diligence for a $30 million aquaculture investment
              and a $50 million credit facility for a shipping firm.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Solar Farm Transaction</h2>
            <p>
              Provided M&A due diligence for a $125 million transaction
              involving a solar farm in Texas.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Healthcare Investment Monitoring</h2>
            <p>
              Monitored healthcare investments for medical services in Michigan,
              ensuring optimal performance.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Health-Focused PE Advisory</h2>
            <p>
              Provided investment advisory services for a Private Equity firm
              focused on the healthcare sector.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">F&B Portfolio Monitoring</h2>
            <p>
              Monitored the portfolio of franchise operations in the Food and
              Beverage sector across the United States, ensuring strategic
              alignment and performance optimization.
            </p>
          </div>
        </div>
      </div>
    ),
    Europe: (
      <div>
        <h1 className="text-[#E84140] text-[20px] font-bold mb-1">Europe </h1>
        <p className="text-[#1E227F] mb-4">
          Artevis Consulting has been instrumental in various high-impact
          ventures across diverse industries
        </p>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">E-betting IPO Success:</h2>
            <p>
              Advised a hedge fund on an e-betting IPO, resulting in a $3.0
              billion success.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Ride-Hailing Venture Expansion</h2>
            <p>
              Developed expansion strategies and conducted valuations for a
              ride-hailing venture, contributing to its growth trajectory.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Capital Raise Facilitation</h2>
            <p>
              Facilitated a $50.0 million capital raise for the Chief Financial
              Officer of a ride-hailing company, enhancing its financial
              capabilities.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">SaaS M&A Oversight</h2>
            <p>
              Provided due diligence and fund oversight for Software as a
              Service (SaaS) mergers and acquisitions, managing over $150
              million in Assets Under Management (AUM).
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">
              Investment Strategy in Shipping Sector
            </h2>
            <p>
              Advised a New York hedge fund on investment strategies in the
              shipping sector in light of IMO 2020 regulations.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">AI and ML Series C Diligence</h2>
            <p>
              Conducted diligence for a Middle Market Private Equity firm's
              Series C investment in Artificial Intelligence and Machine
              Learning technologies.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Pharma Valuation and Analysis</h2>
            <p>
              Conducted valuation and analysis for an orphan drug company in the
              pharmaceutical sector.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Middle Market PE Deal Support</h2>
            <p>
              Provided support for technology and healthcare deals for a Middle
              Market Private Equity firm.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">
              Financial Modeling for Cable Operator
            </h2>
            <p>
              Developed financial models for equity assessment of a cable
              operator in the United States.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Oil and Gas Investment Thesis</h2>
            <p>
              Contributed to the development of a $100 billion investment thesis
              for an oil and gas company.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">
              Aquaculture and Shipping Due Diligence
            </h2>
            <p>
              Conducted due diligence for a $30 million aquaculture investment
              and a $50 million credit facility for a shipping firm.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Solar Farm Transaction</h2>
            <p>
              Provided M&A due diligence for a $125 million transaction
              involving a solar farm in Texas.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Healthcare Investment Monitoring</h2>
            <p>
              Monitored healthcare investments for medical services in Michigan,
              ensuring optimal performance.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Health-Focused PE Advisory</h2>
            <p>
              Provided investment advisory services for a Private Equity firm
              focused on the healthcare sector.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">F&B Portfolio Monitoring</h2>
            <p>
              Monitored the portfolio of franchise operations in the Food and
              Beverage sector across the United States, ensuring strategic
              alignment and performance optimization.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">PE Portfolio Management</h2>
            <p>
              Provided portfolio management services for a London-based Private
              Equity firm, specializing in the Pharmaceuticals sector, to
              optimize their investment strategies and enhance returns.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Global Bank Valuation</h2>
            <p>
              Conducted comprehensive valuation and financial analysis of a
              global bank for a hedge fund, facilitating informed investment
              decisions and risk management strategies.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Credit Union Risk Planning</h2>
            <p>
              Advised Ireland's largest credit union on business model
              optimization and risk planning, ensuring sustainable growth and
              regulatory compliance amidst dynamic market conditions.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Aluminum Manufacturer Strategy</h2>
            <p>
              Conducted valuation and devised strategic initiatives for an
              aluminum manufacturer on behalf of a hedge fund, enabling informed
              investment decisions and value creation opportunities.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Diesel Gate Legal Claim Finance</h2>
            <p>
              Provided advisory services to a hedge fund on legal claim finance
              related to the Dieselgate scandal, offering insights into
              potential risks and opportunities associated with the litigation.
            </p>
          </div>
        </div>
      </div>
    ),
    "Saudi Arabia": (
      <div>
        <h1 className="text-[#E84140] text-[20px] font-bold mb-1">
          Saudi Arabia{" "}
        </h1>
        <p className="text-[#1E227F] mb-4">
          Artevis Consulting has been instrumental in various high-impact
          ventures across diverse industries
        </p>

        <div className="flex flex-col text-md gap-2">
          <div>
            <h2 className="font-semibold">
              Corporate Strategy and Transformation
            </h2>
            <p>
              Crafted a visionary strategy for a Sovereign Wealth Fund (SWF)
              subsidiary managing a UNESCO site, preserving cultural heritage
              while ensuring financial sustainability.
            </p>
          </div>
          <div>
            <p>
              Revamped the 5-Year Strategic Plan of a prominent Riyadh-based
              Real Estate Firm, optimizing operations and enhancing market
              competitiveness.
            </p>
          </div>
          <div>
            <p>
              Guided a client's evolution into a Real Estate (RE) developer
              through strategic implementation support, facilitating seamless
              transition and growth.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Investment and Financial Advisory</h2>
            <p>
              Executed Pre-IPO Planning and Valuation for a Riyadh Real Estate
              Firm, optimizing capital structure and enhancing investor appeal.
            </p>
          </div>
          <div>
            <p>
              Empowered a $700.0 billion SWF subsidiary to raise $1.2 billion
              through strategic business planning, unlocking new avenues for
              growth and investment.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-md gap-2">
          <div>
            <h2 className="font-semibold">Market Entry and Expansion</h2>
            <p>
              Formulated a comprehensive Market Entry Business Plan for a
              PropTech Platform, securing CMA approval and facilitating
              successful market penetration.
            </p>
          </div>
          <div>
            <p>
              Designed a Nationwide Expansion and Financial Plan for a
              burgeoning Healthcare Provider, enabling scalable growth and
              enhanced service delivery.
            </p>
          </div>
          <div>
            <p>
              Enabled the setup of a pivotal pharmaceutical plant worth $400
              million by formulating strategic business plans and investment
              collateral.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">Project and Operations Management</h2>
            <p>
              Managed an Enterprise Project Management Office (EPMO) for an $8.0
              billion client, synchronizing projects with corporate goals and
              enhancing operational efficiency.
            </p>
          </div>
          <div>
            <p>
              Directed a Strategic Management Office (SMO) for a $5.0 billion
              client, bolstering strategic frameworks and risk management
              practices.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-md">
          <div>
            <h2 className="font-semibold">
              Feasibility Studies and Business Planning
            </h2>
            <p>
              Developed a robust Feasibility Model for a Greenfield Ocean Race
              Sports Initiative, evaluating market potential and strategic
              positioning.
            </p>
          </div>
          <div>
            <p>
              Conducted a Financial Feasibility Study for the Redevelopment of a
              UNESCO Heritage Site, ensuring viability and sustainability of the
              project.
            </p>
          </div>
        </div>
      </div>
    ),

    GCC: (
      <div>
        <h1 className="text-[#E84140] text-[20px] font-bold mb-1">GCC </h1>
        <p className="text-[#1E227F] mb-4">
          Artevis Consulting has been instrumental in various high-impact
          ventures across diverse industries
        </p>

        <div className="flex flex-col text-md gap-1">
          <div>
            <h2 className="font-semibold">UNESCO Site Financial Strategy</h2>
            <p>
              Crafted a robust financial strategy for a subsidiary of a $700
              billion Sovereign Wealth Fund (SWF), ensuring sustainable growth
              and preservation of cultural heritage at UNESCO sites.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">
              Real Estate Firm Strategic Overhaul
            </h2>
            <p>
              Led a comprehensive 5-year strategic overhaul for a $1.3 billion
              real estate firm, optimizing operations and enhancing market
              competitiveness.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">
              Greenfield Ocean Race Initiative Feasibility
            </h2>
            <p>
              Conducted feasibility analysis for a pioneering ocean race sports
              initiative, evaluating market potential and strategic positioning
              for successful implementation.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">
              Healthcare Provider Expansion Strategy
            </h2>
            <p>
              Developed expansion and financial strategies for a healthcare
              provider, enabling seamless growth and enhanced service delivery
              across diverse geographies.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">PropTech Platform Market Entry</h2>
            <p>
              Devised a market entry plan including CMA (Capital Market
              Authority) approval for a PropTech platform, facilitating a smooth
              entrance into the market and regulatory compliance.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">
              Riyadh Real Estate Pre-IPO Planning
            </h2>
            <p>
              Provided pre-IPO planning and valuation services for a
              Riyadh-based real estate firm, optimizing capital structure and
              enhancing investor appeal.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">
              Enterprise Project Management Office (EPMO) Implementation
            </h2>
            <p>
              Implemented an Enterprise Project Management Office (EPMO) for an
              $8 billion client, ensuring alignment and efficiency in corporate
              projects and initiatives.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">
              Pharma Plant Setup and Funding Strategy
            </h2>
            <p>
              Orchestrated the setup of a $400 million pharmaceutical plant,
              including business plan development and funding strategy, enabling
              seamless execution and sustainable growth in the pharmaceutical
              sector.
            </p>
          </div>
        </div>
      </div>
    ),
  };

  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clientAUM, setClientAUM] = useState(0);

  useEffect(() => {
    const incrementValues = (target, setter, incrementSpeed) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value < target) {
          value += 1;
          setter(value);
        } else {
          clearInterval(interval);
        }
      }, incrementSpeed);
    };

    incrementValues(10, setExperience, 100);
    incrementValues(50, setClients, 50);
    incrementValues(10, setCountries, 150);
    incrementValues(100, setClientAUM, 30);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(incrementValues);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center w-full h-80 md:h-96 lg:h-144 flex items-center justify-start"
        style={{ backgroundImage: `url(${bgOurFootprint})`, height: "34rem" }}
      >
        <div className="relative p-4 sm:p-12 opacity-90 bg-gradient-to-r from-zinc-100 via-purple-100 to-pink-100 sm:w-[90%] xl:w-[70%] w-[80%] ml-0 mx-4">
          <div className="text-red-600 text-lg font-semibold mb-2">
            Our Footprint
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Expanding Horizons Globally
          </h1>
          <p className="text-blue-800 text-lg">
            We have created impact with 50+ clients across 4 continents, by
            delivering services to customer delight.
          </p>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-600"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly items-center px-4 py-14 bg-white gap-5 sm:gap-0">
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            {experience}+
          </p>
          <p className="text-xs ml-3 sm:ml-0 sm:text-lg md:text-xl lg:text-2xl">
            Years of Experience
          </p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            {clients}+
          </p>
          <p className="text-xs ml-2 sm:ml-0 sm:text-lg md:text-xl lg:text-2xl">
            Clients Empowered
          </p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            {countries}+
          </p>
          <p className="text-xs mr-4 sm:mr-0 sm:text-lg md:text-xl lg:text-2xl">
            Countries Served
          </p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-3xl">
            ${clientAUM}Bn+
          </p>
          <p className="text-xs mr-4 sm:mr-0 sm:text-lg md:text-xl lg:text-2xl">
            Client AUM
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden bg-zinc-100 :bg-zinc-900">
        <img src={MapImage} alt="World Map" className="w-full h-auto" />
        <div
          className="absolute left-[23%] top-[35%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3 cursor-pointer"
          onClick={() => setSelectedRegion("North America")}
        >
          <img
            src={country1}
            alt="North America"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black :text-white">North America</span>
        </div>
        <div
          className="absolute left-[48%] top-[27%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3 cursor-pointer"
          onClick={() => setSelectedRegion("Europe")}
        >
          <img src={country2} alt="Europe" className="w-6 h-6 rounded-full" />
          <span className="text-black :text-white">Europe</span>
        </div>
        <div
          className="absolute left-[52%] top-[39%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3 cursor-pointer"
          onClick={() => setSelectedRegion("Saudi Arabia")}
        >
          <img
            src={country3}
            alt="Saudi Arabia"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black :text-white">Saudi Arabia</span>
        </div>
        <div
          className="absolute left-[71%] top-[41%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3 cursor-pointer"
          onClick={() => setSelectedRegion("GCC")}
        >
          <img src={country4} alt="GCC" className="w-6 h-6 rounded-full" />
          <span className="text-black :text-white">GCC</span>
        </div>
      </div>
      {selectedRegion && (
        <div
          className={`fixed right-0 top-0 w-[60%]  sm:w-1/3 h-full bg-white :bg-zinc-900 p-6 overflow-auto z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            selectedRegion ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-black font-bold text-xl :text-white"
            onClick={() => setSelectedRegion(null)}
          >
            X
          </button>
          <div className="mt-10">{regionContent[selectedRegion]}</div>
        </div>
      )}
<SucessStories/>
      <div className=" mt-6 md:ml-20 ">
        <RecentUpdates />
        <div className="">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Industries;
