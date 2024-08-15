// import React from "react";
import { useState } from "react";
import ProfileIcon from "../../../assets/profile.svg";
import ArrowIcon from "../../../assets/arrow-down.svg";
import HamburgerIcon from "../../../assets/hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import LogoCompany from "../../../assets/logo-company.svg";
import DashboardWhiteIcon from "../../../assets/dashboard/dashboard-icon.svg";
import DashboardGrayIcon from "../../../assets/dashboard/dashboard-grey.svg";
import StudentsGreyIcon from "../../../assets/dashboard/students-icon.svg";
import StudentsWhiteIcon from "../../../assets/dashboard/student-white.svg";

const NavAdmin = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className="w-full py-5  px-5 flex flex-row justify-between  top-0 z-30  bg-white border-[1px] sticky  left-0 border-GRAY04 drop-shadow-sm">
      <div className="lg:hidden flex items-center justify-center">
        <button className="flex items-center" onClick={handleToggleSidebar}>
          <img src={HamburgerIcon} alt="..." className="h-8" />
        </button>
      </div>
      <div className="flex justify-end w-full container items-center gap-4">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-GRAY02">Thomas Anree</span>
          <span className="font-bold text-xs text-end text-GRAY03">Admin</span>
        </div>
        <img src={ProfileIcon} alt="..." loading="lazy" />
        <button>
          <img src={ArrowIcon} alt="..." loading="lazy" />
        </button>
      </div>

      <div
        className={`lg:hidden w-1/2 min-h-screen  ${
          isSidebarOpen ? "block" : "hidden"
        } fixed top-0 left-0 bottom-0  bg-RED01 z-50 px-6 py-4 shadow-md`}
      >
        <div className="flex flex-col gap-6 w-full ">
          <div className="w-full flex justify-end">
            <button onClick={handleToggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </button>
          </div>
          <div>
            <button
              onClick={handleToggleSidebar}
              className="flex flex-row justify-between font-Montserrat font-bold gap-1 text-black"
            >
              <Link
                to="/admin/dashboard"
                className="flex flex-row  font-bold text-white items-center "
              >
                <div>
                  <img src={LogoCompany} alt="Sagara" loading="lazy" className="w-16" />
                </div>
                <h1 className="ml-2 text-lg">
                  SAGARA <br /> TECH
                </h1>
              </Link>
            </button>
          </div>
          <div className="flex flex-col text-base font-semibold text-white font-Montserrat ">
            <span className="text-GRAY01 mb-4">MENU</span>
            <Link
              to="/admin/dashboard"
              className={` w-full flex flex-row  px-3 rounded-[5px] py-2 ' ${
                location.pathname === "/admin/dashboard" ? "bg-RED01" : "text-GRAY01"
              }`}
            >
              <img
                src={`${
                  location.pathname === "/admin/dashboard"
                    ? DashboardWhiteIcon
                    : DashboardGrayIcon
                }`}
                alt="..."
                loading="lazy"
              />
              <span className="ml-3">Dashboard</span>
            </Link>
            <Link
              to="/admin/students"
              className={` w-full flex flex-row  px-3 rounded-[5px] py-2 ' ${
                location.pathname === "/admin/students" ? "bg-RED01" : "text-GRAY01"
              }`}
            >
              <img
                src={`${
                  location.pathname === "/admin/students"
                    ? StudentsWhiteIcon
                    : StudentsGreyIcon
                }`}
                alt="..."
                loading="lazy"
              />
              <span className="ml-3">Students</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
