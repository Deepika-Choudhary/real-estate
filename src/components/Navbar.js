import React, { useState } from "react";
import { Link } from "react-scroll";
// import { FaBars, FaTimes } from "react-icons/fa";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Rent",
    },
    {
      id: 2,
      link: "Buy",
    },
    {
      id: 3,
      link: "Sell",
    },
    {
      id: 4,
      link: "Manage Property",
    },
    {
      id: 5,
      link: "Resources",
    },
  ];

  return (
    <div className="flex w-full ml-12 mt-9">
      <h3 className="text-xl font-bold text-purple-900">Estatery</h3>
      <div>
        <ul className="flex ml-12">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-purple-500 hover:bg-gray-200 hover:w-flex rounded-sm py-2"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {/* {nav ? <FaTimes size={30} /> : <FaBars size={30} />} */}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mx-20">
        <button className=" pd-4 w-20 h-10 rounded-lg border-gray border-2 text-purple-600 bg-white hover:text-white hover:bg-purple-600 hover:border-none">
          Login
        </button>
        <button className="ml-4 w-20 h-10 rounded-lg bg-purple-600 text-white hover:bg-white hover:text-purple-800 hover:border-gray hover:border-2">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
