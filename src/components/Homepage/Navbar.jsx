import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link, Location, useLocation } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Header.module.css";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const blog = location.pathname.split("/")[1];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="w-100 flex justify-between items-center pt-10 xs:ml-10 xs:mr-10 md:ml-10 md:mr-10">
        <div className="text-2xl font-semibold cursor-pointer text-white opacity-90">
          CODA
        </div>

        <ul className="xs:hidden md:flex text-lg text-white space-x-7">
          <li>
            <a href="/">Home</a>
          </li>
          <Link to={`${blog ? "" : "blog"}`}>Blog</Link>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
          <li>
            <a href="/">Tithe & Offering</a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose
              className="cursor-pointer fixed top-0 text-purple-400 my-8"
              size={28}
            />
          ) : (
            <AiOutlineMenu className="cursor-pointer text-white" size={20} />
          )}
        </div>
        <ul
          className={
            nav
              ? `${classes.nav} fixed left-0 top-0 w-[370px] h-full lg:h-[60%] border-r border-r-blue-900 ease-in-out duration-500 z-10`
              : "ease-in-out fixed left-[-100%]"
          }
        >
          <h2 className="w-full text-xl font-bold text-[#fdffff] mx-6 my-8 ">
            <Link
              to={"/"}
              className="text-white no-underline cursor-pointer opacity-90"
            >
              CODA
            </Link>
          </h2>
          <li className="mt-20 p-3 border-b border-t border-gray-600 text-white opacity-90 px-6">
            <Link
              className={`${classes.link} hover:text-white before:bg-white`}
              to="/"
              onClick={handleNav}
            >
              Home
            </Link>
          </li>

          <li className="p-3 border-b border-gray-600 text-white opacity-90 px-6">
            <Link
              className={`${classes.link} hover:text-white before:bg-white`}
              to={`${blog ? "" : "blog"}`}
              onClick={handleNav}
            >
              Blog
            </Link>
          </li>

          <li className="p-3 border-b border-gray-600 text-white opacity-90 px-6">
            <Link
              className={`${classes.link} hover:text-white before:bg-white`}
              to=""
              onClick={handleNav}
            >
              About Us
            </Link>
          </li>

          <li className="p-3 border-b border-gray-600 text-white opacity-90 px-6">
            <Link
              className={`${classes.link} hover:text-white before:bg-white`}
              to=""
              onClick={handleNav}
            >
              Contact Us
            </Link>
          </li>

          <li className="p-3 border-b border-gray-600 text-white opacity-90 px-6">
            <Link
              className={`${classes.link} hover:text-white before:bg-white`}
              to=""
              onClick={handleNav}
            >
              Tithe & Offering
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
