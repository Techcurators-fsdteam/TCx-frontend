import React, { useState,useEffect } from "react";
import "../index.css";
import axios from "axios";
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
import Editeducation from "./Editeducation";
import EditProfileForm from "./Editprofile";
import Editlink from "./Editlink";
import WorkExperienceForm from "./Editwork";
import ResumeUploadPage from "./Editresume";
import Modal from "./Modal";

function Profile() {
  const { user, fetchUserDetails } = useUser();

  const [isEducationModalOpen, setEducationModalOpen] = useState(false);
  const [isWorkModalOpen, setWorkModalOpen] = useState(false);
  const [isLinkModalOpen, setLinkModalOpen] = useState(false);
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex justify-center text-center py-8">
        <div className="flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%] gap-4">
          {/* Left Profile Box */}
          <div className="w-full md:w-[45%] lg:w-[30%] mt-6 flex flex-col gap-4">
            <div className="bg-[#303031] text-white text-left rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-2">
                { user.picture ? (
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

      <Modal isOpen={isEducationModalOpen} onClose={() => setEducationModalOpen(false)}>
        <Editeducation username={user.username} onClose={() => setEducationModalOpen(false)}  />
      </Modal>

      <Modal isOpen={isWorkModalOpen} onClose={() => setWorkModalOpen(false)}>
        <WorkExperienceForm />
      </Modal>

      <Modal isOpen={isLinkModalOpen} onClose={() => setLinkModalOpen(false)}>
        <Editlink />
      </Modal>

      <Modal isOpen={isResumeModalOpen} onClose={() => setResumeModalOpen(false)}>
        <ResumeUploadPage />
      </Modal>

      <Modal isOpen={isProfileModalOpen} onClose={() => setProfileModalOpen(false)}>
        <EditProfileForm onClose={function(){setProfileModalOpen(false)}}/>
      </Modal>
    </>
  );
}

function WXP({ work }) {
  const [showDelete, setShowDelete] = useState(false);

  const handleMouseEnter = () => {
    setShowDelete(true);
  };

  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  const handleDelete = () => {
    // Implement delete logic here
    console.log('Deleting work experience:', work.id); // Assuming work object has an id
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
              className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
          <div className="flex">
            {/* Your SVG and content */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "2px" }}
            >
              {/* SVG content */}
            </svg>
            {/* Rest of your content */}
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
  const [showDelete, setShowDelete] = useState(false);
  const {user,fetchUserDetails}=useUser();

  const handleMouseEnter = () => {
    setShowDelete(true);
  };

  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  const handleDelete = async () => {
    try {
      // Replace with your API endpoint URL
      const url = 'http://localhost:5000/api/profile/education';

      // Replace with your username retrieval logic
      const username = 'example_username'; // You need to retrieve this from your context or props

      const data = {
        eduId: edu.eduId, // Assuming edu object has an eduId
        username: user.username,
      };

      // Making the HTTP DELETE request
      const response = await axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      });

      // console.log('Delete response:', response.data);
      await fetchUserDetails();

      // Handle success (e.g., show a notification, update state)
      // For example, you can update the UI to remove the deleted education entry from the list

    } catch (error) {
      console.error('Error deleting education:', error);
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
              className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
          <div className="flex">
            {/* Your SVG and content */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "2px" }}
            >
              {/* SVG content */}
            </svg>
            {/* Rest of your content */}
            <div className="ml-5 flex flex-col">
              <h1 className="text-white text-xl font-bold">{edu.institution}</h1>
              <div className="flex  text-[10px] ">
                <p>{edu.course}, {edu.degree}</p>
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
