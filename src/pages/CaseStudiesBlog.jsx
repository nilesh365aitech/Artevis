import React from "react";
import AboutUsbg from "../assets/AboutUsbg.png";
import Navbar from "../components/Navbar";
import Case1 from "../assets/case1.png";
import Case2 from "../assets/case2.png";
import Case0 from "../assets/case0.png";
import stats from "../assets/stats.png";
import blog from "../assets/blog.png";
import Gautam from "../assets/profile1.png";
import SUraj from "../assets/profile2.png";
const CaseStudiesBlog = () => {
  return (
    <div>
      <div
        className="bg-black text-white h-[100vh] md:h-[70vh] pb-10 mb-4 relative "
        style={{
          backgroundImage: `url(${AboutUsbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="sm:w-[50%] w-[70%] py-5 px-3  bg-white  min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold" style={{ color: "#FF6347" }}>
            Insights
          </p>
          <h1 className="text-4xl font-bold  ml-4 sm:ml-14 ">
            {" "}
            Building Green Foundations: The impact of sustainable practices in
            global real estate
          </h1>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col gap-5 w-[28%] p-4">
          {/* //leftside */}
          <div className="flex flex-col gap-2">
            <img alt="pic" src={Case0}></img>
            <p className="text-black text-lg">
              Hedge fund for E-betting platform Growth Acceleration
            </p>
            <a className="text-red-500 text-sm font-semibold cursor-pointer">
              Read More
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <img alt="pic" src={Case1}></img>
            <p className="text-black text-lg">
              Hedge fund for E-betting platform Growth Acceleration
            </p>
            <a className="text-red-500 text-sm font-semibold cursor-pointer">
              Read More
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <img alt="pic" src={Case2}></img>
            <p className="text-black text-lg">
              Hedge fund for E-betting platform Growth Acceleration
            </p>
            <a className="text-red-500 text-sm font-semibold cursor-pointer">
              Read More
            </a>
          </div>
        </div>
        <div className="  w-full py-16 px-10">
          <p className="text-lg font-semibold ">
            Exploring the increasing importance of sustainability in the real
            estate sector, referencing examples from around the globe
          </p>
          <div className="flex flex-col gap-5 mt-6">
            <p>by Suraj Nayak and Gautam Chhabra</p>
            <p>April 15, 2024 12:44 PM GST</p>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <p>
              Sustainable real estate practices offer a dual advantage: they
              significantly reduce environmental impact while delivering
              measurable financial benefits and reducing risks for stakeholders
              in the real estate sector. In the realm of real estate,
              sustainability has transitioned from a niche interest to a central
              strategy for developers, investment managers, and government
              advisors.
            </p>
            <p>
              The global shift towards sustainable practices, underscored by
              setting recommended greenhouse gas (GHG) emissions targets, is
              driven not solely by environmental consciousness but also by the
              tangible financial benefits and risk mitigation advantages
              sustainable projects offer. This article explores the interplay
              between technical innovation in sustainable real estate and its
              financial implications, with notable examples from the Middle
              East, the United States, and India.
            </p>
            <p>
              The surge in sustainable development is largely driven by three
              factors: government regulations, consumer demands, and operational
              efficiencies. Governments are under increasing socio-economic
              pressure to incentivise green initiatives across all sectors.
              Meanwhile, Millennials, Gen Z, and Gen Alpha are acutely aware of
              environmental degradation from unsustainable practices and are
              willing to support green living financially.
            </p>
          </div>
          <div className="w-full bg-center bg-cover">
            <img src={stats} className="w-full bg-cover bg-center"></img>
          </div>
          <div className="flex flex-col gap-6">
            <p>
              Lastly, as green technologies advance, a fundamental shift towards
              improved profitability is observed among operators and developers
              through innovative green practices.
            </p>
            <p>
              Adopting green practices in real estate is both an ethical
              commitment to the environment and a strategic business decision
              offering significant benefits. In today’s competitive market, a
              sustainability-focused outlook on real assets can lead to reduced
              operational costs through enhancements in building ventilation,
              lighting, electricity usage, and architectural design. This
              approach not only results in cost-effective operations and
              healthier work environments but also strengthens the brand
              reputation and increases occupancy rates due to the demand for
              energy-efficient and sustainable buildings.
            </p>
            <p>
              Some of the aforementioned advantages have been already realised
              as seen from the following examples from around the world.
            </p>
            <p>
              Projects like The Sustainable City in Dubai and Masdar City in Abu
              Dhabi demonstrate the operational efficiency and reduced energy
              and water usage achievable through sustainable design. In the
              United States, the Bullitt Center in Seattle and VIA 57 West in
              New York exemplify how sustainable practices enhance asset value
              and operational efficiency, such as through net-zero energy
              consumption and extensive green spaces.
            </p>
          </div>
          <div className="pt-6 flex flex-col gap-4">
            <p className="font-semibold text-blue-500 text-xl">
              Sustainability
            </p>
            <img src={blog} className="w-full bg-cover bg-center"></img>
          </div>
          <div className="flex flex-col gap-7 pt-10">
            <p>
              Sustainable properties have subsequently shown the potential to
              often have higher resale values because they are in higher demand
              from environmentally conscious buyers coupled with future-proof
              tech. This means that real estate developers can increase their
              profits by investing in sustainable real estate solutions for
              development. In the US, the Bullitt Center in Seattle and VIA 57
              West in New York showcase how sustainable practices like net-zero
              energy consumption and green spaces can enhance asset value and
              operational efficiency. For example, green-certified buildings can
              achieve a premium of 7% to 10% in asset value over traditional
              buildings. Furthermore, the Bullitt Center’s investment in green
              technologies is expected to yield a payback period of
              approximately 20 years, considering energy savings and reduced
              maintenance costs.
            </p>
            <p>
              The Bullitt Center, operates entirely on the energy produced by
              its 1,300-square-meter rooftop solar panel array, making it one of
              the few commercial buildings worldwide to achieve net-positive
              energy. VIA 57 West incorporates over half of its footprint into
              green spaces, contributing to a 45% reduction in stormwater runoff
              compared to traditional buildings, resulting in a longer-life &
              lower upkeep.
            </p>
            <p>
              In conclusion, sustainable real estate development offers an
              attractive value proposition, marrying environmental stewardship
              with financial benefits and risk mitigation. Government incentives
              play a crucial role in this by providing tax credits, rebates, and
              grants that offset the higher upfront costs associated with green
              buildings. These incentives not only make sustainable projects
              more financially viable but also signal governmental support for
              green initiatives, encouraging further investment in
              sustainability. Additionally, sustainable site design strategies
              often build public trust and streamline regulatory approvals,
              further multiplying the benefits of sustainable development.
            </p>
            <p>
              It’s also important to consider the long-term drawbacks associated
              with poor planning, obsolete technology, and non-sustainable
              development. The situation in Bangalore City, known as the silicon
              capital of India, exemplifies this. The city faces a major
              drought, largely attributed to poor urban planning and high water
              use in construction practices. This underscores the critical role
              that the evolution and expansion of a country’s building stock
              play in combating climate change.
            </p>
            <p>
              With buildings accounting for more than 40% of India’s total
              energy consumption and this figure rising annually, the
              continuation of conventional, inefficient building practices could
              result in buildings accounting for over 70% of emissions by 2050.
              This scenario poses a significant threat to global green ambitions
              and highlights the urgency of adopting sustainable development
              practices.
            </p>
            <p>
              For developers, investment managers, and government advisors,
              integrating sustainable practices into real estate projects not
              only aligns with global sustainability goals but also promises
              enhanced asset value and operational efficiencies. As the industry
              evolves, the financial and environmental imperatives of
              sustainability are likely to become increasingly intertwined,
              shaping the future of real estate development.F
            </p>
            <p>
              For developers, investment managers, and government advisors,
              integrating sustainable practices into real estate projects not
              only aligns with global sustainability goals but also promises
              enhanced asset value and operational efficiencies. As the industry
              evolves, the financial and environmental imperatives of
              sustainability are likely to become increasingly intertwined,
              shaping the future of real estate development.
            </p>
          </div>
         
        </div>
      </div>
      <div className="max-w-full mx-auto mt-10 ">
            <h1 className="text-[32px] text-blue-900 pl-6 font-semibold">
              Leadership
            </h1>

            <div className="w-full lg:grid-cols-2 grid mx-auto pl-3 grid-cols-1 gap-6">
              <div
                className="flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 transition-all p-4"
                onClick={() => navigate(`/aboutus/Gautam Chhabra`)}
              >
                <div className="p-3">
                  <img
                    className="w-[160px] h-[160px] rounded-sm"
                    alt="Gautam Chhabra"
                    src={Gautam}
                  ></img>
                </div>
                <div className="flex flex-col w-3/4">
                  <p className="text-2xl md:text-3xl font-semibold">
                    Gautam Chhabra
                  </p>
                  <p className="font-semibold text-lg md:text-xl text-[#CC2027] my-1">
                    Founder and Managing Director
                  </p>
                  <p className="text-sm md:text-base">
                    Engineer and an MBA by education, Gautam has deep interest
                    in finance. He brings over a decade of global advisory
                    experience in offering strategic insights that drive growth,
                    innovation, and productivity for organizations.
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 transition-all p-4"
                onClick={() => navigate(`/aboutus/Suraj Nayak`)}
              >
                <div className="p-3">
                  <img
                    className="w-[160px] h-[160px] rounded-sm"
                    alt="Suraj Nayak"
                    src={SUraj}
                  ></img>
                </div>
                <div className="flex flex-col w-3/4">
                  <p className="text-2xl md:text-3xl font-semibold">
                    Suraj Nayak
                  </p>
                  <p className="font-semibold text-lg md:text-xl text-[#CC2027] my-1">
                    Director
                  </p>
                  <p className="text-sm md:text-base">
                    Suraj specializes in investment and transaction advisory,
                    offering strategic counsel on deal terms, valuations, and
                    overall opportunity analysis. He has a strong track record
                    of formulating and implementing strategies across various
                    sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default CaseStudiesBlog;
