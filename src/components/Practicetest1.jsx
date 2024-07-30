import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import pt from "../assets/pt.svg";
import { useUser } from "../store/UserContext";
// import Header from "./Header";

const Domains = ["web development", "machine learning", "data science", "networking", "blockchain", "cybersecurity"]

function Practicetest1() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [domain, setDomain] = useState('');
  const [exp, setExp] = useState('');
  const [conf, setConf] = useState(false);
  const { user } = useUser();

  const navigate = useNavigate()
  function handleLinkClick() {
    localStorage.setItem('testData', JSON.stringify({ fName: fname, lName: lname, domain: domain, experience: exp }));
    window.open('/test', "Test Page", `width=${window.screen.width},height=${window.screen.height},menubar=no,location=no,resizable=no,scrollbars=yes,status=no`)
  }

  function handleSubmitModal() {
    setConf(true);
  }

  return (
    <>
      <div className="flex justify-center w-full mt-8 md:mt-12 lg:mt-2">
        <div className="w-[95%] sm:w-[90%] lg:w-[80%] flex justify-center text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            WELCOME TO
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FF7C1D]">
              PRACTICE TEST
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full mt-8 mb-2">
        <div className="bg-white w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center">
          {/* Practice Test Section */}
          {conf ? (
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
                  <p className="bg-[#FF7C1D] text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full text-xs sm:text-sm md:text-base">
                    2
                  </p>
                  <p className="text-[#FF7C1D] text-sm sm:text-base md:text-lg">
                    Certification Test
                  </p>
                </div>
              </div>

              {/* Input Fields */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 w-full">
                <select
                  required
                  value={domain}
                  name="experience"
                  onChange={(e) => {
                    setDomain(e.target.value);
                  }}
                  className="w-full sm:w-[45%] px-4 py-2 rounded-xl bg-gray-200 text-xs sm:text-sm md:text-base focus:outline-none glowing-border placeholder-orange-500"
                >
                  <option value="" disabled>
                    Domain
                  </option>
                  {Domains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
                <select
                  required
                  value={exp}
                  name="experience"
                  onChange={(e) => {
                    setExp(e.target.value);
                  }}
                  className="w-full sm:w-[45%] px-4 py-2 rounded-xl bg-gray-200 text-xs sm:text-sm md:text-base focus:outline-none glowing-border placeholder-orange-500"
                >
                  <option value="" disabled>
                    Experience Level
                  </option>
                  <option value="beginner (0-2 yrs)">Beginner &#40;0-2 yrs&#41;</option>
                  <option value="intermediate (3-5 yrs)">Intermediate &#40;3-5 yrs&#41;</option>
                  <option value="advanced (5+ yrs)">Advanced &#40;5+ yrs&#41;</option>
                </select>
              </div>

              {/* Proceed Button */}
              <div className="flex justify-center items-center mt-6 w-full">
                <button
                  onClick={handleLinkClick}
                  className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 text-xs sm:text-sm md:text-base"
                >
                  Proceed
                </button>
              </div>
            </>
          ) : (
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
                  onClick={handleSubmitModal}
                  className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 text-xs sm:text-sm md:text-base"
                >
                  Proceed
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Practicetest1;
