export default function AboutUs() {
  return (
    <div className="relative py-4 px-2 sm:p-6 pt-6 ml-2  mx-auto">
      <div className="w-[75%]">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-semibold mb-4">
        About Us
      </h2>
      <p className=" text-sm sm:text-base md:text-lg mb-4">
        Artevis Consulting is a pioneering offshore management consulting and
        investment advisory firm.
      </p>
      <p className=" text-sm sm:text-base md:text-lg mb-4">
        Our mission is clear: to equip CXOs, Investment Teams, and board members
        with essential insights for strategic decision-making and long-term
        value creation. <br />
        With nearly a decade of experience and a deep understanding of markets
        in the Middle East, US, and India, we guide our clients towards growth
        and innovation. At Artevis Consulting, we're not just advisors; we're
        committed partners dedicated to your success.
      </p>
      </div>
    
      <div className="absolute lg:right-10 top-0 bottom-0 flex gap-10 items-center right-5">
        <div className="w-1 lg:w-3 bg-purple-100 lg:h-[80%] h-[60%] mb-2 absolute lg:top-28 lg:right-32 right-14 bottom-5"></div>
        <div className=" w-1 lg:w-3 bg-gray-100 lg:h-[80%] h-[60%] mb-2 lg:right-16 absolute right-6"></div>
        <div className=" w-1 lg:w-3 bg-red-100 lg:h-[80%] h-[60%] mb-2 lg:right-0 absolute lg:top-16"></div>
      </div>
    </div>
  );
}
