import React from "react";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center p-6">
      <div className="lg:w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center lg:text-left">
          Contact Us
        </h2>
        <p className="text-center lg:text-left">
          Reach out to us at{" "}
          <a href="mailto:info@artevisconsulting.com" className="underline">
            info@artevisconsulting.com
          </a>{" "}
          and we’ll share a customised plan to get you launched!
        </p>
      </div>

      <div className="lg:w-1/2 p-6">
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
          />
          <textarea
            placeholder="Tell us about your needs"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-900 text-white rounded-md flex items-center justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
