import React from "react";

import Button from "../UI/Button";
import church from "../../assets/church-1.jpg";
import mission from "../../assets/mission-Copy.jpg";
import vision from "../../assets/vision-Copy.jpg";
import Sophronismos from "../../assets/Sophronismos-1.jpg";
import Phaneroo from "../../assets/Phaneroo-1.jpg";

import classes from "./Header.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Header = (props) => {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const todaysDate = new Intl.DateTimeFormat("en-US", options).format(now);

  return (
    <React.Fragment>
      {/* Header section */}
      <header className={classes.header}>
        <Navbar />

        <section
          style={{ transform: "translate(-50%, -50%)" }}
          className="relative top-[42%] left-[50%] text-justify xs:mr-12  md:mr-28 lg:mr-40 xl:mr-56"
        >
          <article className={`${classes["header__text"]}`}>
            <h1 className="text-center pb-5 xs:text-3xl sm:text-3xl lg:text-5xl font-semibold">
              Welcome To City of David Assembly
            </h1>

            <p className="xs:text-lg lg:text-xl xs:leading-6 leading-tight tracking-tighter">
              A divine orchestration of God by his spirit to raise a balanced
              generation of believers who have a stand IN, WITH, BY, and FOR
              GOD; Excellent in their ordinations, Love the Lord, Balanced in
              doctrine, Excelling financially, Built to last in marriage and
              relationship, people with real and true love for God, Raised for
              heaven and dispatched to earth for impact. This is City of David
              Assembly! The word works! We pray, study, We DO IT, and BECOME IT.
            </p>
          </article>
        </section>
      </header>

      {/* About Section */}
      <section className="w-100 mb-10">
        <div className="text-center pt-14">
          <p className="opacity-70 xs:text-sm md:text-xl pb-3">ABOUT CHURCH</p>
          <h1 className="font-normal xs:text-xl md:text-4xl opacity-80 text-purple-500 pb-5">
            Seek First the Kingdom of God
          </h1>
        </div>
        <div className="xs:pl-6 xs:pr-6 sm:pl-16 sm:pr-16 mdx:flex gap-10 ">
          <img
            src={church}
            alt="church exterior"
            className="md:w-100 mdx:w-[28rem] lg:w-[32rem]"
          />
          <div>
            <p className="xs:pt-6 sm:pt-6 lg:pt-10 text-justify">
              December 28th 2020, as Inspired and instructed by God to bring
              those who I have being discipling into A quorum and platform for
              structure and consistency’s sake! School of wisdom is The
              Apostolic and equipping arm of City Of David Assembly, A Vision
              Given by God December 26th, 2018, To Raise Kings (The many lamps
              in the upper room). We have a covenant Of Gods presence and The
              Mercies Of God as a Ministry.
            </p>
            <Button
              type="button"
              className="mt-3 lg:mt-20 xl:mt-20 rounded-full border border-purple-500 pl-4 pr-4 pt-1 pb-1 bg-white hover:scale-110 hover:bg-purple-500 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Word of the day section */}
      <section className="md:flex justify-between w-100 xs:pl-6 xs:pr-6 md:pl-20 md:pr-20 gap-16 mb-10 bg-gray-800 pt-5 pb-5">
        <div className="xs:pb-6 md:pb-0 text-white opacity-90">
          <p className="xs:pb-2 pb-4">Reflection</p>
          <h1 className="font-medium text-3xl">God's Word Today</h1>
        </div>
        <div>
          <p className="inline pt-1 pb-1 rounded-full border border-purple-500 pl-4 pr-4 bg-white">
            {todaysDate}
          </p>
          <div className="text-white opacity-90">
            <p className="text-justify pt-4">
              For the desire of the flesh is death, but the desire of the Spirit
              is life and death.
            </p>
            <p>Romans 8:6</p>
          </div>
        </div>
      </section>

      {/* vision and mission section */}
      <section className="xs:text-left md:text-center mb-10">
        <div className="text-center">
          <p className="text-xs">OUR MISSION</p>
          <h1 className="xs:text-2xl md:text-4xl opacity-80 pb-5 text-purple-500 xs:pl-10 xs:pr-10">
            Vision and mission about our church
          </h1>
        </div>
        <div className="md:flex md:justify-between md:gap-10 md:ml-20 md:mr-20 lg:ml-64 lg:mr-64">
          {/* MISSION */}
          <div className="md:text-left xs:flex flex-col justify-between items-center md:block">
            <img src={mission} alt="someone studying psalm 139" className="" />
            <h2 className="pt-8 pb-2 font-semibold opacity-90">Mission</h2>
            <p
              className={`${classes.mission} xs:text-left xs:block opacity-90`}
            >
              Building a christain family that loves and serves God and People
            </p>
            <Button
              type="button"
              className=" mt-5 rounded-full border border-purple-500 pl-4 pr-4 pt-1 pb-1 bg-white hover:scale-110 hover:bg-purple-500 hover:text-white xs:hidden md:block"
            >
              Learn More
            </Button>
          </div>
          {/* VISION */}
          <div className="xs:flex flex-col justify-between items-center md:block xs:pt-5 md:pt-0 md:text-left">
            <h2 className="pb-2 font-semibold opacity-90">Vision</h2>
            <p className={`${classes.vision} opacity-90`}>
              Become a church based on Full Gospel to take root, grow, and bear
              fruit for christ.
            </p>
            <Button
              type="button"
              className=" mt-5 rounded-full border border-purple-500 pl-4 pr-4 pt-1 pb-1 mb-3 bg-white hover:scale-110 hover:bg-purple-500 hover:text-white"
            >
              Learn More
            </Button>
            <img src={vision} alt="" className="xs:hidden md:block" />
          </div>
        </div>
      </section>

      {/* Special programmes */}
      <section className="pb-20">
        <div className="text-center pb-5">
          <hr className="pb-2 " />
          <h1 className="xs:text-2xl md:text-4xl opacity-80 pb-2 text-purple-500 xs:pl-10 xs:pr-10">
            Our Meetings and Special Programmes
          </h1>
          <p className="pt-2 xs:pl-10 xs:pr-10 md:pl-28 md:pr-28 leading-[20px]">
            We have three major meetings in the year, Sophronismos (The Higher
            Life Conference), Mercy Conference (Yom Teruah), and our December
            Congress (Camp & Convention Meeting).
          </p>
        </div>
        <div>
          <div className={`${classes.special} mt-5`}>
            <div className={`${classes.card} `}>
              <img src={Sophronismos} alt="" />
              <div className={classes["card-text"]}>
                <div className="pt-2">
                  <p className="xs:text-xl md:text-2xl">Sophronismos </p>
                  <p className="xs:text-sm">(Higher Life Conference)</p>
                </div>
                <button
                  className="border border-purple-500 hover:bg-purple-500"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className={`${classes.card} `}>
              <img
                src={Phaneroo}
                className="rounded-t-2xl h-[140px] w-[250px] object-cover"
                alt=""
              />
              <div className={classes["card-text"]}>
                <div className="pt-2">
                  <p className="xs:text-xl md:text-2xl">Sophronismos </p>
                  <p className="xs:text-sm">(Higher Life Conference)</p>
                </div>
                <button
                  className="border border-purple-500 hover:bg-purple-500"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className={`${classes.card} `}>
              <img src={Sophronismos} alt="" />
              <div className={classes["card-text"]}>
                <div className="pt-2">
                  <p className="xs:text-xl md:text-2xl">Sophronismos </p>
                  <p className="xs:text-sm">(Higher Life Conference)</p>
                </div>
                <button
                  className="border border-purple-500 hover:bg-purple-500"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Header;
