import React from "react";
import LogoCompany from "../../../assets/logo-company.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full flex justify-center top-0 right-0 left-0 sticky py-2 z-50 bg-white ">
      <div className="container flex justify-between">
        <div className="flex flex-row">
          <Link to="/" className="flex flex-row ">
            <img src={LogoCompany} loading="lazy" alt="Sagara" />
            <div className="flex flex-col items-start font-extrabold ml-2">
              <span>SAGARA</span>
              <span>
                TECH<a className="text-RED01">.</a>
              </span>
            </div>
          </Link>
          <div></div>
        </div>
        <div className="flex items-center">
          <button className="bg-RED01 px-6 py-2 rounded-[4px] text-white font-bold">
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
