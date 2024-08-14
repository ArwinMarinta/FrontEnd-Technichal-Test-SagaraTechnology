import React from "react";
import Nav from "../../../components/navigation/navbar/Nav";
import Background from "../../../assets/landing-page/background-section1.svg";
import ImageSection3 from "../../../assets/landing-page/image-section3.svg";
import { Section3 } from "../../../data/landing";
import CardSection from "../../../components/card/section3-card";

const Home = () => {
  return (
    <>
      <Nav />
      <main className="w-full flex flex-col justify-center items-center">
        <section id="section-1" className="relative w-full ">
          <img src={Background} alt="..." loading="lazy" className="w-full" />
          <div className="absolute z-10 inset-0 container w-[60%] flex flex-col  justify-center">
            <div>
              <h1 className="text-white font-bold text-6xl ">Live Your Best Life</h1>
              <h1 className="text-white font-bold text-6xl ">Using Your Strengths</h1>
            </div>
            <p className="text-white w-[68%] mt-5">
              Meet some of the people who have completed the Sagara Technology and use
              their results to maximize their potential at work and everywhere else
            </p>
            <div>
              <button className="py-2 px-6 bg-RED01 text-white rounded-[4px] mt-8 text-lg font-bold ">
                Get Certification
              </button>
            </div>
          </div>
        </section>

        <section
          id="section-2"
          className="container flex flex-row w-full justify-between py-10 "
        >
          <div className="flex items-center justify-start w-[30%] text-[24px] font-semibold ">
            <span className="border-t-4 border-black ">ABOUT US</span>
          </div>
          <div className="w-full">
            <span className="font-semibold text-2xl text-RED01">
              SAGARA IT CERTIFICATION{" "}
            </span>
            <p className="text-[40px] mt-5 font-bold bg-gradient-to-r from-[#353535]  to-[#A51535] bg-clip-text text-transparent">
              <a className="text-RED01">Join thousands</a> of professionals who have
              elevated their skills and carved out success in the technology industry.
              Start your journey to excellence with us today!
            </p>
            <p className="text-GRAY01 mt-3  font-normal text-2xl">
              Boost your career prospects in the digital era with industry-recognized
              information technology certifications from Sagara IT Certification.{" "}
            </p>
          </div>
        </section>

        <section
          id="section-3"
          className="container flex flex-row justify-between py-10 gap-8"
        >
          <div className="w-full flex flex-col ">
            <h1 className="text-[40px] text-RED01 font-extrabold">
              WHY SAGARA <br /> IT CERTIFICATION?
            </h1>
            <div className="flex flex-col gap-10 mt-10">
              {Section3.map((data) => (
                <CardSection key={data.id} item={data} />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <img
              src={ImageSection3}
              alt="..."
              loading="lazy"
              className="  rounded-[14px]"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
