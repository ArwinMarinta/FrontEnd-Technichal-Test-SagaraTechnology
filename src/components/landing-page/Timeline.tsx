import Icon1 from "../../assets/landing-page/section-4/icon-1.svg";
import Icon2 from "../../assets/landing-page/section-4/icon-2.svg";
import Icon3 from "../../assets/landing-page/section-4/icon-3.svg";
import Icon4 from "../../assets/landing-page/section-4/icon-4.svg";
import Icon5 from "../../assets/landing-page/section-4/icon-5.svg";

const Timeline = () => {
  return (
    <ol className="relative border-s border-RED01 border-dashed ">
      <li className="mb-6 ms-12">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white drop-shadow-2xl rounded-full -start-4 ring-8 ring-white">
          <img src={Icon1} alt="..." loading="lazy" className="w-7 h-7" />
        </span>
        <label className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
          <span className="text-2xl font-bold">
            <a className="text-RED01">#1</a> Register Account
          </span>
        </label>

        <p className="mb-4 text-base font-normal text-[#9E9E9E] ">
          Begin your journey by creating an account on Sagara IT Certification platform.
          Simply fill out the registration form to get started.
        </p>
      </li>
      <li className="mb-6 ms-12">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white drop-shadow-2xl rounded-full -start-4 ring-8 ring-white">
          <img src={Icon2} alt="..." loading="lazy" className="w-7 h-7" />
        </span>
        <label className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
          <span className="text-2xl font-bold">
            <a className="text-RED01">#2</a> Select the Type
          </span>
        </label>

        <p className="mb-4 text-base font-normal text-[#9E9E9E] ">
          Choose from a variety of IT certification options tailored to your career goals
          and interests. Select the certification that aligns with your expertise.
        </p>
      </li>
      <li className="mb-6 ms-12">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white drop-shadow-2xl rounded-full -start-4 ring-8 ring-white">
          <img src={Icon3} alt="..." loading="lazy" className="w-7 h-7" />
        </span>
        <label className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
          <span className="text-2xl font-bold">
            <a className="text-RED01">#3</a> Register and Pay
          </span>
        </label>

        <p className="mb-4 text-base font-normal text-[#9E9E9E] ">
          Enroll in your chosen certification program by completing the registration
          process and making payment securely through our platform.
        </p>
      </li>
      <li className="mb-6 ms-12">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white drop-shadow-2xl rounded-full -start-4 ring-8 ring-white">
          <img src={Icon4} alt="..." loading="lazy" className="w-7 h-7" />
        </span>
        <label className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
          <span className="text-2xl font-bold">
            <a className="text-RED01">#4</a> Take Test
          </span>
        </label>

        <p className="mb-4 text-base font-normal text-[#9E9E9E] ">
          Prepare for your certification exam and schedule a convenient time to take the
          test online
        </p>
      </li>
      <li className="ms-12">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-white drop-shadow-2xl rounded-full -start-4 ring-8 ring-white">
          <img src={Icon5} alt="..." loading="lazy" className="w-7 h-7" />
        </span>
        <label className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
          <span className="text-2xl font-bold">
            <a className="text-RED01">#5</a> Register and Pay
          </span>
        </label>

        <p className="mb-4 text-base font-normal text-[#9E9E9E] ">
          Upon successful completion of the exam, receive your certification digitally,
          instantly validating your skills and expertise in the chosen IT field.
        </p>
      </li>
    </ol>
  );
};

export default Timeline;
