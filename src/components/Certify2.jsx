import React,{useState} from "react";
import { Link, useLocation } from "react-router-dom";
// import Header from './Header';
import Navbar from "./Navbar";
import Footer from "./Footer";
import cert2pic from "../assets/cert2pic.svg";
import tick from "../assets/tick.svg";
import lkdn from "../assets/in.svg";
import pen from "../assets/pen.svg";
import thumb from "../assets/thumb.svg";
import bag from "../assets/bag.svg";
import user from "../assets/user.svg";
import aim from "../assets/aim.svg";
import arrow from "../assets/arrow.svg";
import clock from "../assets/clock.svg";
import cube from "../assets/cube.svg";
import certify3 from "./Certify3";
import { useNavigate } from "react-router-dom";
// import arrow from "../assets/arrow.svg";
import pt from "../assets/pt.svg";

function CertificationPage() {
  const location=useLocation();
  const {testId,title}=location.state
  const navigate = useNavigate();
  const [name,setName]=useState(false);
  const [fname,setFname]=useState('');
  const [lname,setLname]=useState('');

  const handleTestOpen = () => {
    setName(true);
    
  };

  return (
    <>
{name?<><NamePage testId={testId}/></>:    <>
      <Navbar />
      <div className="flex items-center justify-center w-full mt-12">
        <div className="flex flex-col md:flex-row bg-black text-white py-10 px-4 md:px-8 lg:px-16">
          <div className="flex-1 flex flex-col justify-center items-start text-left gap-4 md:pr-4 lg:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
              Verify your {title}. Accelerate your Job Search
            </h1>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mt-4 font-light">
              Take the TCx Certification Test and showcase your knowledge as a TCx verified Gen AI Specialist
            </p>
            
            <button onClick={handleTestOpen} className="bg-orange-600 text-white py-2 px-6 rounded-md text-lg mt-6 hover:bg-orange-500">
              Take your test
            </button>
          </div>
          <div className="flex-1 flex justify-end items-end mt-6 md:mt-0">
            <img src={cert2pic} alt="Certification Illustration" className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
          </div>
        </div>
      </div>

      <div className="bg-[#111827] py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
              Your Journey to Mastery Begins Here!
            </h2>
          </div>

          {/* Right Column: Pointers */}
          <div className="flex flex-col gap-6">
            {/* First Pointer */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <img src={tick} alt="Prove your Skills" className="w-8 h-8" />
                <p className="text-lg md:text-xl lg:text-3xl text-white font-light">
                  Prove your Skills
                </p>
              </div>
              <p className="mt-2 text-lg md:text-xl lg:text-xl font-light text-gray-400">
                Take the TCx Certification Test and showcase your knowledge as a
                TCx verified Gen AI Specialist
              </p>
            </div>

            {/* Second Pointer */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <img
                  src={aim}
                  alt="Get Certified in 19 mins"
                  className="w-8 h-8"
                />
                <p className="text-lg md:text-xl lg:text-3xl text-white font-light">
                  Get Certified in 19 mins
                </p>
              </div>
              <p className="mt-2 text-lg md:text-xl lg:text-xl text-gray-400 font-light">
                Take the TCx Certification Test and showcase your knowledge as a
                TCx verified Gen AI Specialist
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white pb-6">
            Worried About The Layoffs
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <img src={user} alt="Update profile" className="w-16 h-16" />
              <p className="mt-2 text-lg">Update profile</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center mx-4">
              <img src={arrow} alt="Arrow" className="w-6 h-6" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <img src={pen} alt="Take the test" className="w-16 h-16" />
              <p className="mt-2 text-lg">Take the test</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center mx-4">
              <img src={arrow} alt="Arrow" className="w-6 h-6" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <img src={bag} alt="Get Certified" className="w-16 h-16" />
              <p className="mt-2 text-lg">Get Certified</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center mx-4">
              <img src={arrow} alt="Arrow" className="w-6 h-6" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <img src={lkdn} alt="Post on LinkedIn" className="w-16 h-16" />
              <p className="mt-2 text-lg">Post on LinkedIn</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center mx-4">
              <img src={arrow} alt="Arrow" className="w-6 h-6" />
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <img
                src={thumb}
                alt="Become more Employable"
                className="w-16 h-16"
              />
              <p className="mt-2 text-lg">Become more Employable</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] py-10">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white">
            No Worries. Zero risk.
          </h2>
          <p className="text-lg md:text-xl lg:text-xl text-gray-400">
            If you fail to clear the test, no harm done. Your score will remain
            private and will not be shared with any company. You will be allowed
            to retake the test(if available) after a stipulated number of days.
          </p>
        </div>
      </div>

      <div className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
              Things to know before taking the test
            </h2>
          </div>

          {/* Right Column: Pointers */}
          <div className="flex flex-col gap-6">
            {/* First Pointer */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <img src={clock} alt="Prove your Skills" className="w-8 h-8" />
                <p className="text-lg md:text-xl lg:text-3xl text-white font-light">
                  20 questions in 19 mins
                </p>
              </div>
              <p className="mt-2 text-lg md:text-xl lg:text-xl font-light text-gray-400">
                Take the TCx Certification Test and showcase your knowledge as a
                TCx verified Gen AI Specialist
              </p>
            </div>

            {/* Second Pointer */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <img
                  src={cube}
                  alt="Get Certified in 19 mins"
                  className="w-8 h-8"
                />
                <p className="text-lg md:text-xl lg:text-3xl text-white font-light">
                  It covers all GenAI concepts
                </p>
              </div>
              <p className="mt-2 text-lg md:text-xl lg:text-xl font-light text-gray-400">
                Take the TCx Certification Test and showcase your knowledge as a
                TCx verified Gen AI Specialist
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-orange-600 text-white py-2 px-6 rounded-md text-lg mt-6 hover:bg-orange-500">
            Take your test
          </button>
        </div>
      </div>

      <Footer />
      </>}
    </>
  );
}


const NamePage = ({testId}) => {
  const [fname,setFname]=useState();
  const [lname,setLname]=useState();
  const navigate=useNavigate();

  const handleOpenModal=()=>{
    navigate('/test',{state:{fName:fname,lName:lname,testId:testId}})
  }
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={pt}
          alt="Practice Test"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 md:mb-0"
        />
        <div className="ml-0 md:ml-6 text-center md:text-left">
          <p className="text-black text-xl sm:text-2xl md:text-3xl pt-4 md:pt-6">
            Practice Test
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            300 seconds
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex justify-center items-center mt-6 md:mt-4 space-x-6 sm:space-x-8 lg:space-x-10">
        {/* Step 1 */}
        <div className="flex items-center space-x-2">
          <p className="bg-[#FF7C1D] text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full text-xs sm:text-sm md:text-base">
            1
          </p>
          <p className="text-[#FF7C1D] text-sm sm:text-base md:text-lg">
            Review Profile
          </p>
        </div>
        <img
          src={arrow}
          alt="Arrow"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        />
        {/* Step 2 */}
        <div className="flex items-center space-x-2">
          <p className="bg-[#8C8C8C] text-black w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full text-xs sm:text-sm md:text-base">
            2
          </p>
          <p className="text-[#8C8C8C] text-sm sm:text-base md:text-lg">
            Certification Test
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 w-full">
        <input
          type="text"
          required
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
          placeholder="First name*"
          className="w-full sm:w-[45%] px-4 py-2 rounded-xl bg-gray-200 text-xs sm:text-sm md:text-base focus:outline-none glowing-border placeholder-orange-500"
        />
        <input
          type="text"
          required
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
          placeholder="Last name*"
          className="w-full sm:w-[45%] px-4 py-2 rounded-xl bg-gray-200 text-xs sm:text-sm md:text-base focus:outline-none glowing-border placeholder-orange-500"
        />
      </div>

      {/* Proceed Button */}
      <div className="flex justify-center items-center mt-6 w-full">
        <button
          onClick={handleOpenModal}
          className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 text-xs sm:text-sm md:text-base"
        >
          Proceed
        </button>
      </div>
    </>
  );
};

export default CertificationPage;
