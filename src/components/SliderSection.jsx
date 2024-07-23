import React, { useEffect, useRef, useState } from "react";
import earthbg from "../assets/earthbg.svg";
import BlurIn from "./BlurIn";
const slides = [
  {
    id: 1,
    slideTitle: "Define Problem",
    title: "World's First GenAI Upskilling Platform that makes you the unicorn in the job market",
    content:
      "In today’s competitive job market, standing out is more critical than ever and we make sure you stand out well.",
  },
  {
    id: 2,
    slideTitle: "Design and Build Data",
    title: "Skills are needed everywhere, from tech giants to startups, from Bangalore to Silicon Valley.",
    content:
      "TCx ensures you gain practical, real-world and Gen ai skills that employers demand.",
  },
  {
    id: 3,
    slideTitle: "Develop Model",
    title: "Coming from the house of TechCurators.",
    content:
      " A TC Group of companies bringing knowledge and expertise of 15000+ professionals making you job-ready every minute of the year.",
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const changeSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    if (!isPaused) {
      intervalRef.current = setInterval(changeSlide, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className="relative overflow-x-hidden z-auto h-full mt-20 mb-20">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${earthbg})` }}
      ></div>
      <div className="relative max-w-screen-xl mx-auto md:p-12 p-8">
      <BlurIn word="Why TCx?" />
        <div>
          {slides.map((slide, index) => (
            <div key={slide.id} className="inline-flex "></div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="min-h-full w-full relative lg:py-64 py-72">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-5">
                  <div className="lg:py-24">
                    <h2 className="text-3xl text-white font-semibold sm:text-4xl">
                      {slide.title}
                    </h2>
                    <p className="my-4 text-gray-300">{slide.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex space-x-4 mt-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleSlideChange(index)}
                className={`w-4 h-4 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
