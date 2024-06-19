import React, { useState } from "react"
import { Link as Li } from "react-router-dom"
import { Link } from "react-scroll"
import rect from "../assets/rect.svg"
import Footer from "./Footer"
import Header from "./Header"

const courses = [
  {
    id: 1,
    title: "Generative AI Basics",
    desc: "Explore Generative AI concepts and applications.",
    link: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-07+V1",
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

const liveCourses = [
  {
    id: 1,
    title: "Netflix's ML Model",
    link: "https://youtu.be/OKmv9sUrvk8",
  },
  {
    id: 2,
    title: "Evolution of Recsys",
    link: "https://youtu.be/lgoyJn7MsH8",
  },
  {
    id: 3,
    title: "Rock vs Mine Prediction",
    link: "https://youtu.be/fiz1ORTBGpY?si=7t2Uaqg1OnByFqKk",
  },
  {
    id: 4,
    title: "Heart Disease Prediction",
    link: "https://youtu.be/qmqCYC-MBQo?si=lpzQ16VdqQ6WJ2M2",
  },
  {
    id: 5,
    title: "Multi-Armed Bandit Strategies",
    link: "https://youtu.be/2A5f3GrX0dA",
  },
  {
    id: 6,
    title: "Scalable Query-Item Model",
    link: "https://youtu.be/o-pZk5R0TZg",
  },
  {
    id: 7,
    title: "Meituan's Recsys Model",
    link: "https://youtu.be/UhpbTSbi3lI",
  },
  {
    id: 8,
    title: "LinkedIn's CTR Model",
    link: "https://youtu.be/7l0HLYVFEuU",
  },
  {
    id: 9,
    title: "Twitter's Recsys Algorithm",
    link: "https://youtu.be/IhGq9jgcxFM",
  },
  {
    id: 10,
    title: "eBay's Language Model",
    link: "https://youtu.be/h51nbWr7feo",
  },
  {
    id: 11,
    title: "Bert Entity Embeddings",
    link: "https://youtu.be/v-0J7o-nDBE",
  },
  {
    id: 12,
    title: "Build Voice AI Assistant",
    link: "https://www.udemy.com/course/alan-ai-course/",
  },
  {
    id: 13,
    title: "Dynamic Pricing Strategy",
    link: "https://youtu.be/a_CXpnsvPa0",
  },
  {
    id: 14,
    title: "Train Product Embeddings",
    link: "https://youtu.be/DN4S96oHRhE",
  },
  {
    id: 15,
    title: "Approximate Nearest Neighbour",
    link: "https://youtu.be/DSQOrBTqmYA",
  },
  {
    id: 16,
    title: "Diverse Recommender Systems",
    link: "https://youtu.be/laTxgnzjfR0",
  },
];


function Learn() {
  const [visibleCourses, setVisibleCourses] = useState(3)
  const [visibleLiveCourses, setVisibleLiveCourses] = useState(3)

  const loadMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3)
  }

  const loadMoreLiveCourses = () => {
    setVisibleLiveCourses(
      (prevVisibleLiveCourses) => prevVisibleLiveCourses + 3
    )
  }

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
        <div className="flex w-full max-w-screen-xl">
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
          {courses &&
            courses.slice(0, visibleCourses).map((course) => (
              <div
                key={course.id}
                className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6"
              >
                <div className="flex items-center gap-4 text-white">
                  <img
                    src={rect}
                    alt="Generative AI"
                    className="h-10 w-10 md:h-12 md:w-12"
                  />
                  <h2 className="text-sm sm:text-lg md:text-xl text-left">
                    {course.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-left text-sm mt-2">
                  {course.desc.length > 80
                    ? course.desc.substring(0, 80) + "..."
                    : course.desc}
                </p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4"
                >
                  Learn Now
                </a>
              </div>
            ))}
          {visibleCourses < courses.length && (
            <button
              onClick={loadMoreCourses}
              className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-2"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {/* Live Projects Section */}

      <div
        id="projectsSection"
        className="text-white flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20"
      >
        <div className="flex w-full max-w-screen-xl justify-end items-end text-right">
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
          {liveCourses &&
            liveCourses.slice(0, visibleLiveCourses).map((course) => (
              <div
                key={course.id}
                className="bg-[#3F3F3F] rounded-xl h-60 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between p-4 md:p-6"
              >
                <div className="flex items-center gap-4 text-white">
                  <img
                    src={rect}
                    alt="Generative AI"
                    className="h-10 w-10 md:h-12 md:w-12"
                  />
                  <h2 className="text-sm sm:text-lg md:text-xl text-left">
                    {course.title}
                  </h2>
                </div>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-4"
                >
                  Learn Now
                </a>
              </div>
            ))}
          {visibleLiveCourses < courses.length && (
            <button
              onClick={loadMoreLiveCourses}
              className="bg-[#FF7C1D] text-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 mt-2"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {/* Practice Test Section */}

      <div
        id="testsSection"
        className="text-white flex justify-center w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-10"
      >
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl items-start md:items-center gap-6 md:gap-8 lg:gap-10">
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
  )
}

export default Learn
