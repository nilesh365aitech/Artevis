import React from 'react';

export default function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="flex flex-col md:flex-row justify-center p-6">
            <div className="md:w-1/2 p-6">
                <h2 className="text-3xl font-semibold text-blue-800 mb-4">Contact Us</h2>
                <p>
                    Reach out to us at{' '}
                    <a href="mailto:info@artevisconsulting.com" className="underline">
                        info@artevisconsulting.com
                    </a>{' '}
                    and we’ll share a customised plan to get you launched!
                </p>
            </div>

            <div className="md:w-1/2 p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                        style={{ backgroundColor: "#F0F3F8" }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                        style={{ backgroundColor: "#F0F3F8" }}
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Tell us about your company"
                        className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                        style={{ backgroundColor: "#F0F3F8" }}
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-900 text-white rounded-md flex items-center justify-between"
                        >
                        Submit
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                       / >
                            
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                ></path>
                            </svg>
                        </button>
                    </form>
           
            </div>
        </div>
    );
}
