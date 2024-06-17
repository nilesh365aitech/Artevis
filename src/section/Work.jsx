import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";

export default function Work() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-7 ml-10  md:ml-52 ">Our Work</h1>

        <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 md:ml-52 md:mr-52 mb-10 mt-2 gap-8">
          <div className="mb-4">
            <img src={CaseStudy1} alt="Case Study 1" className="w-full" />
            <h2 className="text-xl font-bold mt-4 ">Case study 1</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="md:mt-16 mb-4">
            <img src={CaseStudy2} alt="Case Study 2" className="w-full" />
            <h2 className="text-xl font-bold mt-4">Case study 2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="mb-4">
            <img src={CaseStudy3} alt="Case Study 3" className="w-full" />
            <h2 className="text-xl font-bold mt-4">Case study 3</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="md:mt-16 mb-4">
            <img src={CaseStudy4} alt="Case Study 4" className="w-full" />
            <h2 className="text-xl font-bold mt-4">Case study 4</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
