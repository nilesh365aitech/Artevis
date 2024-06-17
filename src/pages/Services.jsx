import Contact from "../components/ContactUs";
import Footer from "../components/FooterSection";
import Navbar from "../components/Navbar";
// import Solutions from "../components/Solutions";
import ServiceImage from "../assets/same.png";
import bg from "../assets/Group 13.png";

export default function MainServices() {
  return (
    <>
      <div
        className="bg-black text-white sm:h-96  p-4 pb-10 mb-4 relative"
        style={{
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <h1
          className="text-4xl  mb-4 ml-14 pt-10"
          style={{ color: "#FF6347" }}
        >
          Services
        </h1>
        <p className="ml-14">
          At our consulting firm, our core service offerings are designed to
          empower businesses to thrive in today's dynamic landscape.
        </p>
      </div>
      <div className="max-w-4xl  mx-auto ml-4 md:ml-20 px-4 py-20">
        <h2 className="text-3xl font-semibold">Core Service Offerings</h2>
        <p className="mt-4 text--600 dark:text-zinc-600">
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
        style={{ backgroundColor: "#1E227F", backgroundImage: ` url(${bg})` }}
        className="text-white p-10 bg-no-repeat bg-right-bottom"
      >
        <h1 className="text-4xl md:mt-3 md:mb-8  md:ml-10 mb-4">
          Management Consulting
        </h1>
        <p className="mb-6 md:ml-10 md:mr-80">
          In today's fast-paced business world, having a clear strategy and
          effective operations is important for success. Artevis Consulting
          offers Management Consulting services to help businesses thrive. We
          work closely with clients to develop strategies for growth and create
          practical plans to achieve their goals. From crafting Business Plans
          to conducting studies that provide valuable insights, we're here to
          support every step of the journey. Whether it's transforming your
          business or preparing for important meetings, our team is dedicated to
          helping you succeed. Choose Artevis Consulting for expert guidance and
          practical solutions to drive your business forward.
        </p>

        <div className="grid grid-cols-1 md:ml-10 md:mr-80  md:grid-cols-3 gap-4">
          <ul>
            <li className="pb-6">• Corporate & Business Strategy</li>
            <li className="pb-6">• Business Plans</li>
            <li className="pb-6">• Annual Operating Plans</li>
            <li className="pb-6">• HBU & Feasibility Studies</li>
          </ul>
          <ul>
            <li className="pb-6">• Transformation & Expansion Strategy</li>
            <li className="pb-6">• Board Meeting Readiness and Support</li>
            <li className="pb-6">• Project Design & Development</li>
            <li className="pb-6">• Business Process Consulting</li>
          </ul>
          <ul>
            <li className="pb-4 ">• Strategy Implementation Support</li>
            {/* <li className="pb-4">• Corporate & Business Strategy</li>
            <li className="pb-4">• Corporate & Business Strategy</li>
            <li className="pb-2">• Corporate & Business Strategy</li> */}
          </ul>
        </div>
      </div>
      <div
      style={{ backgroundColor: "#1E1E1E", backgroundImage: ` url(${bg})` }}
      className="bg-zinc-800 bg-no-repeat bg-right-bottom text-white p-10">
        <h1 className="text-4xl md:mt-3 md:mb-8  md:ml-10 mb-4">
          Investment Advisory
        </h1>
        <p className="mb-6 md:ml-10 md:mr-80">
          Artevis Consulting offers comprehensive Investment Advisory services
          tailored to meet the diverse needs of our clients. With a keen
          understanding of market dynamics and investment strategies, our team
          provides expert guidance to navigate complex investment landscapes.
          From preparing detailed financial models and compelling pitch decks to
          conducting thorough business and asset valuations, we equip our
          clients with the tools and insights needed to make informed investment
          decisions. Our proactive approach includes opportunity screening and
          analysis, ensuring that potential investments align with our clients'
          goals and risk tolerance. Whether you're raising capital or seeking
          strategic partnerships, Artevis Consulting is dedicated to helping you
          achieve your investment objectives with confidence and clarity.
        </p>
        <div className="grid grid-cols-1 md:ml-10 md:mr-80  md:grid-cols-3 gap-4">
          <ul className="list-disc pl-5">
            <li className="pb-6">Transaction Support (IMs, Models)</li>
            <li className="pb-6"> Pitch Decks & Internal Presentations</li>
            <li className="pb-6">Business & Asset Valuation</li>
            <li>Opportunity Screening and Analysis</li>
          </ul>
          <ul className="list-disc pl-5">
            <li className="pb-6">Investor Kit for fundraising</li>
            <li className="pb-6">Company & Industry Research</li>
            <li className="pb-6">Portfolio Monitoring & Reporting</li>
            <li> Fund Modeling and Manager Screening</li>
          </ul>
          <ul className="list-disc pl-5">
            <li className="pb-4">Data Room Management</li>
            {/* <li className="pb-4">Corporate & Business Strategy</li>
            <li className="pb-4">Corporate & Business Strategy</li>
            <li>Corporate & Business Strategy</li> */}
          </ul>
        </div>
      </div>
      <div
       style={{  backgroundImage: ` url(${bg})` }}
      className="bg-red-600  text-white p-8 bg-no-repeat bg-right-bottom">
        <h1 className="text-4xl md:ml-10 md:mt-3 md:mb-8  mb-4">
          Business Analytics
        </h1>
        <p className="mb-6 md:ml-10 md:mr-80">
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
        <div className="grid grid-cols-1 md:ml-10 md:mr-80  md:grid-cols-3 gap-4">
          <ul>
            <li className="pb-6">• Data Engineering</li>
            <li className="pb-6">• Data Mining</li>
            <li className="pb-6">• Web Scraping</li>
            <li className="pb-6">• Big Data Analytics</li>
          </ul>
          <ul>
            <li className="pb-6">• Descriptive Analytics</li>
            <li className="pb-6">• Prescriptive Analytics</li>
            <li className="pb-6">• Predictive Analytics</li>
            <li className="pb-6">• Business Intelligence</li>
          </ul>
          <ul>
            <li className="pb-4">• Cloud Integration & Migration</li>
            {/* <li className="pb-4">• Corporate & Business Strategy</li>
            <li className="pb-4">• Corporate & Business Strategy</li>
            <li className="pb-4">• Corporate & Business Strategy</li> */}
          </ul>
        </div>
      </div>
      <div className="">
        <div className="max-w-4xl ml-20 mx-auto  px-4 py-20">
          <h2 className="text-3xl font-semibold text-zinc-900 ">
            Who are we for?
          </h2>
          <p className="mt-4 text-zinc-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="max-w-4xl  mx-auto p"></div>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py- md:h-52 mb-14">
        <div style={{backgroundColor: "#EBF3FF"}} className="  text-2xl   p-4 text-center">
          Corporates
        </div>
        <div style={{backgroundColor: "#E2EBF9"}}  className="  text-2xl p-4 text-center">
          Real Estate Firms
        </div>
        <div style={{backgroundColor: "#F0F3F8"}}  className=" p-4  text-2xl text-center">
          Asset Mgmt. Firms
        </div>
        <div style={{backgroundColor: "#F6F9FF"}}   className="bg-zinc-200 p-4  text-2xl text-center">
          StartUps
        </div>
        <div style={{backgroundColor: "#ECF3FF"}}   className="bg-zinc-300 p-4  text-2xl text-center">
          Governments
        </div>
        <div style={{backgroundColor: "#F6F9FF"}}   className="bg-zinc-200 p-4  text-2xl text-center">
          HNIs
        </div>
      </div>

      <Footer />
    </>
  );
}
