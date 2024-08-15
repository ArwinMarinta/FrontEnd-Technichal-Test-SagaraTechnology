// import React, { useState } from "react";
import Nav from "../../../components/navigation/navbar/Nav";
import Footer from "../../../components/navigation/footer/Footer";

import Background from "../../../assets/landing-page/background-section1.svg";
import ImageSection3 from "../../../assets/landing-page/image-section3.svg";
import { Section3, Section5, Section52 } from "../../../data/landing";
import CardSection from "../../../components/card/section3-card";
import Image3 from "../../../assets/landing-page/image-section4.svg";
import Image5 from "../../../assets/landing-page/image-section5.svg";

import Timeline from "../../../components/landing-page/Timeline";

const Home = () => {
  const type = "Front End Developer";
  return (
    <>
      <Nav />
      <main className="w-full flex flex-col justify-center items-center">
        <section id="section-1" className="relative w-full flex justify-center ">
          <img
            src={Background}
            alt="..."
            loading="lazy"
            className="w-full h-[400px] lg:h-[500px] object-cover object-center "
          />
          <div className="absolute z-10 inset-0 container  lg:w-[60%] w-[90%] flex flex-col  justify-center">
            <span>
              <h1 className="text-white font-bold lg:text-6xl text-4xl ">
                Live Your Best Life <br />
                Using Your Strengths
              </h1>
            </span>
            <p className="text-white lg:w-[68%] mt-5">
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
          className="container flex flex-col lg:flex-row w-full lg:justify-between justify-center py-14 gap-14 lg:gap-0 "
        >
          <div className="flex justify-center lg:items-center lg:justify-start  lg:w-[30%] text-[24px] font-semibold ">
            <span className="border-t-4 border-black ">ABOUT US</span>
          </div>
          <div className="w-full">
            <span className="font-semibold text-2xl text-RED01">
              SAGARA IT CERTIFICATION{" "}
            </span>
            <p className="lg:text-[40px] text-3xl mt-5 font-bold bg-gradient-to-r from-[#353535]  to-[#A51535] bg-clip-text text-transparent">
              <a className="text-RED01">Join thousands</a> of professionals who have
              elevated their skills and carved out success in the technology industry.
              Start your journey to excellence with us today!
            </p>
            <p className="text-GRAY01 mt-6 lg:mt-3  font-normal lg:text-2xl text-xl ">
              Boost your career prospects in the digital era with industry-recognized
              information technology certifications from Sagara IT Certification.{" "}
            </p>
          </div>
        </section>

        <section
          id="section-3"
          className="container flex flex-col lg:flex-row w-full lg:justify-between py-14 gap-8"
        >
          <div className="w-full flex flex-col ">
            <h1 className="lg:text-[40px] text-3xl text-RED01 font-extrabold text-center lg:text-start">
              WHY SAGARA <br /> IT CERTIFICATION?
            </h1>
            <div className="flex flex-col gap-10 mt-10">
              {Section3.map((data) => (
                <CardSection key={data.id} item={data} />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-end mt-8 lg:mt-0">
            <img
              src={ImageSection3}
              alt="..."
              loading="lazy"
              className="  rounded-[14px] "
            />
          </div>
        </section>
        <section
          id="section-4"
          className="container flex flex-col w-full items-center justify-center py-12"
        >
          <div className="flex flex-col w-full items-center">
            <div className="py-[2px] bg-RED01 rounded-md text-center flex justify-center w-full max-w-28"></div>
            <h3 className="text-[40px] mt-10 font-normal text-RED01 text-center">
              How Sagara
            </h3>
            <h1 className="text-RED01 font-extrabold text-[40px] text-center">
              IT-Certification Works
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:justify-between mt-24">
            <div className="w-full">
              <img src={Image3} alt="..." loading="lazy" />
            </div>
            <div className="w-full mt-16 lg:mt-0 px-8 lg:px-2">
              <Timeline />
            </div>
          </div>
        </section>
        <section
          id="section-5"
          className="container flex flex-col items-center py-12 rounded-[4px] w-full h-full"
        >
          <div className="flex flex-col w-full items-center">
            <div className="py-[2px] bg-RED01 rounded-md text-center flex justify-center w-full max-w-28"></div>
            <h3 className="lg:text-[40px] text-3xl mt-10 font-normal text-RED01 text-center">
              Empower Yourself with
            </h3>
            <h1 className="text-RED01 font-extrabold lg:text-[40px] text-3xl mt-4 lg:mt-0 text-center">
              Our Certification
            </h1>
          </div>
          <div className="flex flex-row w-full lg:gap-10 gap-5 mt-10 overflow-x-hidden">
            {Section5.map((data) => (
              <div
                key={data.id}
                className={`w-full border-GRAY07 whitespace-nowrap    cursor-pointer rounded-[4px] border uppercase py-2 text-center px-6  ${
                  type === data.title ? "bg-RED01 text-white" : ""
                }`}
              >
                {data.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:justify-between  mt-8 h-full gap-6">
            <div className="w-full">
              <img src={Image5} alt="..." loading="lazy" className="w-full" />
            </div>
            <div className=" flex w-full  flex-col justify-center ">
              <h1 className="font-bold text-4xl text-RED01 text-center lg:text-start">
                Front End Certification
              </h1>
              <div className="flex flex-col w-full justify-center h-ful gap-6 mt-8 px-6 lg:px-2">
                {Section52.map((data) => (
                  <div key={data.id} className="flex flex-row items-center ">
                    <div>
                      <img src={data.icon} alt="..." className="w-20" />
                    </div>
                    <p className="font-normal text-base ml-9">{data.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <button className="py-2 px-14 bg-RED01 text-lg  text-white rounded-[4px]">
                  Get Detail
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
