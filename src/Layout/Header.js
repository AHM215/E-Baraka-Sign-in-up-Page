import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <NavLink to="/home">
            <img alt="logo" src={Logo} />
          </NavLink>
        </div>
        <div className={classes.headernav}>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/features">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.headeraction}>
          <Link to="/signin">
            <button className={classes.loginbutton}>Sign in</button>
          </Link>
          <Link to="/register">
            <button className={classes.regbutton}>Register</button>
          </Link>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
