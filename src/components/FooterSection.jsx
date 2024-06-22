import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#26283B" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <img src={logo} className="h-14" />

            <p className="mb-6 text-sm">Delhi, India</p>
            <div className="mt-10 md:mt-24">
              <p className="text-sm">
                +91 9899169930
                <span className="text-sm ml-9">+91 7900196968</span>
              </p>
              <p className="mt-4">gautam.chhabra@artevisconsulting.com</p>
              <p className="mt-4">suraj.nayak@artevisconsulting.com</p>
            </div>
          </div>
          <div className="col-span-1 mt-10 md:mt-32">
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-zinc-300 mb-4 block">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300 block">
                  Our Footprint
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-10 md:mt-32">
            <ul>
              <li>
                <a href="#" className="hover:text-zinc-300 mb-4 block">
                  Insights & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300 block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 text-sm">
  <div className="border-t border-red-500 mx-4 md:mx-36"></div>
  <div className="flex flex-col sm:flex-row justify-between py-4 items-center mt-2 mx-4 md:mx-36">
    <span>All rights reserved.</span>
    <span>Artemis Consulting 2024</span>
  </div>
</div>

    </div>
  );
}
