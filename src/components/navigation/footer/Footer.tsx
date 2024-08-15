// import React from "react";
import LogoCompany from "../../../assets/logo-company.svg";
import { Link } from "react-router-dom";
import FacebookIcon from "../../../assets/footer/facebook.svg";
import InstagramIcon from "../../../assets/footer/instagram.svg";
import LinkedinIcon from "../../../assets/footer/linkedin.svg";
import TwitterIcon from "../../../assets/footer/twitter.svg";
import ContatcIcon from "../../../assets/footer/telephone.svg";
import EmailIcon from "../../../assets/footer/email.svg";
import LocationIcon from "../../../assets/footer/location.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] w-full ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-12">
        <div className="md:flex lg:justify-between">
          <div className="flex flex-col">
            <Link
              to="/admin/dashboard"
              className="flex flex-row  font-bold text-white items-center mb-6 md:mb-0"
            >
              <div>
                <img
                  src={LogoCompany}
                  alt="Sagara"
                  loading="lazy"
                  className="lg:w-14 w-20"
                />
              </div>
              <h1 className="ml-2 lg:text-lg text-2xl">
                SAGARA <br /> TECH
              </h1>
            </Link>

            <p className="text-[#F2F2F2] mt-2 lg:mt-6">
              Plan, build, grow digital products. Continuously <br /> delivering impact.
            </p>
            <ul className="flex flex-row mt-6 gap-4">
              <li>
                <img src={FacebookIcon} alt="..." loading="lazy" className="h-10" />
              </li>
              <li>
                <img src={TwitterIcon} alt="..." loading="lazy" className="h-10" />
              </li>
              <li>
                <img src={LinkedinIcon} alt="..." loading="lazy" className="h-10" />
              </li>
              <li>
                <img src={InstagramIcon} alt="..." loading="lazy" className="h-10" />
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-10 lg:mt-0">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    IT Certification
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Terms & Condition
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Careers
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Front End Developer
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Back End Developer
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Quality Assurance
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm  font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 flex flex-row  items-start  hover:underline gap-2">
                  <img src={ContatcIcon} alt="..." className="w-4" />
                  <a href="#" className="">
                    +62 856-4097-7356
                  </a>
                </li>
                <li className="mb-4 flex flex-row gap-2 hover:underline">
                  <img src={EmailIcon} alt="..." className="w-4" />
                  <a href="#" className="">
                    consult@sagara.asia
                  </a>
                </li>
                <li className="mb-4 flex flex-row justify-start items-start gap-2 hover:underline">
                  <img src={LocationIcon} alt="..." className="w-5" />
                  <a href="#" className="">
                    South Jakarta and Bandung, <br />
                    Indonesia.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6  sm:mx-auto " /> */}
        <div className="flex justify-center mt-16 ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2024{" "}
            <a href="https://sagaratechnology.com/id" className="hover:underline">
              PT. Sagara Asia Teknologi
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
