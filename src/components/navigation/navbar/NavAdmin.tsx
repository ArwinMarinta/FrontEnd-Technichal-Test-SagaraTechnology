import React from "react";
import ProfileIcon from "../../../assets/profile.svg";
import ArrowIcon from "../../../assets/arrow-down.svg";

const NavAdmin = () => {
  return (
    <nav className="w-full py-5 flex justify-center  top-0 z-20 bg-white border-[1px] border-GRAY04 drop-shadow-sm">
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
