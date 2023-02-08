import React, { Fragment } from "react";
import classes from "./Header.module.css";
import Logo from "../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";

const CourseHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.headergroup}>
          <NavLink to="/home">
            <img alt="lgo" src={Logo} />
          </NavLink>
        </div>
        <div className={classes.info}>name</div>
        <div>
          <Link to="/home">
            <button className={classes.regbutton}>Log out</button>
          </Link>
        </div>
      </header>
    </Fragment>
  );
};
export default CourseHeader;
