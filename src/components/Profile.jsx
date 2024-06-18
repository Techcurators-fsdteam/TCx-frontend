import "../index.css";
import { Link } from "react-router-dom";
import certificate from "../assets/certificate.svg";
import education from "../assets/education.svg";
import links from "../assets/links.svg";
import work from "../assets/work.svg";
import cert1 from "../assets/cert1.svg";
import cert2 from "../assets/cert2.svg";
import { useUser } from "../store/UserContext";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Profil from "../assets/profile.jpg";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function Profile() {
  const { user } = useUser();
  console.log(user);
  return (
    <>
      <div className="flex justify-center text-center py-8">
        <div className="flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] gap-4">
          {/* Left Profile Box */}
          <div className="w-full md:w-[45%] lg:w-[30%] mt-6 flex flex-col gap-4">
            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-2">
                {user.picture.length > 0 ? (
                  <>
                    <img
                      src={user.picture}
                      alt="Image Not Found"
                      className="h-20"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={Profil}
                      alt=""
                      className="w-16 h-16 rounded-full cursor-pointer"
                    />
                  </>
                )}
                <div className="flex flex-col ml-2">
                  <p className="ml-2 text-xl md:text-2xl text-[#FF7C1D]">
                    {user.firstName} {user.lasName}
                  </p>
                  <p className="text-sm md:text-base mb-1 ml-2">
                    @{user.username}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#303031] flex-col text-white text-left rounded-xl p-4 sm:p-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg md:text-xl text-[#FF7C1D]">
                  Personal Information
                </p>
                <p className="text-[#1859F1] cursor-pointer">
                  <Link to="/Editprofile">+ Edit</Link>
                </p>
              </div>
              {user.email && (
                <p className="text-sm md:text-base mb-1 flex">
                  <MdOutlineMailOutline className="mt-1 mr-3" /> {user.email}
                </p>
              )}
              {user.phone && (
                <p className="text-sm md:text-base mb-1 flex">
                  <CiPhone className="mt-[3px] mr-3" /> {user.phone}
                </p>
              )}
              {user.location && (
                <p className="text-sm md:text-base mb-1 flex">
                  <IoLocationOutline className="mt-[3px] mr-3" />{" "}
                  {user.location}
                </p>
              )}
            </div>

            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6">
              <div className="flex  justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                    My Resume
                  </p>
                </div>
                <p className="text-[#1859F1] cursor-pointer">
                  <Link to="/Editresume">+ Add Resume</Link>
                </p>
              </div>
              <Link
                className="flex flex-col justify-center items-center"
                to={user.resume}
              >
                {" "}
                <FaCloudDownloadAlt
                  height="50"
                  width="50"
                  className="mt-1 h-20 w-20"
                />
                <p className="mt-[0.5px]">Download Resume</p>
              </Link>
            </div>
          </div>

          {/* Right Content Box */}
          <div className="w-full md:w-[50%] lg:w-[65%] rounded-xl p-4 sm:p-6 mt-4 md:mt-0">
            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4">
              <div className="flex items-center mb-2">
                <img src={certificate} alt="Certificate" className="h-8 w-8" />
                <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                  Certificates
                </p>
              </div>
              <div className="flex flex-wrap justify-start gap-4">
                <img
                  src={cert1}
                  alt="Certificate 1"
                  className="h-32 w-32 sm:h-28 sm:w-28 md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-md"
                />
                <img
                  src={cert2}
                  alt="Certificate 2"
                  className="h-32 w-32 sm:h-28 sm:w-28 md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-md"
                />
              </div>
            </div>

            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img src={work} alt="Work Experience" className="h-8 w-8" />
                  <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                    Work Experience
                  </p>
                </div>
                <p className="text-[#1859F1] cursor-pointer">
                  {" "}
                  <Link to="/Editwork">+ Add Work Experience</Link>
                </p>
              </div>
              {user.workExp.map((work) => {
                return <WXP work={work} />;
              })}
            </div>

            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img src={education} alt="Education" className="h-8 w-8" />
                  <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                    Education
                  </p>
                </div>
                <p className="text-[#1859F1] cursor-pointer">
                  <Link to="/Editeducation">+ Add Education</Link>
                </p>
              </div>
              {user.education.map((edu)=>{
                return <EDU edu={edu}/>
              })}
            </div>

            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img src={links} alt="Links" className="h-8 w-8" />
                  <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                    Links
                  </p>
                </div>
                <p className="text-[#1859F1] cursor-pointer">
                  <Link to="/Editlink">+ Add Links</Link>
                </p>
              </div>
            </div>

            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img src={work} alt="Skills" className="h-8 w-8" />
                  <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                    Skills
                  </p>
                </div>
                <p className="text-[#1859F1] cursor-pointer">+ Add Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WXP({ work }) {
  console.log(work);
  return (
    <>
      {work && (
        <div className="flex-col w-[95%] ml-2 mt-5">
          <div className="flex">
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "2px" }}
            >
              <rect width="25" height="25" rx="4" fill="white" />
              <path
                d="M5 20H6.5M19.5 20H17.5M17.5 20V9.5L13.5 8M17.5 20H13.5M13.5 8V6H6.5V20M13.5 8V20M6.5 20H13.5M10.5 8.5H12M8 8.5H9.5"
                stroke="#FF7C1D"
              />
              <path d="M9.5 20V17.5H11V20" stroke="#FF7C1D" />
              <path
                d="M8 15.5H9.5M10.5 15.5H12M10.5 13H12M10.5 10.5H12M8 10.5H9.5M8 13H9.5M16 10.5H14.5M14.5 13H16M14.5 15.5H16M14.5 17.5H16"
                stroke="#FF7C1D"
              />
            </svg>
            <div className="ml-5 flex flex-col">
              <h1 className="text-white text-xl font-bold">{work.role}</h1>
              <div className="flex  text-[10px] ">
                <p>{work.company}</p>
                <p className="ml-5">
                  {work.startDate} - {work.endDate}
                </p>
              </div>
            </div>
          </div>
          {work.description && (
            <p className="mt-3 text-white text-sm">{work.description}</p>
          )}
        </div>
      )}
    </>
  );
}

function EDU({ edu }) {
  console.log(work);
  return (
    <>
      {work && (
        <div className="flex-col w-[95%] ml-2 mt-5">
          <div className="flex">
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "2px" }}
            >
              <rect width="25" height="25" rx="4" fill="white" />
              <path
                d="M5 20H6.5M19.5 20H17.5M17.5 20V9.5L13.5 8M17.5 20H13.5M13.5 8V6H6.5V20M13.5 8V20M6.5 20H13.5M10.5 8.5H12M8 8.5H9.5"
                stroke="#FF7C1D"
              />
              <path d="M9.5 20V17.5H11V20" stroke="#FF7C1D" />
              <path
                d="M8 15.5H9.5M10.5 15.5H12M10.5 13H12M10.5 10.5H12M8 10.5H9.5M8 13H9.5M16 10.5H14.5M14.5 13H16M14.5 15.5H16M14.5 17.5H16"
                stroke="#FF7C1D"
              />
            </svg>
            <div className="ml-5 flex flex-col">
              <h1 className="text-white text-xl font-bold">{edu.institution}</h1>
              <div className="flex  text-[10px] ">
                <p>{edu.course},{edu.degree}</p>
                <p className="ml-5">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
          </div>
          {edu.description && (
            <p className="mt-3 text-white text-sm">{edu.description}</p>
          )}
        </div>
      )}
    </>
  );
}

export default Profile;
