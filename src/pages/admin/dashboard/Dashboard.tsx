import React from "react";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import NavAdmin from "../../../components/navigation/navbar/NavAdmin";
import DateIcon from "../../../assets/date.svg";
import ArrowIcon from "../../../assets/arrow-down.svg";

import { DashboardType } from "../../../data/dashboard";
import CardDashboard from "../../../components/card/dashboard-card";

const Dashboard = () => {
  return (
    <main className="flex flex-row w-full h-full bg-WHITE01 ">
      <>
        <Sidebar />
        <div className="flex flex-col w-full items-center">
          <>
            <NavAdmin />
            <div className="container py-14">
              <section id="section-1" className="flex flex-row justify-between">
                <div className=" w-full">
                  <div className="flex flex-row shadow-sm bg-white border-[1px] border-GRAY04 max-w-fit px-6 rounded-[4px]  py-2 ">
                    <img src={DateIcon} />
                    <span className="text-GRAY01 ml-2">Dec 29, 2023 - Jan 4, 2024</span>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className="flex flex-row border-[1px] shadow-sm border-GRAY04 bg-white py-2 px-4 rounded-[4px] items-center">
                    <span>Daily</span>
                    <img src={ArrowIcon} />
                  </button>
                </div>
              </section>
              <section id="section-2" className="grid grid-cols-3 gap-10 mt-14">
                {DashboardType.map((data) => (
                  <CardDashboard key={data.id} item={data} />
                ))}
              </section>
              <section id="section-3" className="">
                <div></div>
              </section>
            </div>
          </>
        </div>
      </>
    </main>
  );
};

export default Dashboard;
