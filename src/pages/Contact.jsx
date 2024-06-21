import Navbar from "../components/Navbar";
import wmapImg from "../assets/ContactMap.png";
import Footer from "../components/FooterSection";
import ContactImage from "../assets/contactbg.png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from '@mui/icons-material/Email';

export default function Widget() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="bg-black text-whit  md:h-[90vh] pb-10 mb-4 relative"
        style={{
          backgroundImage: `url(${ContactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className="sm:w-[50%] w-[90%] mx-auto md:ml-0 py-5 px-3 bg-white min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold text-red-700 ">
            Connect with us
          </p>
          <h1 className="text-4xl font-semibold mb-4 ml-4 sm:ml-14">
            Have questions or need expert guidance?
          </h1>
          <p className="ml-4 text-blue-800 mb-6 sm:ml-14 pr-4 sm:pr-10">
            Reach out to us now at info@artevisconsulting.com today, and let's
            chart the path to your success together.
          </p>
        </div>
        <div className="p-5 md:absolute md:right-16 md:top-20 w-[90%] md:w-[30%] h-fit rounded mx-auto md:mx-0 mt-10 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
          <h2 className="text-lg text-black font-semibold mb-4">
            Generate the master plan to fast track your product to launch
          </h2>
          <form className="p-0 md:p-6 space-y-4" onSubmit={handleSubmit}>
           
            <div className="flex items-center bg-white  p-2 rounded-lg shadow-md">
              <span className="material-icons text-red-500 dark:text-red-400">
                <AccountCircleIcon />
              </span>
              <input
                type="text"
                placeholder="Add your full name"
                className="ml-2 w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center bg-white  p-2 rounded-lg shadow-md">
            <span className="material-icons text-red-500 dark:text-red-400"><EmailIcon/></span>
            <input type="email" placeholder="youremailaddress@gmail.com" className="ml-2 w-full bg-transparent focus:outline-none" />
          </div>
            <div className="flex items-center bg-white  p-2 rounded-lg shadow-md">
              <span className="material-icons text-red-500 dark:text-red-400">
                <PhoneIphoneIcon />
              </span>
              <input
                type="tel"
                placeholder="Add your contact number"
                className="ml-2 w-full bg-transparent focus:outline-none"
              />
            </div>

            <div className="mb-3">
              <textarea
                placeholder="Tell us about your project"
                className="w-full p-3 border placeholder-black border-zinc-300 rounded-md text-sm text-gray-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm"
            >
              Get a custom quote
            </button>
          </form>
        </div>
      </div>
      <img
        className="w-4/5 md:h-auto h-60 mx-auto mt-10 md:mt-0"
        src={wmapImg}
        alt="Map"
      />
      <div style={{ backgroundColor: "#EDF5F5" }}>
        <div className="max-w-4xl  mx-auto ml-4 md:ml-36 py-24">
          <h2 className="text-3xl font-semibold mb-4 text-[#151B8D]">
            Work with us
          </h2>
          <p className="text-zinc-700 mb-6">
            Join our team of experts and contribute to the real world.
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
      </div>

      <Footer />
    </>
  );
}
