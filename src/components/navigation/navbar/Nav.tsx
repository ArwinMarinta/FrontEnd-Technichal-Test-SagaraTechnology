import React from "react";
import LogoCompany from "../../../assets/logo-company.svg";
import { Link } from "react-router-dom";
import ArrowIcon from "../../../assets/arrow-down.svg";
import HamburgerIcon from "../../../assets/hamburger.svg";

const Nav = () => {
  return (
    <nav className="w-full flex justify-center top-0  sticky py-2 z-50 bg-white ">
      <div className="container flex justify-between">
        <div className="hidden lg:flex lg:flex-row gap-16">
          <Link to="/" className="flex flex-row ">
            <img src={LogoCompany} loading="lazy" alt="Sagara" />
            <div className="flex flex-col items-start font-extrabold ml-2">
              <span>SAGARA</span>
              <span>
                TECH<a className="text-RED01">.</a>
              </span>
            </div>
          </Link>
          <ul className="flex flex-row items-center text-[#9E9E9E] gap-6">
            <li>
              <Link to="">IT CERTIFICATION</Link>
            </li>
            <li className="flex flex-row items-center gap-1">
              <Link to="">CAREERS</Link>
              <img src={ArrowIcon} alt="..." loading="lazy" />
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <button className="">
            <img src={HamburgerIcon} alt="..." loading="lazy" className="w-7" />
          </button>
        </div>

        <div className="flex items-center">
          <button className="bg-RED01 px-6 py-2 rounded-[4px] text-white font-bold">
            <Link to="/admin/dashboard">SIGN IN</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
