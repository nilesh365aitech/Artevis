import Navbar from "../components/Navbar";
import CaseStudy13 from "../assets/Case Study 3.png";
import Footer from "../components/FooterSection";
import Media from "../assets/media.png";
import SucessStories from "../components/SucessStories";

const CaseStudy3 = () => {
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
        <div className="sm:w-[80%] w-[80%] lg:w-[70%] py-5 px-3 bg-white min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold" style={{ color: "#FF6347" }}>
            Case Study
          </p>
          <h1 className="text-4xl mt-4 mb-6 font-semibold ml-4 sm:ml-14 ">
            Feasibility Analysis for a one of its kind Ocean Race Event
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-6 rounded-lg md:p-20 ">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-blue-900 :text-blue-400">
            Business Need
          </h2>
          <p className="mt-2 text-zinc-700 :text-zinc-300">
            A prominent event and sports management company sought to explore
            the viability of initiating a greenfield ocean race in Saudi Arabia,
            requiring a detailed feasibility study and adaptable financial model
            to make critical planning and operating decisions.
          </p>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-10 border-t md:border-t-0 md:border-l border-zinc-200 :border-zinc-600">
          <h3 className="text-lg font-semibold text-red-600 :text-red-400">
            About the client
          </h3>
          <p className="text-zinc-900 :text-zinc-100 font-semibold">
            An event and sports management company
          </p>
          <h3 className="mt-4 text-lg font-semibold text-red-600 :text-red-400">
            Location
          </h3>
          <p className="text-zinc-900 font-semibold ">Saudi Arabia</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">
            Workshop with Key Stakeholders
          </h2>
          <p>
            Initiated the project with an extensive workshop to gather crucial
            information, understand client expectations, and outline project
            requirements.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className="p-12 text-indigo-900"
        >
          <h2 className="text-2xl font-semibold mb-2">Industry Analysis</h2>
          <p>
            Conducted a thorough analysis of the ocean race industry, studying
            existing events globally to garner a deep understanding of key
            success factors and potential challenges.
          </p>
        </div>
        <div
          style={{ backgroundColor: "#EDF5F5" }}
          className="text-indigo-900 p-12"
        >
          <h2 className="text-2xl font-semibold mb-2">Demand Estimation</h2>
          <p>
            Estimated the potential demand and market interest for the ocean
            race in Saudi Arabia, leveraging both primary and secondary
            research.
          </p>
        </div>
        <div style={{ backgroundColor: "#151B8D" }} className="text-white p-12">
          <h2 className="text-2xl font-semibold mb-2">Cost Benchmarking</h2>
          <p>
            Analyzed costs and revenue streams by benchmarking against similar
            established ocean races, ensuring a comprehensive understanding of
            the financial aspects of the project.
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-20 md:flex-row justify-around items-center text-center space-y-4 md:space-y-0">
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">$40+ Mn</p>
          <p className="text-zinc-700 :text-zinc-300">Project Value</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">3.0x</p>
          <p className="text-zinc-700 :text-zinc-300">MoIC</p>
        </div>
      </div>

      <div className="py-24 mb-20 bg-[#F0F3F8] p-6 rounded-lg mt-20">
        <h2 className="text-xl md:ml-9 md:mr-52 font-semibold text-blue-00 :text-blue-500">
          Outcome
        </h2>
        <p className="mt-4 md:ml-9 md:mr-52 text-zinc-800 :text-zinc-200">
          Leveraging a thorough industry analysis, demand estimation, and
          financial modeling, the client received a comprehensive feasibility
          study, allowing them to make a go/no-go decision with a clear
          understanding of the project's potential and required investments. The
          detailed feasibility study provided actionable insights into market
          demand, potential challenges, and financial projections, equipping the
          client with the necessary information to confidently move forward with
          the ocean race project. The adaptable financial model developed
          allowed for multiple scenarios, ensuring robust and comprehensive
          feasibility analysis. This strategic approach enabled the client to
          align their investment decisions with the projected outcomes,
          fostering long-term value creation and strategic growth.
        </p>
      </div>

      <SucessStories />
      <Footer />
    </>
  );
};

export default CaseStudy3;
