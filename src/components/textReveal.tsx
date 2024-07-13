"use client";

import { cn } from "./globe";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";
import Marquee from "react-fast-marquee";
import logo from "../assets/logo.svg";
import one from "../assets/logos_angular.svg";
import two from "../assets/logos_flutter.svg";
import three from "../assets/logos_html-5.svg";
import four from "../assets/logos_github.svg";
import five from "../assets/logos_js.svg";
import six from "../assets/logos_mongo.svg";
import seven from "../assets/logos_node.svg";
import eight from "../assets/logos_postgresql.svg";
import nine from "../assets/logos_powerbi.svg";
import ten from "../assets/logos_python.svg";
import eleven from "../assets/logos_react.svg";
import twelve from "../assets/logos_tailwind.svg";
import thirteen from "../assets/logos_typescript.svg";


interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
const text="Master countless skills, endless assessments and real-world projects with TCx"
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");
  const clasName="text-white bg-transparent text-2xl font-bold dark:text-black/20 md:text-3xl lg:text-4xl xl:text-5xl"

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh] flex justify-center", className)}>
      <div
        className={
          " flex sticky top-0 justify-center text-center mx-auto flex-col h-[50%] max-w-full items-center bg-transparent px-[1rem] py-[3rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap justify-center text-center p-5 text-2xl font-bold text-white dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        <p className=" sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-500 max-w-prose">
        Step into the future with the world's first GenAI upskilling platform, designed to make you job-ready. Whether you're a beginner or an experienced professional, TCx offers resources that guide you through building, training, and implementing advanced AI models.
        </p>
        {/* <div className="relative w-[88%] bg-black opacity-80 border border-transparent rounded-xl p-4 gradient-border">
  <Marquee>
    <img src={one} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={two} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={three} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={eleven} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={five} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={six} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={seven} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={eight} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={nine} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
  </Marquee>
  <div className="my-4"></div> 
  <Marquee direction="right">
    <img src={ten} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={eleven} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={twelve} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={thirteen} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={six} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={seven} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={eight} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={two} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
    <img src={one} className="h-16 w-16 border border-gray-500 p-2 rounded-xl mx-6" style={{ borderWidth: '0.5px' }}></img>
  </Marquee>
  <style jsx>{`
    .gradient-border {
      position: relative;
      z-index: 1;
      border-image: linear-gradient(to right, black, gray, black) 1;
    }
    .gradient-border::before, .gradient-border::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      border-width: 0 0 0.2px 0;
      border-style: solid;
      border-image: linear-gradient(to right, black, gray, black) 1;
      z-index: -1;
      box-shadow: 0 2px 4px rgba(255, 255, 255, 0.6);
    }
    .gradient-border::before {
      top: 0;
    }
    .gradient-border::after {
      bottom: 0;
    }
  `}</style>
</div> */}

     
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-20"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
