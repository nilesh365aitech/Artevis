import React from "react";
import CaseImage from "../assets/same.png";
import Navbar from "../components/Navbar";
import Illuminate from "../assets/illuminate.png";
import Footer from "../components/FooterSection";

const AboutUs = () => {
  return (
    <>
      <div
        className="bg-black text-white sm:h-96 p-4 pb-10 mb-4 relative"
        style={{
          backgroundImage: `url(${CaseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <h1
          className="text-4xl font-bold mb-4 ml-4 sm:ml-14 pt-10"
          style={{ color: "#FF6347" }}
        >
          About Us
        </h1>
        <p className="ml-4 sm:ml-14">
        Artevis Consulting is a pioneering offshore management consulting and investment advisory firm. 
        Our mission is clear: to equip CXOs, Investment Teams, and board members with essential insights for strategic decision-making and long-term value creation. 

        </p>
      </div>
      <div className="flex flex-wrap  justify-evenly items-center px-4 py-14 bg-white">
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-5xl mb-3 md:mr-20 font-bold text-red-600">10+</p>
          <p className="text-xl ml-3">Years of Experience</p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-5xl  md:mr-20 mb-3 font-bold text-red-600">30+</p>
          <p className="text-xl ml-2  ">Clients  Empowered</p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-5xl mb-3  md:mr-20 font-bold text-red-600">7+</p>
          <p className="text-xl mr-4 ">Countries Served</p>
        </div>
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-4xl mb-3  font-bold text-red-600">$100+Bn</p>
          <p className="text-xl mr-10">Client AUM</p>
        </div>
      </div>
      <img
        src={Illuminate}
        alt="Img"
        className="md:w-full  h-64 md:h-full mx-auto "
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-zinc-600 dark:text- mb-6">
          Our Expertise
        </h1>
        <p className="text-lg   mb-12">
          Artevis Consulting boasts a team of seasoned experts with deep
          industry knowledge and diverse perspectives. We operate
          collaboratively across all levels of client organizations, dedicated
          to fostering success and driving positive change in the world.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-red-600 dark:text-">
              Unparalleled Value
            </h2>
            <p className=" dark-400 mt-2">
              Our strategies are infused with unmatched value, crafted through
              collaborative efforts and a relentless pursuit of excellence.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-600 ">
              Business Acumen & Agile Adaptability:
            </h2>
            <p className="  mt-2">
              Our team possesses exceptional business acumen and sector-specific
              insights, enabling us to deliver tailored solutions with strategic
              impact from day one.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-600 ">
              Geographical Expertise
            </h2>
            <p className=" dark:tex-400 mt-2">
              With a profound understanding of the Saudi Arabian market and
              extensive Real Estate experience, we offer insights that lead to
              unparalleled success.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-600">
              Strategic Execution
            </h2>
            <p className=" dark:-400 mt-2">
              We execute with precision and efficiency, ensuring optimal
              outcomes for every venture we undertake.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-600 ">
              Exceptional Pedigree:
            </h2>
            <p className=" -400 mt-2">
              Led by senior experts with over a decade of top-tier financial and
              business advisory experience, we consistently surpass industry
              benchmarks.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-600">
              Cost Efficiency & Operational Flexibility:
            </h2>
            <p className="  mt-2">
              Engage with us for cost-efficient offshore solutions and the
              flexibility to adapt the team according to your project needs,
              without compromising on quality or results.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl  mx-auto px-4 ml-4 md:ml-32 py-8">
        <h1 className="text-3xl font-bold   ">Our team</h1>
        <p className="mt-4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="flex  flex-wrap justify-center  pt-8  ">
            
            <div style={{backgroundColor: "#1E227F"}} className="md:w-1/2  p-10 md:p-20">
                <div className="flex items-center space-x-4 mb-6">
                    <img className="w-16 h-16 rounded-full" src="https://placehold.co/100x100" alt="Gautam Chhabra" />
                    <div>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Gautam Chhabra</h2>
                        <p className="text-red-500">Founder and Managing Director</p>
                    </div>
                </div>
                <p className="text-white mb-4">Gautam Chhabra leads Artevis Consulting with over a decade of global advisory experience. His unique blend of engineering expertise and financial insight drives strategic initiatives, particularly in Saudi Arabia. Gautam's leadership has been instrumental in shaping pivotal strategies, leading investment ventures, and elevating capabilities in the real estate sector.</p>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Key Milestones:</h3>
                <ul className="list-disc pl-5 text-white">
                    <li>Spearheaded strategic initiatives for a $620.0 Bn SWF subsidiary.</li>
                    <li>Crafted Corporate Strategy for a $1.2 Bn KSA conglomerate.</li>
                    <li>Partnered with a $15.0 Mn Fintech CEO to launch their enterprise.</li>
                    <li>Architected a corporate revamp for a $10 Bn firm, redefining market presence.</li>
                    <li>Directed strategic management functions for a $5.0 Bn client.</li>
                    <li>Led efforts culminating in a $3.0 Bn IPO for a sports wagering company.</li>
                    <li>Drove technology sector investments, facilitating notable deals.</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">Education:</h3>
                <ul className="list-disc pl-5 text-white">
                    <li>MBA – Finance & Strategy, NMIMS, Mumbai</li>
                    <li>CFA Level 2 Candidate, CFA Institute, USA</li>
                    <li>B.Tech. – Engineering, ITM, Gurugram</li>
                </ul>
            </div>
            
            <div style={{backgroundColor: "#1E1E1E"}} className="md:w-1/2  p-10 md:p-20 ">
            <div className="flex items-center space-x-4 mb-6">
                <img className="w-16 h-16 rounded-full" src="https://placehold.co/100x100" alt="Suraj Nayak" />
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Suraj Nayak</h2>
                    <p className="text-red-500">Director</p>
                </div>
            </div>
            <p className="text-white mb-4">Suraj Nayak specializes in investment and transaction advisory, providing strategic counsel across diverse sectors.</p>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Key Milestones:</h3>
            <ul className="list-disc pl-5 text-white">
                <li>Redefined a $1.2 Bn GCC-based Real Estate Conglomerate's strategy.</li>
                <li>Supported expansion efforts for a leading KSA pharmaceutical manufacturer.</li>
                <li>Developed investment analysis frameworks for Riyadh investment funds.</li>
                <li>Served as principal analyst for a US middle-market PE fund.</li>
                <li>Delivered financial expertise to an Irish Credit Lending automation company.</li>
                <li>Guided investment strategies for family offices and funds.</li>
                <li>Crafted the business plan for a strategic hub in KSA.</li>
                <li>Spearheaded strategy implementation projects.</li>
            </ul>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4 mb-2">Education:</h3>
            <ul className="list-disc pl-5 text-white">
                <li>Bachelor of Arts in Accounting, Finance, and Applied Economics, The College of St. Scholastica, Duluth, United States</li>
            </ul>
            </div>
            </div>
            
      <Footer />
    </>
  );
};

export default AboutUs;


