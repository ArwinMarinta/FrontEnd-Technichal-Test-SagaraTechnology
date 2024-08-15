import React from "react";
import ProfileIcon from "../../../assets/profile.svg";
import ArrowIcon from "../../../assets/arrow-down.svg";
import HamburgerIcon from "../../../assets/hamburger.svg";

const NavAdmin = () => {
  return (
    <nav className="w-full py-5  px-5 flex flex-row justify-between  top-0 z-30  bg-white border-[1px] sticky  left-0 border-GRAY04 drop-shadow-sm">
      <div className="lg:hidden flex items-center justify-center">
        <button className="flex items-center">
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
    </nav>
  );
};

export default NavAdmin;
