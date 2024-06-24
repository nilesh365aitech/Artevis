import React from "react";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col md:mx-[4.5rem] md:mr-52 mt-8 lg:flex-row justify-center  ">
      <div className="lg:w-1/2 pt-6">
        <h2 className="text-3xl font-semibold  text-blue-800 mb-2 text-center lg:text-left">
          Contact Us
        </h2>
        <p className="text-center lg:text-left text-sm ">
          Reach out to us at{" "}
          <a href="mailto:info@artevisconsulting.com" className="underline">
            info@artevisconsulting.com
          </a>
        </p>
      </div>

      <div className="lg:w-1/2 py-3">
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3  -zinc-200  shadow-sm focus:outline-none focus:ring-2 ring-[#F0F3F8] placeholder-blue-900 bg-gray-100"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3  -zinc-200  shadow-sm focus:outline-none focus:ring-2 ring-[#F0F3F8] placeholder-blue-900 bg-gray-100"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3  -zinc-200  shadow-sm focus:outline-none focus:ring-2 ring-[#F0F3F8] placeholder-blue-900 bg-gray-100"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3  -zinc-200  shadow-sm focus:outline-none focus:ring-2 ring-[#F0F3F8] placeholder-blue-900 bg-gray-100"
          />
          <textarea
            placeholder="Tell us about your needs"
            className="w-full p-3  -zinc-200  shadow-sm focus:outline-none focus:ring-2 ring-[#F0F3F8] placeholder-blue-900 bg-gray-100"
            rows="4"
          ></textarea>
          <div className="w-full p-3 bg-blue-900 text-white -md flex items-center justify-between px-6">
            <button type="submit" className="">
              Submit
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
}
