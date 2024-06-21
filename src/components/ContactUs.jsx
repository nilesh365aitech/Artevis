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
          <a  className="underline">
            info@artevisconsulting.com
          </a>

        </p>
      </div>

      <div className="lg:w-1/2 p-6">
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 ring-blue-500 placeholder-blue-900 bg-blue-100"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 ring-blue-500 placeholder-blue-900 bg-blue-100"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 ring-blue-500 placeholder-blue-900 bg-blue-100"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 ring-blue-500 placeholder-blue-900 bg-blue-100"
          />
          <textarea
            placeholder="Tell us about your needs"
            className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 ring-blue-500 placeholder-blue-900 bg-blue-100"
            rows="4"
          ></textarea>
          <div className="w-full p-3 bg-blue-900 text-white rounded-md flex items-center justify-between px-6">
            <button
              type="submit"
              className=""
            >
              Submit
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4 ml-2 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
}
