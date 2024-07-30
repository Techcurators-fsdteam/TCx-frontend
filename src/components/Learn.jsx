import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import courseImage from "../assets/courseImage.svg";
import Footer from "./Footer";
import { getAllProjects } from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useUser } from "../store/UserContext";
import cardbg from "../assets/cardbg.svg";
import Sei from "../assets/SEI.svg";

const courses = [
  {
    id: 1,
    title: "Generative AI Basics",
    desc: "Explore Generative AI concepts and applications.",
    link: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1/",
  },
  {
    id: 2,
    title: "AI in Software Testing",
    desc: "Understand AI fundamentals in software testing in under 30 minutes.",
    link: "https://www.udemy.com/course/introduction-to-artificial-intelligence-in-software-testing/",
  },
  {
    id: 3,
    title: "AI for Business",
    desc: "Harness AI to boost business innovation.",
    link: "https://www.udemy.com/course/introduction-to-ai-for-business/",
  },
  {
    id: 4,
    title: "AI in Manufacturing",
    desc: "Explore AI's emerging role in manufacturing.",
    link: "https://www.udemy.com/course/artificial-intelligence-in-manufacturing/",
  },
  {
    id: 5,
    title: "AI for Accountants",
    desc: "Prepare for the future of accounting with AI.",
    link: "https://www.udemy.com/course/artificial-intelligence-for-accountants-i/",
  },
  {
    id: 6,
    title: "AI for Educators",
    desc: "An AI introduction for teachers and education professionals.",
    link: "https://www.udemy.com/course/ai-for-teachers-and-educators/",
  },
  {
    id: 7,
    title: "Neuroevolution",
    desc: "Combine neural networks and genetic algorithms.",
    link: "https://www.udemy.com/course/neuroevolution-genetic-algorithms-and-artificial-neuralnets/",
  },
  {
    id: 8,
    title: "Machine Intelligence Intro",
    desc: "Learn about cutting-edge algorithms in AI and ML.",
    link: "https://www.udemy.com/course/machine-intelligence-masterclass/",
  },
  {
    id: 9,
    title: "Machine Learning Basics",
    desc: "Gain a solid foundation in classical machine learning.",
    link: "https://www.youtube.com/watch?v=6mSx_KJxcHI&list=PLlrxD0HtieHjNnGcZ1TWzPjKYWgfXSiWG",
  },
  {
    id: 10,
    title: "Machine Learning with Python",
    desc: "Practical ML projects with Python and Scikit-Learn.",
    link: "https://www.udemy.com/course/fundamentals-of-machine-learning-through-python/",
  },
  {
    id: 11,
    title: "Intro to Large Language Models",
    desc: "Explore large language models and prompt tuning.",
    link: "https://www.cloudskillsboost.google/paths/118/course_templates/539",
  },
  {
    id: 12,
    title: "AIML for Chatbots",
    desc: "Create chatbots using AIML.",
    link: "https://www.udemy.com/course/artificial-intelligence-markup-language/",
  },
  {
    id: 13,
    title: "AI Prompt Mastery",
    desc: "Learn the basics of AI and prompt engineering.",
    link: "https://www.udemy.com/course/ai-prompt-mastery-part-i/",
  },
  {
    id: 14,
    title: "ChatGPT Prompt Skills",
    desc: "Master ChatGPT prompting and 'no code' programming.",
    link: "https://www.udemy.com/course/chatgpt-in-30-minutes-new-prompt-engineering-ai-skills/",
  },
  {
    id: 15,
    title: "Prompt Design in Vertex AI",
    desc: "Overview of generative AI and responsible AI principles.",
    link: "https://www.cloudskillsboost.google/paths/118/course_templates/976",
  },
];

function Learn() {
  const [visibleCourses, setVisibleCourses] = useState(3);
  const [visibleLiveCourses, setVisibleLiveCourses] = useState(3);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { fetchUserDetails, user } = useUser();
  const location = useLocation();

  useEffect(() => {
    fetchAllProjects();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const fetchAllProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  const goToProjectPage = (pid) => {
    return async () => {
      const result = await fetchUserDetails();
      if (result === 0) {
        alert("You need to login to access this page");
        navigate("/login");
      } else {
        navigate(`/project/${pid}`, { state: { pid } });
      }
    };
  };

  const loadMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3);
  };

  const loadMoreLiveCourses = () => {
    setVisibleLiveCourses((prevVisibleLiveCourses) => prevVisibleLiveCourses + 3);
  };

  return (
    <div style={{ fontFamily: "'Lexend', sans-serif" }}>
      <div className="flex items-center justify-center w-full mt-12">
        <Navbar />
      </div>
      <div className="flex justify-center w-full mt-8 md:mt-12 lg:mt-16">
        <div className="w-[95%] sm:w-[90%] lg:w-[80%] flex justify-center text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            <b>The future is driven by data,</b>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FF7C1D]">
              and AI unlocks its potential
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-[90%] mt-4 sm:mt-8 md:mt-10 text-white">
          <ul className="flex flex-col sm:flex-row justify-evenly items-center font-semibold text-base sm:text-lg md:text-2xl">
            <li className="py-4 learnNav sm:py-0 sm:px-4 md:px-0 hover:text-[#FF7C1D] transition-colors duration-300 cursor-pointer">
              <ScrollLink to="coursesSection" smooth={true} duration={500} offset={-50}>
                Courses
              </ScrollLink>
            </li>

            <li className="py-4 learnNav sm:py-0 sm:px-4 md:px-0 hover:text-[#FF7C1D] transition-colors duration=300 cursor-pointer">
              <ScrollLink to="projectsSection" smooth={true} duration={500} offset={-50}>
                Live Projects
              </ScrollLink>
            </li>

            <li className="py-6 learnNav sm:py-0 sm:px-4 md:px-0 hover:text-[#FF7C1D] transition-colors duration-300 cursor-pointer">
              <ScrollLink to="testsSection" smooth={true} duration={500} offset={-50}>
                Practice Test
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Courses Section */}
      <div id="coursesSection" className="text-[#FF7C1D] flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <div className=" w-[90%] lg:px-0 px-8 " >
          <div >
            <p className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 text-start">Courses</p>
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug sm:leading-relaxed md:leading-loose">
              Learn how to implement and leverage Gen AI <br className="hidden sm:block" /> in your profession with these comprehensive courses.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="flex flex-wrap gap-6 justify-center w-[90%] rounded-xl p-6 sm:p-8 md:p-10"
      style={{ backgroundImage: `url(${cardbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {courses?.slice(0, visibleCourses).map((course) => (
            <div key={course.id} className="bg-gray-900 overflow-hidden rounded-xl h-60 w-[80%] lg:w-[30%] flex flex-col justify-between p-4 md:p-6">
              <div className="flex items-center gap-4 text-white">
                <h2 className="text-sm lg:text-normal text-left">{course.title}</h2>
              </div>
              <p className="text-gray-300 text-left text-sm mt-2">
                {course.desc.length > 80 ? course.desc.substring(0, 80) + "..." : course.desc}
              </p>
              <div className="flex justify-between">
                <a href={course.link} target="_blank" rel="noopener noreferrer" className="bg-gray-900 h-12 text-white border lg:text-sm border-white rounded-xl py-2 px-4 sm:py-2 sm:px-2 mt-4">
                  Learn now
                </a>
                <img
                  src={Sei}
                  alt={"Image Not Found"}
                  className="w-12 h-12 md:w-16 md:h-16 object-cover"
                />
              </div>
            </div>
          ))}
          {visibleCourses < courses.length && (
            <button onClick={loadMoreCourses} className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-2">
              Load more
            </button>
          )}
        </div>
      </div>

      {/* Live Projects Section */}
      <div id="projectsSection" className="text-[#FF7C1D] flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="w-[90%] lg:px-0 px-8">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">Live Projects</p>
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug sm:leading-relaxed md:leading-loose">
              Gain deeper insights with ai-driven analytics that <br className="hidden sm:block" /> provide a comprehensive view of candidate performance.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="flex flex-wrap gap-6 justify-center w-[90%] rounded-xl p-6 sm:p-8 md:p-10"
      style={{ backgroundImage: `url(${cardbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {projects?.map((course) => (
            <div key={course.pid} className="bg-gray-900 overflow-hidden rounded-xl h-60 w-[80%] lg:w-[30%] flex flex-col justify-between p-4 md:p-6">
              <div className="flex items-center gap-4 text-white">
                <h2 className="text-sm lg:text-md text-left">{course.title}</h2>
              </div>
              <div className="flex justify-between">
                <button onClick={goToProjectPage(course.pid)} className="bg-gray-900 h-12 text-white border lg:text-sm border-white rounded-xl py-2 px-4 sm:py-2 sm:px-2 mt-4">
                  Learn now
                </button>
                <img
                  src={Sei}
                  alt={"Image Not Found"}
                  className="w-12 h-12 md:w-20 md:h-20 object-cover"
                />
              </div>
            </div>
          ))}
          {visibleLiveCourses < projects.length && (
            <button onClick={loadMoreLiveCourses} className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-2">
              Load more
            </button>
          )}
        </div>
      </div>

      {/* Practice Test Section */}
      <div id="testsSection" className="text-[#FF7C1D] flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-10">
        <div className="flex-row sm:flex w-[90%] flex-wrap lg:px-0 px-8">
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">Practice Test</p>
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug sm:leading-relaxed md:leading-loose">
              Benefit from practice tests that adapt to your learning <br className="hidden sm:block" /> pace and focus on areas needing improvement.
            </p>
          </div>
          <div className="flex">
            <RouterLink to="/Practicetest1" className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4 md:mt-0 self-center md:self-start">
              Take your test now
            </RouterLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Learn;
