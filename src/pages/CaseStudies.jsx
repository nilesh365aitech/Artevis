import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSection";
import CaseImage from "../assets/same.png";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import CaseStudy5 from "../assets/Case Study 5.png";
import CaseStudy6 from "../assets/Case Study 6.png";
import CaseStudy7 from "../assets/Case Study 7.png";
import CaseStudy8 from "../assets/Case Study 8.png";

const CaseStudies = () => {
  return (
    <>
      <div
        className="bg-black text-white sm:h-96  p-4 pb-10 mb-4 relative"
        style={{
          backgroundImage: `url(${CaseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <h1
          className="text-4xl font-bold mb-4 ml-14 pt-10"
          style={{ color: "#FF6347" }}
        >
          Case Studies, Insights and Media
        </h1>
        <p className="ml-14">
          Explore our repository of case studies, insights, and videos to gain
          valuable perspectives and actionable strategies for success. From
          real-world examples of our impactful projects to thought-provoking
          analyses of industry trends, our resources offer unparalleled depth
          and expertise. Whether you're seeking inspiration, practical guidance,
          or a deeper understanding of complex challenges, our collection of
          case studies, insights, and videos is your go-to destination for
          valuable knowledge and insights.
        </p>
      </div>

      <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 md:ml-52 md:mr-52 mb-10 mt-20 gap-8">
        <div className="mb-4">
          <img src={CaseStudy1} alt="Case Study 1" className="w-full" />
          <h2 className="text-xl font-bold mt-4 ">Case study 1</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="md:mt-16 mb-4">
          <img src={CaseStudy2} alt="Case Study 2" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 2</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="mb-4">
          <img src={CaseStudy3} alt="Case Study 3" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 3</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="md:mt-16 mb-4">
          <img src={CaseStudy4} alt="Case Study 4" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 4</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="mb-4">
          <img src={CaseStudy5} alt="Case Study 5" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 5</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="md:mt-16 mb-4">
          <img src={CaseStudy6} alt="Case Study 6" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 6</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="mb-4">
          <img src={CaseStudy7} alt="Case Study 7" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 7</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="md:mt-16 mb-4">
          <img src={CaseStudy8} alt="Case Study 8" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 8</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;
