import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function Navbar() {
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
          <Link to={"blog"}>Blog</Link>
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

        {/* <div className="xs:hidden md:block">
          <Button
            type="button"
            className="rounded-full border border-white pl-4 pr-4 pt-2 pb-2 bg-white hover:scale-110"
          >
            Join Us
          </Button>
        </div> */}
        <div className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}
