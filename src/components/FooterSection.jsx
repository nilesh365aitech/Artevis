export default function Footer() {
  return (
    <div style={{ backgroundColor: "#26283B" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <h2 className="text-3xl font-bold mb-4">Logo</h2>
            <p className="mb-6 text-sm">Delhi, India</p>
            <div className="mt-10 md:mt-24">
              <p className="text-sm">
                +91 7778889010
                <span className="text-sm ml-9">+91 7778889010</span>
              </p>
              <p className="mt-4">gautam.chhabra@artevisconsulting.com</p>
            </div>
          </div>
          <div className="col-span-1 mt-10 md:mt-24">
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
          <div className="col-span-1 mt-10 md:mt-24">
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
    </div>
  );
}
