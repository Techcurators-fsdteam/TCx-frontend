import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import demo from "../assets/logoipsum.svg";
import women from "../assets/women.webm";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import "../index.css";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import herovid from "../assets/herovid.webm";
import { Statistic } from "antd";
import CountUp from "react-countup";
import TextRevealByWord from "./textReveal";
import SliderSection from "./SliderSection.jsx";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const metrics = [
  {
    id: 1,
    stat: 100,
    image: "/svgs/projects.svg",
    emphasis: "Skills",
  },
  {
    id: 2,
    stat: 1000,
    image: "/svgs/annotation.svg",
    emphasis: "Live Projects",
  },
  {
    id: 3,
    stat: 10000,
    image: "/svgs/client.svg",
    emphasis: "Practice Tests",
  },
];

const HoverCard = ({
  id,
  index,
  question,
  answer,
  isHovered,
  setHoveredIndex,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [allowAnimation, setAllowAnimation] = useState(window.innerWidth > 600);

  // Handle resizing to enable/disable animations based on width
  useEffect(() => {
    const handleResize = () => {
      setAllowAnimation(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animate or simply make visible based on allowAnimation state
  useEffect(() => {
    if (inView) {
      if (allowAnimation) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: index * 0.2 },
        });
      } else {
        controls.start({
          y: 0,
          opacity: 1,
        });
      }
    } else {
      controls.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView, index, allowAnimation]);

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    position: "relative",
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ y: 50, opacity: 0 }}
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="p-2 transition-transform duration-500"
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      <div
        className={`relative flex flex-1 flex-col rounded-xl justify-between items-center text-white h-72 w-60 p-6 md:h-80 md:w-72 lg:h-96 lg:w-80 overflow-hidden`}
        style={glassStyle}
        id={`card-${id}`}
      >
        <div className="absolute inset-0">
          <div className="glitter" />
          <div className="glitter" />
          <div className="glitter" />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 items-center w-full h-full relative z-10">
          <p
            className={`absolute text-lg md:text-xl lg:text-2xl text-center transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            {question}
          </p>
          <p
            className={`absolute text-base md:text-lg lg:text-xl text-center transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: isHovered ? "translateY(0)" : "translateY(100%)",
            }}
          >
            {answer}
          </p>
          <button
            className={`absolute bottom-4 text-base bg-white opacity-70 text-black py-2 px-4 rounded transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FadeInSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      id: 1,
      question: "Ace your AI game?",
      answer:
        "Our Generative AI and machine learning courses are skill-based and packed with real-world resources, putting you in the driver seat to implement AI concepts effectively.",
    },
    {
      id: 2,
      question: "Make AI applications?",
      answer:
        "Immerse yourself in AI-focused live projects and gain hands-on experience by working on real-world applications.",
    },
    {
      id: 3,
      question: "Become an AI Expert?",
      answer: "Test your GenAI proficiency in 19 mins",
    },
    {
      id: 4,
      question: "Connect with AI Enthusiasts?",
      answer:
        "Being part of a community makes learning more fun and effective.",
    },
  ];

  const formatter = (value) => (
    <CountUp
      end={value}
      duration={8}
      useEasing
      separator=","
      className="text-orange-600 text-4xl md:text-5xl"
    />
  );

  const textSegments = [
    "World's First GenAI Upskilling Platform that makes you the unicorn in the job market.",
    "Everywhere skills are needed, from tech giants to startups, from Bangalore to Silicon Valley.",
    "TCx ensures you gain practical, real-world and Gen AI skills that employers demand.",
    "Coming from the house of TechCurators, a TC Group of companies bringing knowledge and expertise of 15000+ professionals making you job-ready every minute of the year.",
  ];

  return (
    <>
      <Navbar />
      <div className="relative w-[100vw] overflow-x-hidden flex justify-center items-center h-screen bg-black overflow-hidden">
        <video
          src={herovid}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ minWidth: "100%", minHeight: "100%" }}
        />

        <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left w-full h-full px-8 md:px-16 lg:px-32">
          <div className="py-6 mt-16 md:mt-8 ">
            <TypeAnimation
              sequence={["Become an AI Prodigy", 2000, "", 1000]}
              wrapper="span"
              speed={20}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-200 text-3xl mt-4 md:mt-6 lg:mt-8">
            Don’t just be a professional, <br />
            Be an AI Professional.
          </p>
          <div>
            <a
              href="#"
              className="inline-block bg-[#D6FF3C] text-black rounded-full py-2 px-4 sm:py-3 sm:px-5 mt-6 md:mt-8 lg:mt-10 glare-effect"
            >
              Start Learning Today
            </a>
            <style jsx>{`
              .glare-effect {
                position: relative;
                overflow: hidden;
              }
              .glare-effect::before {
                content: "";
                position: absolute;
                top: 50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: rgba(255, 255, 255, 0.4);
                transform: rotate(25deg);
                animation: glare 2s infinite linear;
              }
              @keyframes glare {
                0% {
                  left: -50%;
                }
                100% {
                  left: 150%;
                }
              }
            `}</style>
          </div>
        </div>
      </div>

      <div className="relative mt-16 md:mt-0">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-44 lg:px-8">
              <div className="relative text-center mt-20 text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                  <div className="relative w-[450px] h-[450px]">
                    <div className="absolute inset-0 rounded-full border border-gray-500 animate-orbit1">
                      <div className="star small-star star1" />
                      <div className="star large-star star2" />
                    </div>
                    <div className="absolute inset-16 rounded-full border border-gray-400 animate-orbit2">
                      <div className="star large-star star1" />
                      <div className="star small-star star2" />
                    </div>
                    <div className="absolute inset-32 rounded-full border border-gray-400 animate-orbit3">
                      <div className="star small-star star1" />
                      <div className="star large-star star2" />
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl text-center lg:text-6xl font-extrabold">
                  Transform your skills,
                </h1>
                <h1 className="text-white bg-gradient-blue bg-clip-text text-transparent">
                  Transform your future
                </h1>
              </div>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-400 sm:max-w-3xl">
                Every company will be an AI Company, thus, We are making
                everyone an AI Expert. Dive into a world where learning is
                linked directly to your career progression and transform your
                skills in GenAI.
              </p>
              <div className="mt-8 sm:mt-12">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {metrics &&
                    metrics.map((m, i) => (
                      <div
                        className="flex flex-col px-4 space-y-2 text-center items-center justify-center text-orange-600"
                        key={i}
                      >
                        <p className="order-last text-xl font-medium text-gray-300">
                          {m.emphasis}
                        </p>
                        <p className="text-4xl font-extrabold md:text-5xl">
                          <span className="flex items-center">
                            <Statistic formatter={formatter} value={m.stat} />+{" "}
                          </span>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-orbit1 {
          animation: orbit1 10s linear infinite;
        }
        .animate-orbit2 {
          animation: orbit2 10s linear infinite reverse;
          border-radius: 100%;
        }
        .animate-orbit3 {
          animation: orbit3 10s linear infinite;
          border-radius: 100%;
        }
        @keyframes orbit1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit2 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        @keyframes orbit3 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.8);
        }
        .small-star {
          width: 5px;
          height: 5px;
        }
        .large-star {
          width: 10px;
          height: 10px;
        }
        .star1 {
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
        }
        .star2 {
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
        }
        .glitter {
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          position: absolute;
          animation: glitter 1.5s infinite ease-in-out;
        }
        .glitter:nth-child(1) {
          top: 20%;
          left: 30%;
          animation-delay: 0s;
        }
        .glitter:nth-child(2) {
          top: 50%;
          left: 70%;
          animation-delay: 0.5s;
        }
        .glitter:nth-child(3) {
          top: 80%;
          left: 50%;
          animation-delay: 1s;
        }
        @keyframes glitter {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }
        @media (min-width: 300px) and (max-width: 500px) {
          .animate-orbit1 {
            height: 350px;
            width: 350px;
          }
          .animate-orbit2 {
            height: 225px;
            width: 225px;
          }
          .animate-orbit3 {
            height: 105px;
            width: 105px;
          }
        }
      `}</style>

      <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full sm:w-[90%] flex flex-col gap-4 justify-center items-center text-center text-white">
          <p className="text-2xl hidden md:flex sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl leading-tight">
            <TextRevealByWord />
          </p>
          <div className="flex flex-col md:hidden">
            <p className="text-2xl font-semibold">
            Master countless skills, endless assessments and real-world projects with TCx
            </p>
            <p className="sm:text-lg mt-5 text-gray-500 max-w-prose">
              Step into the future with the world's first GenAI upskilling
              platform, designed to make you job-ready. Whether you're a
              beginner or an experienced professional, TCx offers resources that
              guide you through building, training, and implementing advanced AI
              models.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex overflow-x-hidden justify-center  pl-10 md:pl-0 w-[100vw]  mt-6 mb-20">
        <div className="grid md:grid-cols-4 grid-cols-1 w-[90%] mt-6 justify-between">
          {cards.map((card, index) => (
            <HoverCard
              key={card.id}
              id={card.id}
              index={index}
              question={card.question}
              answer={card.answer}
              isHovered={hoveredIndex === card.id}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>

      <SliderSection />

      <Marquee speed={50} gradient={false} style={{ color: "white" }}>
        <img src={demo} alt="demo" style={{ margin: "0 58px" }} />
        <img src={demo} alt="demo" style={{ margin: "0 58px" }} />
        <img src={demo} alt="demo" style={{ margin: "0 58px" }} />
        <img src={demo} alt="demo" style={{ margin: "0 58px" }} />
        <img src={demo} alt="demo" style={{ margin: "0 58px" }} />
      </Marquee>

      <div className="flex justify-center w-full mt-28 mb-20">
        <FadeInSection>
          <div className="flex flex-col justify-center lg:flex-row w-[90%] mx-auto gap-4 lg:gap-0">
            <div className="flex flex-col text-center justify-center items-center ">
              <p className="text-3xl text-white sm:text-4xl md:text-5xl text-center ">
                Future-proof your career today
              </p>
              <p className="font-light text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-xl text-center mt-4">
                Don’t let the fear of layoffs hold you back. With TCx, you’ll
                gain the knowledge and skills to navigate and lead in an
                AI-driven world. Equip yourself with the skills and knowledge to
                thrive in the AI era. Sign up now and take the first step
                towards an empowered, secure, and exciting future
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
      {/* <Globe/> */}
      <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
        <video
          src={women}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <Footer />
    </>
  );
}

export default Hero;
