import Navbar from "../components/Navbar";

export default function Industries() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:flex md:items-start p-4 md:p-8">
        <div className="md:ml-20">
          <img
            src="https://placehold.co/600x400"
            alt="World Map"
            className="max-w-full mx-auto"
          />
          <h2 className="text-3xl font-bold mt-4 md:mt-8 mb-4 text-center">
            Industries
          </h2>
          <p className="text-zinc-600  text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div style={{backgroundColor: "#313251"}} className=" md:w-64 w-60 ml-16  text-white p-4 mt-4 md:mt-0 md:ml-4">
          <ul className="divide-y divide-white">
            <li className="py-2">
              <div className="flex justify-between items-center ">
                Real Estate <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Real Estate Firms <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Healthcare <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Technology <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Retail <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Hospitality <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Business Services <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Banking <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Automobile <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Aviation <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Sports <span>→</span>
              </div>
            </li>
            <li className="py-2">
              <div className="flex justify-between items-center">
                Oil & Gas <span>→</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
