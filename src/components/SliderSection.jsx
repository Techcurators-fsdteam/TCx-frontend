import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import firstslide from "../assets/slide1.svg"
import secondslide from "../assets/slide2.svg"
import thirdslide from "../assets/slide3.svg"

const slides = [
  {
    id: 1,
    slideTitle: "Define Problem",
    title: "Determine your business problem",
    content:
      "In order to create the best LLM adoption plan that improves your goods and increases staff efficiency, we first identify your business challenge.",
    image: firstslide,
  },
  {
    id: 2,
    slideTitle: "Design and Build Data",
    title: "Create high quality data for personalised LLM",
    content:
      "With your company goals in mind, we develop optimal data structures. This includes creating high-quality training datasets for fine-tuning and formatting internal documents for LLM-ready use in a RAG system.",
    image: secondslide,
  },
  {
    id: 3,
    slideTitle: "Develop Model",
    title: "Develop a unique LLM",
    content:
      "We use RAG, prompt-enginnering, and fine-tuning to create your unique LLM based on a base LLM. We make sure the chosen approach best serves your company's requirements.",
    image: thirdslide,
  },
  
]

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    const changeSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }

    if (!isPaused) {
      intervalRef.current = setInterval(changeSlide, 3000)
    }

    return () => clearInterval(intervalRef.current)
  }, [isPaused])

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
    setIsPaused(true)
    clearInterval(intervalRef.current)
    setTimeout(() => {
      setIsPaused(false)
    }, 3000)
  }

  return (
    <div className="overflow-x-hidden z-auto h-full">
      <div className="max-w-screen-xl mx-auto md:p-12 p-8 ">
        
        <h2 className="text-left text-white md:text-4xl text-2xl font-semibold mb-3 max-w-4xl">
          Why TCx?

        </h2>
        <div>
          {slides.map((slide, index) => (
            <div key={slide.id} className="inline-flex ">
            
            <button
                className={`${
                  currentSlide === index
                    ? "bg-orange-600 text-white"
                    : "hover:border-orange-600 hover:text-white bg-gray-800"
                } border border-[#000c17] inline-flex lg:mx-16 md:mx-2 mt-4 px-4 py-2 rounded-full transition duration-300`}
                onClick={() => handleSlideChange(index)}
              >
                {slide.slideTitle}
              </button>
              
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="min-h-full w-full relative lg:py-64 py-72">
            <AnimatePresence initial={false}>
              {slides.map((slide, index) =>
                currentSlide === index ? (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-5">
                      <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-96">
                        <img
                          alt="image"
                          src={slide.image}
                          loading="eager"
                          className="h-full w-full lg:object-cover object-contain object-center"
                        />
                      </div>
                      <div className="lg:py-24">
                        <h2 className="text-3xl text-white font-bold sm:text-4xl">
                          {slide.title}
                        </h2>
                        <p className="my-4 text-gray-300">{slide.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderSection