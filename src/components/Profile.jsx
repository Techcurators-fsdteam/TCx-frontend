import axios from "axios";
import React, { useEffect, useState } from "react";
import profileBG from "../assets/profileBG.webm"
import { RxCross2 as Cross } from "react-icons/rx";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
// import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoCloudDownload as FaCloudDownloadAlt } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import cert1 from "../assets/cert1.svg";
import cert2 from "../assets/cert2.svg";
import certificate from "../assets/certificate.svg";
import education from "../assets/education.svg";
import links from "../assets/links.svg";
import Profil from "../assets/profile.jpg";
import work from "../assets/work.svg";
import "../index.css";
import { useUser } from "../store/UserContext";
import Editeducation from "./Editeducation";
import Editlink from "./Editlink";
import EditProfileForm from "./Editprofile";
import ResumeUploadPage from "./Editresume";
import WorkExperienceForm from "./Editwork";
import Modal from "./Modal";
import AddSkill from "./AddSkills";

function Profile() {
  const { user, fetchUserDetails } = useUser();

  const [isEducationModalOpen, setEducationModalOpen] = useState(false);
  const [isWorkModalOpen, setWorkModalOpen] = useState(false);
  const [isLinkModalOpen, setLinkModalOpen] = useState(false);
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isSkillModalOpen, setSkillModalOpen] = useState(false);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop playsInline className="video-tag" src={profileBG} />
          
      </div>
      <div className="flex justify-center text-center py-8">
        <div className="flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] z-10 xl:w-[70%] gap-4">
          {/* Left Profile Box */}
          <div className="w-full md:w-[45%] lg:w-[30%] mt-6 flex flex-col gap-4">
            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-2">
                {user.picture ? (
                  <>
                    <img
                      src={user.picture}
                      alt="Image Not Found"
                      className="w-16 h-16 rounded-full cursor-pointer"
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
                <p
                  className="text-[#1859F1] cursor-pointer"
                  onClick={() => setProfileModalOpen(true)}
                >
                  + Edit
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
            {user.resume ? (
              <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6">
                <div className="flex  justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                      My Resume
                    </p>
                  </div>
                  <p
                    className="text-[#1859F1] cursor-pointer"
                    onClick={() => setResumeModalOpen(true)}
                  >
                    + Add Resume
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
            ) : (
              <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6">
                <div className="flex  justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                      My Resume
                    </p>
                  </div>
                </div>

                <div className="flex justify-center w-full">
                  <button
                    onClick={() => setResumeModalOpen(true)}
                    className="bg-[#FF7C1D]  mt-5 mb-3 text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 text-[10px] sm:text-sm md:text-xs"
                  >
                    Add Resume
                  </button>
                </div>
              </div>
            )}
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
                <p
                  className="text-[#1859F1] cursor-pointer"
                  onClick={() => setWorkModalOpen(true)}
                >
                  + Add Work Experience
                </p>
              </div>
              {user.workExp?.map((work) => {
                return <WXP key={work.id} work={work} />;
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
                <p
                  className="text-[#1859F1] cursor-pointer"
                  onClick={() => setEducationModalOpen(true)}
                >
                  + Add Education
                </p>
              </div>
              {user.education?.map((edu) => {
                return <EDU key={edu.id} edu={edu} />;
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
                <p
                  className="text-[#1859F1] cursor-pointer"
                  onClick={() => setLinkModalOpen(true)}
                >
                  + Add Links
                </p>
              </div>
              {user.links ? (
                <>
                  {user.links.map((link) => {
                    return <LinkComponent link={link} />;
                  })}
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img src={work} alt="Skills" className="h-8 w-8" />
                  <p className="ml-2 text-lg md:text-xl text-[#FF7C1D]">
                    Skills
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSkillModalOpen(true);
                  }}
                  className="text-[#1859F1] cursor-pointer"
                >
                  + Add Skills
                </button>
              </div>
              <div className="mt-2">
                {user.skills.map((skill) => {
                  return <Skills skill={skill} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isEducationModalOpen}
        onClose={() => setEducationModalOpen(false)}
        bg={'[#1F202A]'}
      >
        <Editeducation
          username={user.username}
          onClose={() => setEducationModalOpen(false)}
        />
      </Modal>

      <Modal isOpen={isWorkModalOpen} onClose={() => setWorkModalOpen(false)} bg={'[#1F202A]'}>
        <WorkExperienceForm onClose={() => setWorkModalOpen(false)} />
      </Modal>

      <Modal isOpen={isLinkModalOpen} onClose={() => setLinkModalOpen(false)} bg={'[#1F202A]'}>
        <Editlink onClose={() => setLinkModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={isResumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        bg={'[#1F202A]'}
      >
        <ResumeUploadPage />
      </Modal>

      <Modal
        isOpen={isProfileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        bg={'[#1F202A]'}
      >
        <EditProfileForm
          onClose={function () {
            setProfileModalOpen(false);
          }}
        />
      </Modal>
      <Modal isOpen={isSkillModalOpen} onClose={() => setSkillModalOpen(false)} bg={'[#1F202A]'}>
        <AddSkill
          onClose={function () {
            setProfileModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
}

const LinkComponent = ({ link }) => {
  const [showDelete, setShowDelete] = useState(false);
  const { user, fetchUserDetails } = useUser();
  const handleMouseEnter = () => {
    setShowDelete(true);
  };

  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://api.tcx.academy/api/profile/links",
        {
          data: {
            username: user.username,
            linkName: link.linkName,
          },
        }
      );

      if (response.status === 200) {
        fetchUserDetails();
      } else {
        console.error("Failed to delete the link");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="mt-2 relative group  p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-sm uppercase">{link.linkName}</h2>
      <p>
        <a
          href={link.link}
          className="text-sm text-blue-600 hover:text-blue-400 transition duration-300"
        >
          {link.link}
        </a>
      </p>
      {showDelete && (
        <button
          onClick={handleDelete}
          className="absolute top-0 h-8 right-0 bg-red-500 text-white px-2 py-1 rounded transition duration-300"
        >
          <DeleteIcon height={50} />
        </button>
      )}
    </div>
  );
};

function Skills({ skill }) {
  const [showDelete, setShowDelete] = useState(false);
  const { user, fetchUserDetails } = useUser();

  const handleMouseEnter = () => {
    setShowDelete(true);
  };

  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://api.tcx.academy/api/profile/skills",
        {
          data: {
            username: user.username,
            skill: skill,
          },
        }
      );

      if (response.status === 200) {
        fetchUserDetails();
      } else {
        console.error("Failed to delete skill");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-m font-medium text-gray-600 ring-1 mr-3 ring-inset ring-gray-500/10"
    >
      {skill}
      {showDelete && (
        <button
          className="absolute top-[-8px] right-[-10px] font-extrabold rounded-full w-fit h-fit bg-[#FF7C1D]  hover:bg-[#FF7C1D] text-white  "
          onClick={handleDelete}
        >
          <Cross color="white" fontWeight={"bold"} size={20} />
        </button>
      )}
    </div>
  );
}

function WXP({ work }) {
  const [showDelete, setShowDelete] = useState(false);
  const { user, fetchUserDetails } = useUser();

  const handleMouseEnter = () => {
    setShowDelete(true);
  };

  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  const handleDelete = async () => {
    try {
      // Replace with your API endpoint URL
      const url = "http://api.tcx.academy/api/profile/workExp";

      const data = {
        workExpId: work.expId, // Assuming work object has an expId
        username: user.username,
      };

      // Making the HTTP DELETE request
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      // console.log('Delete response:', response.data);
      await fetchUserDetails();

      // Handle success (e.g., show a notification, update state)
      // For example, you can update the UI to remove the deleted work experience entry from the list
    } catch (error) {
      console.error("Error deleting work experience:", error);
      // Handle error (e.g., show a notification)
    }
  };

  return (
    <>
      {work && (
        <div
          className="flex-col w-[95%] ml-2 mt-5 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showDelete && (
            <button
              className="absolute top-0 right-0 bg-red-500 h-8 text-white px-2 py-1 rounded"
              onClick={handleDelete}
            >
              <DeleteIcon height={20} />
            </button>
          )}
          <div className="flex">
            {/* Your SVG and content */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              style={{ marginTop: "2px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25" height="40" rx="4" fill="white" />
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
            {/* Rest of your content */}
            <div className="ml-5 flex flex-col">
              <h1 className="text-white text-xl font-bold">{work.role}</h1>
              <div className="flex text-[10px]">
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
  const [showDelete, setShowDelete] = useState(false);
  const { user, fetchUserDetails } = useUser();

  const handleMouseEnter = () => {
    setShowDelete(true);
  };

  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  const handleDelete = async () => {
    try {
      // Replace with your API endpoint URL
      const url = "http://api.tcx.academy/api/profile/education";

      // Replace with your username retrieval logic
      const username = "example_username"; // You need to retrieve this from your context or props

      const data = {
        eduId: edu.eduId, // Assuming edu object has an eduId
        username: user.username,
      };

      // Making the HTTP DELETE request
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      // console.log('Delete response:', response.data);
      await fetchUserDetails();

      // Handle success (e.g., show a notification, update state)
      // For example, you can update the UI to remove the deleted education entry from the list
    } catch (error) {
      console.error("Error deleting education:", error);
      // Handle error (e.g., show a notification)
    }
  };

  return (
    <>
      {edu && (
        <div
          className="flex-col w-[95%] ml-2 mt-5 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showDelete && (
            <button
              className="absolute top-0 h-8 right-0 bg-red-500 text-white px-2 py-1 rounded"
              onClick={handleDelete}
            >
              <DeleteIcon height={20} />
            </button>
          )}
          <div className="flex">
            {/* Your SVG and content */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              style={{ marginTop: "2px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25" height="40" rx="4" fill="white" />
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
            {/* Rest of your content */}
            <div className="ml-5 flex flex-col">
              <h1 className="text-white text-xl font-bold">
                {edu.institution}
              </h1>
              <div className="flex  text-[10px] ">
                <p>
                  {edu.course}, {edu.degree}
                </p>
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
