import Navbar from "../components/Navbar";
import MainServices from "../pages/Services";
// import { IoIosArrowDown } from "react-icons/io";

export default function Services() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="max-w-6xl mt-0 mx-auto px-4 py-12">
        <h2 className="text-2xl text-red-700 font-bold text-start mb-6">
          SERVICES
        </h2>
        <h3 className="text-2xl font-semibold text-start mb-4">
          Who do we cater to?
        </h3>
        <p className="text-center mb-10 md:mr-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1700s, ssss when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-1  md:grid-cols-2 md:gap-8">
          <div>
            <div className="mb-4">
              <button style={{color: "#03047B"}} className="w-full text-left text-lg font-medium py-2 border-b-2  border-zinc-300">
                Corporates <span className="float-right">▼</span> 
              </button>
            </div>
            <div className="mb-4">
              <button style={{color: "#03047B"}}  className="w-full text-left text-lg font-medium py-2 border-b-2  border-zinc-300">
                Real Estate Firms <span className="float-right">▼</span>
              </button>
            </div>
            <div className="mb-4">
              <button style={{color: "#03047B"}}  className="w-full text-left text-lg font-medium py-2 border-b-2 border-zinc-300">
                Asset Management Firms <span className="float-right">▼</span>
              </button>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <button style={{color: "#03047B"}}  className="w-full text-left text-lg font-medium py-2 border-b-2  border-zinc-300">
                Startups <span className="float-right">▼</span>
              </button>
            </div>
            <div className="mb-4">
              <button style={{color: "#03047B"}}  className="w-full text-left text-lg font-medium py-2 border-b-2  border-zinc-300">
                Governments <span className="float-right">▼</span>
              </button>
            </div>
            <div  className="mb-4">
              <button style={{color: "#03047B"}}  className="w-full text-left text-lg font-medium py-2 border-b-2  border-zinc-300">
                HNIs <span className="float-right">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <MainServices/> */}
    </>
  );
}
