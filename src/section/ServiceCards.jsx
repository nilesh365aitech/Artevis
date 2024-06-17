import React from "react";
import { Link } from "react-router-dom";
import Service1 from "../assets/servicefirst.png"
import Service2 from "../assets/servicesecond.png"
import Service3 from "../assets/servicethird.png"

const ServiceCards = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Link to="/services" onClick={scrollToTop}>
        <div className="py-8 max-w-6xl  mx-auto px-4">
          <h1 className="text-2xl font-semibold text-start mb-8">
            Heading goes here
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex bg-gray-100  flex-col items-center">
              <img
                src={Service1}
                alt="Service 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg ml-8 font-semibold md:mr-32  mb-4">
                Management Consultancy
              </h3>
              <p className= " text-zinc-600 mb-10 ml-8 mr-10">
              Our expert Management Consulting services provide strategic guidance and practical solutions to propel your business forward. From crafting Business Plans to providing invaluable insights, we're dedicated to your success. Discover how we can help you thrive today.

              </p>
            </div>
            <div className="flex bg-gray-200 flex-col items-center">
              <img
                src={Service2}
                alt="Service 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg ml-8 font-semibold md:mr-36  mb-7">
                Business Consultancy
              </h3>
              <p className="text-zinc-600 mb-10 ml-8 mr-10 ">
              Our tailored Business Consultancy services drive tangible results, from innovative strategies to operational optimization. Collaborate with us to thrive in today's competitive landscape. Discover how we can help you achieve sustainable success.
              </p>
            </div>
            <div className="flex bg-gray-100 flex-col items-center">
              <img
                src={Service3}
                alt="Service 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-lg ml-8 font-semibold md:mr-36  mb-7">
                Investment Advisory
              </h3>
              <p className="text-zinc-600 mb-10 ml-8 mr-10 ">
              We offer tailored Investment Advisory services, guiding clients through complex landscapes with expertise. From detailed financial models to proactive opportunity screening, we equip you to make informed decisions aligned with your goals. Achieve your investment objectives with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceCards;
