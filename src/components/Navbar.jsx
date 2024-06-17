import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
    setShow(!show);
    console.log(show);
    setNavOpen(!navOpen);
  };

  let Links = [
    { name: "About Us", link: "/aboutus" },
    { name: "Services", link: "/services" },
    { name: "Industries", link: "/industries" },
    { name: "Case Studies", link: "/casestudies" },
    { name: "Contact Us  ➔", link: "/contact" },
  ];

  return (
    <div className="w-full top-0 left-0 ">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl ml-5 cursor-pointer flex items-center gap-1">
          <Link to={"/"}>Logo</Link>
        </div>

        <div
          onClick={toggleNavbar}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex  w-40 pl-5 md:items-center mr-2 md:bg-transparent h-52 md:h-auto text-white  bg-gray-500 absolute ${
            show ? "absolute" : "hidden"
          }  md:pb-0 pb-12  md:static md:z-auto z-30 md:w-auto transition-all duration-500 ease-in ${
            isOpen ? "right-0" : "-right-full"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:mr-8 md:my-0  my-4  font-semibold">
              <NavLink
                to={link.link}
                className={`text-white-800 hover:text-gray-200 duration-500 ${
                  window.location.pathname === link.link
                    ? `${
                        navOpen
                          ? "py-4"
                          : "bg-red-500 pb-1 pl-2 pr-2 pt-14 text-white-700"
                      } `
                    : ""
                }`}
                onClick={toggleNavbar}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
