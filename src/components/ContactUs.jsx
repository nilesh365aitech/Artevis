export default function ContactUs() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (

        <div className="flex flex-col md:flex-row justify-center p-6">
            <div className="md:w-1/2 p-6">
                <h2 className="text-3xl font-semibold text-blue-800 mb-4">Contact Us</h2>
                <p>
                    Reach out to us at{' '}
                    <a href="#" className="underline">
                        info@artevisconsulting.com
                    </a>{' '}
                    and we’ll share a customised plan to get you launched!
                </p>

        <div className="max-w-7xl mx-auto py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="text-zinc-600">Stay ahead in a rapidly changing world. Subscribe to Artevis Consulting, for latest  updates</p>
                </div>
                <div>
                    <form action="#">
                        <div  className="mb-4">
                            <input style={{backgroundColor: "#F0F3F8"}} type="text" name="name" placeholder="Name" className="w-full p-3  placeholder-blue-900" />
                        </div>
                        <div className="mb-4">
                            <input style={{backgroundColor: "#F0F3F8"}} type="email" name="email" placeholder="Email" className="w-full p-3  placeholder-blue-900" />
                        </div>
                        <div className="mb-6">
                            <textarea style={{backgroundColor: "#F0F3F8"}} name="message" rows="4" placeholder="Tell us about your company" className="w-full p-3  placeholder-blue-900"></textarea>
                        </div>
                        <button onClick={handleSubmit} className="bg-black text-start text-red-600 px-6 py-3 mb-3 w-full  hover:bg-zinc-800 transition-colors">
                            Submit <span className="ml-1">➜</span>
                        </button>
                    </form>
                </div>

            </div>
            <form className="md:w-1/2 p-6 space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                />
                <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                />
                <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                />
                <textarea
                    placeholder="Tell us about your needs"
                    className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
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
    );
}
