import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoCompany from "../../../assets/logo-company.svg";
import DashboardIcon from "../../../assets/dashboard/dashboard-icon.svg";
import StudentsIcon from "../../../assets/dashboard/students-icon.svg";

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="hidden px-8  lg:flex gap-12  bg-BLACK01   flex-col  w-[280px] min-h-screen py-12 font-Montserrat">
      <Link
        to="/admin/dashboard"
        className="flex flex-row  font-bold text-white items-center "
      >
        <div>
          <img src={LogoCompany} alt="Sagara" loading="lazy" className="w-16" />
        </div>
        <h1 className="ml-2 text-2xl">
          SAGARA <br /> TECH
        </h1>
      </Link>

      <div className="flex flex-col text-base font-semibold text-white font-Montserrat ">
        <span className="text-GRAY01 mb-4">MENU</span>
        <Link
          to="/admin/dashboard"
          className={` w-full flex flex-row  px-3 rounded-[5px] py-2 ' ${
            location.pathname === "/admin/dashboard" ? "bg-RED01" : "text-GRAY01"
          }`}
        >
          <img src={DashboardIcon} alt="..." loading="lazy" />
          <span className="ml-3">Dashboard</span>
        </Link>
        <Link
          to="/admin/students"
          className={` w-full flex flex-row  px-3 rounded-[5px] py-2 ' ${
            location.pathname === "/admin/students" ? "bg-RED01" : "text-GRAY01"
          }`}
        >
          <img src={StudentsIcon} alt="..." loading="lazy" />
          <span className="ml-3">Students</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
