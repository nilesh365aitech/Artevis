import Navbar from "../components/Navbar";
import wmapImg from "../assets/wmap.png";
import Footer from "../components/FooterSection";
import ContactImage from "../assets/contact.png";

export default function Widget() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className=" text-white font-sans bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactImage})` }}
      >
        <div className="container pt-4 pr-4 mx-auto px-4  py-2">
          <Navbar />
          <div className="flex flex-wrap py-14">
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl ml-14 font-bold mb-4"><span className="text-red-500" >Heading</span> goes here</h1>
              <p className="text-lg ml-14 mb-8 mr-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                indust's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div
              className="w-full lg:w-1/3"
              style={{ backdropFilter: "blur(5px)", backgroundColor: "#58595B" }}
            >
              <div className=" text--800 p-6 ">
                <h2 className="text-xl font-semibold mb-4">
                  Generate the master plan to fast track your product to launch
                </h2>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Add your full name"
                      className="w-full p-3 border border-zinc-300 rounded-md placeholder-black"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="youremailaddress@gmail.com"
                      className="w-full p-3 border  placeholder-black border-zinc-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Add your contact number"
                      className="w-full p-3 border  placeholder-black border-zinc-300 rounded-md"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Tell us about your project"
                      className="w-full p-3 border  placeholder-black border-zinc-300 rounded-md"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md"
                  >
                    Get a custom quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto ml-4 md:ml-20 px-4 py-28">
        <h2 className="text-3xl font-semibold">Core Service Offerings</h2>
        <p className="mt-4 text-zinc-600 :text-zinc-300">
        At our consulting firm, our core service offerings are designed to empower businesses to thrive in today's dynamic landscape. From strategic planning and transformational leadership to market entry strategies and operational optimization, we provide tailored solutions that drive sustainable growth and success. With a focus on innovation, collaboration, and client-centricity, we partner with organizations to unlock their full potential, achieve their goals, and stay ahead of the competition.
        </p>
      </div>

      <img className="w-full md:h-auto h-60" src={wmapImg} alt="Map" />

      <div className="max-w-4xl mx-auto ml-9 md:ml-36 py-24">
        <h2 className="text-3xl font-bold mb-4">Work with us</h2>
        <p className="text-zinc-700 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <a
          href="#"
          className="text-red-600 hover:text-red-700 font-semibold flex items-center"
        >
          Contact Us
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </a>
      </div>
      <Footer />
    </>
  );
}
