// import React from "react";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import NavAdmin from "../../../components/navigation/navbar/NavAdmin";
import DateIcon from "../../../assets/date.svg";
import ArrowIcon from "../../../assets/arrow-down.svg";
// import { courses } from "../../../types/course";
import CourseStatic from "../../../data/course.json";
import { DashboardType } from "../../../data/dashboard";
import CardDashboard from "../../../components/card/dashboard-card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi skala dan komponen yang diperlukan
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const isCourse = CourseStatic && CourseStatic.length > 0;

  const courseData = {
    labels: isCourse ? CourseStatic.map((data) => data.name.toString()) : [],

    datasets: [
      {
        label: "sum",
        data: isCourse ? CourseStatic.map((data) => data.total) : [],
        backgroundColor: ["#A51535"],
      },
    ],
  };
  return (
    <main className="flex justify-center min-h-screen bg-WHITE01 ">
      <div className="lg:w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[100%] lg:w-[80%]">
        <NavAdmin />
        <div className="flex flex-row justify-center">
          <div className="container py-12 ">
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
            <section
              id="section-2"
              className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14"
            >
              {DashboardType.map((data) => (
                <CardDashboard key={data.id} item={data} />
              ))}
            </section>
            <section id="section-3" className="p-10 bg-white mt-16 rounded-[4px]">
              <span className="text-5xl font-bold ">Student</span>
              <div className="mt-14 ">
                <Bar data={courseData} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
