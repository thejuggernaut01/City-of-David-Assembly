import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Homepage/Navbar";
import Footer from "../components/Homepage/Footer";
import classes from "./BlogPage.module.css";

export default function BlogRoute() {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1].toUpperCase();
  return (
    <>
      <header className={`${classes["blog-header"]}`}>
        <Navbar />
        <h1 className={classes.h1}>{pathName}</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
