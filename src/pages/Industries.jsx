import WorldImage from "../assets/world map.jpg";
import ServiceImage from "../assets/same.png";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSection";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caseStudy1 from "../assets/Case Study 1.png";
import caseStudy2 from "../assets/Case Study 2.png";
import caseStudy3 from "../assets/Case Study 3.png";
import caseStudy4 from "../assets/Case Study 4.png";
import caseStudy5 from "../assets/Case Study 5.png";
import caseStudy6 from "../assets/Case Study 6.png";
import caseStudy7 from "../assets/Case Study 7.png";
import caseStudy8 from "../assets/Case Study 8.png";

export default function Industry() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          mt: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className=" text-white sm:h-96  p-4 pb-10 mb-4 relative"
        style={{
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <h1
          className="text-4xl font-bold mb-4 pt-10 ml-14"
          style={{ color: "#FF6347" }}
        >
          Heading goes here
        </h1>
        <p className="pl-14">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  items-center  pl-10 ">
        <div className="flex">
          <div className="relative md:ml-8 ">
            <img src={WorldImage} />

            <div className="absolute top-1/3 left-1/2 bg-white text-black py-2 px-4 rounded-full">
              London
            </div>
          </div>
        </div>
        <div style={{backgroundColor: "#313251"}} className=" md:w-64 w-60 md:-16 mb-8  text-white p-4 mt-4 md:mt-0 md:ml-4">
          <ul className="divide-y divide-white">
            <li className="py-2">
              <div className="flex justify-between mb-2 mt-3 items-center ">
                Real Estate <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Real Estate Firms <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Healthcare <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Technology <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Retail <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Hospitality <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Business Services <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Banking <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Automobile <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Aviation <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 items-center">
                Sports <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between mb-2 mt-3 items-center">
                Oil & Gas <span>→</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-zinc-900 text-white p-6 md:p-28 mb-9">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left md:mb-12">
    <div>
      <p className="text-2xl md:text-4xl font-bold text-red-600">56+</p>
      <p className="text-lg md:text-xl">Clients served</p>
    </div>
    <div>
      <p className="text-2xl md:text-4xl font-bold text-red-600">$1000K</p>
      <p className="text-lg md:text-xl">Revenue generated</p>
    </div>
    <div>
      <p className="text-2xl md:text-4xl font-bold text-red-600">15+</p>
      <p className="text-lg md:text-xl">Served countries</p>
    </div>
  </div>
  <div className="text-left">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Real Estate</h2>
    <p className="mb-4">
    Our real estate consulting services leverage our deep understanding of market dynamics and regulatory landscapes to craft tailored strategies for property development, investment, and management. From formulating strategic plans for Riyadh-based firms to conducting pre-IPO valuations, we guide clients through every stage of their real estate journey with precision and foresight.

    </p>
    <a href="#" className="text-red-500 hover:text-red-700">
      See more industries
    </a>
  </div>
</div>

      <div className="overflow-x-auto ml-4 md:ml-28 mr-20 mb-10 ">
        <table className="min-w-full bg-white shadow-md rounded-lg text-zinc-900">
          <thead>
            <tr className="text-left border-b">
              <th className="px-6 py-3">Project name</th>
              <th className="px-6 py-3">Project description</th>
              <th className="px-6 py-3">Project impact</th>
              <th className="px-6 py-3">Client name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-zinc-100">
              <td className="px-6 py-4">Oil & Gas</td>
              <td className="px-6 py-4">Financial Description</td>
              <td className="px-6 py-4">$100 Bn</td>
              <td className="px-6 py-4">Add name here</td>
            </tr>
            <tr className="border-b hover:bg-zinc-100">
              <td className="px-6 py-4">Oil & Gas</td>
              <td className="px-6 py-4">Financial Description</td>
              <td className="px-6 py-4">$100 Bn</td>
              <td className="px-6 py-4">Add name here</td>
            </tr>
            <tr className="border-b hover:bg-zinc-100">
              <td className="px-6 py-4">Oil & Gas</td>
              <td className="px-6 py-4">Financial Description</td>
              <td className="px-6 py-4">$100 Bn</td>
              <td className="px-6 py-4">Add name here</td>
            </tr>
            <tr className="border-b hover:bg-zinc-100">
              <td className="px-6 py-4">Oil & Gas</td>
              <td className="px-6 py-4">Financial Description</td>
              <td className="px-6 py-4">$100 Bn</td>
              <td className="px-6 py-4">Add name here</td>
            </tr>
            <tr className="border-b hover:bg-zinc-100">
              <td className="px-6 py-4">Oil & Gas</td>
              <td className="px-6 py-4">Financial Description</td>
              <td className="px-6 py-4">$100 Bn</td>
              <td className="px-6 py-4">Add name here</td>
            </tr>
            <tr className="hover:bg-zinc-100">
              <td className="px-6 py-4">Oil & Gas</td>
              <td className="px-6 py-4">Financial Description</td>
              <td className="px-6 py-4">$100 Bn</td>
              <td className="px-6 py-4">Add name here</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex  flex-col  md:ml-28 ml-5 space-y-1">
        <p className="text-sm uppercase  tracking-widest font-bold text-red-500 dark:text-red-400">
          Case Study
        </p>
        <h2 className="text-3xl  font-semibold  text-zinc-900 dark:text-">
          Success Stories
        </h2>
      </div>
      <div className=" mb-16 p-5 mt-4  md:ml-20 overflow-y-hidden overflow-x-hidden ">
        <Slider {...settings}>
          <div className="max-w-sm ">
            <img
              src={caseStudy1}
              alt="Artistic display"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 1</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="max-w-sm">
            <img
              src={caseStudy2}
              alt="Abstract architecture"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 2</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="max-w-sm ">
            <img
              src={caseStudy3}
              alt="Abstract architecture"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 3</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="max-w-sm">
            <img
              src={caseStudy4}
              alt="Abstract architecture"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 4</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="max-w-sm">
            <img
              src={caseStudy5}
              alt="Artistic display"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 5</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="max-w-sm ">
            <img
              src={caseStudy6}
              alt="Abstract architecture"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 6</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="max-w-sm ">
            <img
              src={caseStudy7}
              alt="Abstract architecture"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 7</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="max-w-sm ">
            <img
              src={caseStudy8}
              alt="Abstract architecture"
              className="shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">Case study 8</h2>
            <p className="text-zinc-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
        </Slider>
      </div>
      <Footer />
    </>
  );
}
