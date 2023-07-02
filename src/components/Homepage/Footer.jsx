import React from "react";

import classes from "./Footer.module.css";
import { location, mail, phone } from "../UI/svg";

const Footer = () => {
  const now = new Date();
  const currentDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(now);

  return (
    <section className={classes.footer}>
      <div className={classes["footer--container"]}>
        <div className={classes["footer--1"]}>
          <div className={classes.about}>
            <h1>City of David Assembly</h1>
            <div>
              <p className="text-justify">
                We are an apostolic and prophetic ministry, equipped by God to
                bring prophetic intelligence and Raise Kings for God through the
                teaching of God's word and prayers, prophetic meetings,
                apostolic trainings, and equipping centers.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.foot}>
          <div className={classes["footer--2"]}>
            <div className={classes.resources}>
              <h1>Resources</h1>
              <ul>
                <li className={classes.move}>
                  <p>Volunteers</p>
                </li>
                <li className={classes.move}>
                  <p>Blog</p>
                </li>
                <li className={classes.move}>
                  <p>Download Teachings</p>
                </li>
                <li className={classes.move}>
                  <p>Tithe, Offerings, Seed sowing</p>
                </li>
                <li className={classes.move}>
                  <p>Prayer Request</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes["footer--3"]}>
            <div className={classes.address}>
              <h2>Address</h2>
              <div className={classes.location}>
                <h6 className="w-8 h-6 text-red-700">{location}</h6>
                <p className={`${classes.move} pl-2`}>Abuja, Nigeria</p>
              </div>
              <div className="phone flex">
                <h6 className="w-6 h-6 text-red-700">{phone}</h6>
                <p className={`${classes.move} pl-2`}>+234-814-653-0168</p>
              </div>
              <div className="mail flex">
                <h6 className="w-6 h-6 text-red-700">{mail}</h6>
                <p className={`${classes.move} pl-2`}>
                  support@cityofdavidassembly.org
                </p>
              </div>
              <div className="icons">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-[80%]" />

      <div className={`${classes["footer--footer"]}`}>
        <div className={`${classes["foo--1"]} pb-10`}>
          &copy;{currentDate} City of David Assembly, designed by{" "}
          <span>CODA IT Department</span>
        </div>

        {/* <div className={classes["foo--2"]}>Privacy | Terms & Condition</div> */}
      </div>
    </section>
  );
};

export default Footer;
