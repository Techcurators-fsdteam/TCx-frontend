import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Li } from "react-router-dom";
import React from "react";
import Header from "./Header";
import rect from "../assets/rect.svg";
import Footer from "./Footer";

function Learn() {
  return (
    <>
      <Header />
      <div className="flex justify-center w-full mt-8 md:mt-12 lg:mt-16">
        <div className="w-[95%] sm:w-[90%] lg:w-[80%] flex justify-center text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            THE FUTURE IS DRIVEN BY DATA,
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FF7C1D]">
              AND AI UNLOCKS ITS POTENTIAL
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-[90%] mt-4 sm:mt-8 md:mt-10 text-white">
          <ul className="flex flex-col sm:flex-row justify-evenly items-center font-semibold text-base sm:text-lg md:text-xl">
            <li className="py-2 sm:py-0 sm:px-4 hover:text-[#FF7C1D] transition-colors duration-300 cursor-pointer">
              <Link
                to="coursesSection"
                smooth={true}
                duration={500}
                offset={-50}
              >
                COURSES
              </Link>
            </li>

            <li className="py-2 sm:py-0 sm:px-4 hover:text-[#FF7C1D] transition-colors duration-300 cursor-pointer">
              <Link
                to="projectsSection"
                smooth={true}
                duration={500}
                offset={-50}
              >
                LIVE PROJECTS
              </Link>
            </li>

            <li className="py-2 sm:py-0 sm:px-4 hover:text-[#FF7C1D] transition-colors duration-300 cursor-pointer">
              <Link to="testsSection" smooth={true} duration={500} offset={-50}>
                PRACTICE TEST
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Courses Section */}

      <div
        id="coursesSection"
        className="text-white flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20"
      >
        <div className="flex w-[90%] max-w-screen-lg">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">
              COURSES
            </p>
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-snug sm:leading-relaxed md:leading-loose">
              Learn how to implement and leverage
              <br className="hidden sm:block" /> GenAI in your profession with
              these
              <br className="hidden sm:block" /> comprehensive courses
            </p>
          </div>
        </div>
      </div>

      <div className="text-black flex flex-col justify-center items-center text-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="flex flex-wrap gap-6 justify-center w-[90%] md:w-[80%] bg-white rounded-xl p-6 sm:p-8 md:p-10">
          <div className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6">
            <div className="flex items-center gap-4 text-white">
              <img
                src={rect}
                alt="Generative AI"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <p className="text-sm sm:text-lg md:text-xl">
                Generative AI Explained
              </p>
            </div>
            <button className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4">
              Learn Now
            </button>
          </div>

          <div className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6">
            <div className="flex items-center gap-4 text-white">
              <img
                src={rect}
                alt="Generative AI"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <p className="text-sm sm:text-lg md:text-xl">
                Generative AI Explained
              </p>
            </div>
            <button className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4">
              Learn Now
            </button>
          </div>

          <div className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6">
            <div className="flex items-center gap-4 text-white">
              <img
                src={rect}
                alt="Generative AI"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <p className="text-sm sm:text-lg md:text-xl">
                Generative AI Explained
              </p>
            </div>
            <button className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4">
              Learn Now
            </button>
          </div>
        </div>
      </div>

      {/* Live Projects Section */}

      <div
        id="projectsSection"
        className="text-white flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20"
      >
        <div className="flex w-[90%] max-w-screen-lg">
          <div>
            <p className="text-2xl  sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">
              LIVE PROJECTS
            </p>
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-snug sm:leading-relaxed md:leading-loose">
              Gain deeper insights with AI-driven analytics that{" "}
              <br className="hidden sm:block" /> provide a comprehensive view of
              candidate <br className="hidden sm:block" /> performance.
            </p>
          </div>
        </div>
      </div>

      <div className="text-black flex flex-col justify-center items-center text-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="flex flex-wrap gap-6 justify-center w-[90%] md:w-[80%] bg-white rounded-xl p-6 sm:p-8 md:p-10">
          <div className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6">
            <div className="flex items-center gap-4 text-white">
              <img
                src={rect}
                alt="Generative AI"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <p className="text-sm sm:text-lg md:text-xl">
                Netflix's Unified Recommendation ML Model
              </p>
            </div>
            <button className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4">
              Learn Now
            </button>
          </div>

          <div className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6">
            <div className="flex items-center gap-4 text-white">
              <img
                src={rect}
                alt="Generative AI"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <p className="text-sm sm:text-lg md:text-xl">
                Netflix's Unified Recommendation ML Model
              </p>
            </div>
            <button className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4">
              Learn Now
            </button>
          </div>

          <div className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6">
            <div className="flex items-center gap-4 text-white">
              <img
                src={rect}
                alt="Generative AI"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <p className="text-sm sm:text-lg md:text-xl">
                Netflix's Unified Recommendation ML Model
              </p>
            </div>
            <button className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4">
              Learn Now
            </button>
          </div>
        </div>
      </div>

      {/* Practice Test Section */}

      <div
        id="testsSection"
        className="text-white flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-10"
      >
        <div className="flex flex-col md:flex-row w-[90%] max-w-screen-lg items-start md:items-center gap-6 md:gap-8 lg:gap-10">
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">
              PRACTICE TEST
            </p>
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-snug sm:leading-relaxed md:leading-loose">
              Benefit from practice tests that adapt to your learning{" "}
              <br className="hidden sm:block" />
              pace and focus on areas needing improvement.
            </p>
          </div>
          <div>
            <Li
              to="/Practicetest1"
              className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4 md:mt-0 self-center md:self-start"
            >
              Take Your Test Now
            </Li>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Learn;
