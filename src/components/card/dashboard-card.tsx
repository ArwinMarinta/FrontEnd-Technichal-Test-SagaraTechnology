import React from "react";
import Uptren from "../../assets/dashboard/uptren-icon.svg";

import { dashboard } from "../../data/dashboard";

interface DashboardProps {
  item: dashboard;
}

const DashboardCard: React.FC<DashboardProps> = ({ item }) => {
  return (
    <div className="bg-white shadow-sm md:p-6 p-10 flex flex-row justify-between rounded-[4px] border-[1px] border-GRAY04">
      <div className="flex flex-col gap-8">
        <h1 className="text-base font-bold text-GRAY05">{item.type}</h1>
        <span className="font-bold text-2xl">{item.total}</span>
        <span className="flex flex-row gap-2 font-medium text-base">
          <img src={Uptren} alt=".." loading="lazy" />
          <span className="text-GRAY06">
            <a className="text-GREEN01">{item.percentage}</a> Up from yesterday
          </span>
        </span>
      </div>
      <div className="px-2">
        <img src={item.icon} alt=".." loading="lazy" />
      </div>
    </div>
  );
};

export default DashboardCard;
