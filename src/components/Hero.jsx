import React, { useState, useRef } from 'react';
import logo from '../assets/logo.svg';
import astronaut from '../assets/astronaut.svg';
import roboastro from '../assets/roboastro.svg';
import billa from '../assets/billa.svg';
import bcha from '../assets/bcha.svg';
import uncle from '../assets/uncle.svg';
import AIskull from '../assets/AIskull.svg';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import '../index.css';
import { TypeAnimation } from 'react-type-animation';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const currentElementRef = useRef(null);

  const showTooltip = (event, text) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text,
      x: rect.left + rect.width / 2,
      y: rect.bottom + window.scrollY + 5 // Position just below the element
    });
    currentElementRef.current = event.currentTarget;
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
    currentElementRef.current = null;
  };
  const settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 2, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at a time
    draggable: true, // Enable dragging with mouse or trackpad
    swipe: true, // Enable swiping
    touchThreshold: 10, // Sensitivity of touch/swipe
    responsive: [
      {
        breakpoint: 1024, // Responsive setting for widths below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Responsive setting for widths below 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <>
      <Navbar />

      {/* Type Animation */}
      <div className="flex justify-center py-10 mt-16">
        <TypeAnimation
          sequence={[
            'Become an AI Prodigy',
            2000,
            '',
            1000,
          ]}
          wrapper="span"
          speed={20}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center"
          repeat={Infinity}
        />
      </div>

      {/* Second Section */}
      <div className="flex justify-center w-full mb-10">
  <div className="flex flex-col lg:flex-row items-center justify-between w-[80%] mt-6 gap-10 lg:gap-20">
    <div className="flex-shrink-0">
      <img 
        src={logo} 
        alt="logo" 
        className="w-32 h-32 md:w-40 md:h-40 lg:w-80 lg:h-80"
      />
    </div>
    <div className="flex flex-col items-end text-right">
      <p className="text-white text-3xl md:text-4xl lg:text-6xl">
        Transform your skills,
      </p>
      <p className="text-lg md:text-2xl lg:text-5xl text-gray-500">
        Transform your future
      </p>
    </div>
  </div>
</div>


      {/* Third Section */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col lg:flex-row w-[90%] max-w-screen-xl text-lg text-white">
          <div className="flex-1 flex items-center justify-center p-4">
            <p className="font-light text-center lg:text-left">
              We believe the best learning happens when the content is directly related to the on-job real-world applications. There are skill-based and real-world resources to get you in the driving seat for implementing that concept.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="flex justify-center gap-4">
              <img src={astronaut} alt="astronaut" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -rotate-[20deg]" />
              <img src={roboastro} alt="roboastro" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex justify-center w-full">
        <div className="w-[90%] flex flex-wrap gap-4 justify-center mt-4 md:mt-8 lg:mt-[-1.5%]">
          <img src={billa} alt="billa" className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover" />
          <img src={bcha} alt="bcha" className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover" />
          <img src={uncle} alt="uncle" className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover" />
        </div>
      </div>

      {/* Fifth Section */}
      <div className="flex justify-center w-full mt-16">
        <div className="text-white flex flex-col lg:flex-row w-[90%] px-4 md:px-8 lg:px-16 gap-4 lg:gap-0">
          <p className="text-3xl sm:text-4xl md:text-5xl flex-1 text-center lg:text-left">
            Why TCx?
          </p>
          <p className="flex-1 font-light text-lg sm:text-xl md:text-2xl lg:text-xl text-center lg:text-right">
            World's First GenAI upskilling Platform to make you job ready.
            Equip yourself with GenAI skills with our comprehensive resources curated by Top leading AI Experts.
          </p>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="flex justify-center w-full mt-10 mb-10">
      <div className="w-[90%] mt-6">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="p-2">
            <div className="flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#1E1E1E] text-white h-60 p-6 md:h-72 lg:h-80">
              <div className="flex flex-col gap-6 md:gap-8 items-end">
                <div className="flex justify-center items-center rounded-full w-32 h-10 md:w-40 md:h-12 bg-[#313131]">
                  <div className="rounded-full bg-[#D9D9D9] h-8 w-8 md:h-10 md:w-10"></div>
                  <p className="ml-2 text-sm md:text-base">AI Solutions</p>
                </div>
                <p className="text-3xl md:text-4xl text-right">Tools</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-2">
            <div className="flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#1E1E1E] text-white h-60 p-6 md:h-72 lg:h-80">
              <div className="flex flex-col gap-6 md:gap-8 items-end">
                <div className="flex justify-center items-center rounded-full w-32 h-10 md:w-40 md:h-12 bg-[#313131]">
                  <div className="rounded-full bg-[#D9D9D9] h-8 w-8 md:h-10 md:w-10"></div>
                  <p className="ml-2 text-sm md:text-base">AI Consultation</p>
                </div>
                <p className="text-3xl md:text-4xl text-right">Consultation</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-2">
            <div className="flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#1E1E1E] text-white h-60 p-6 md:h-72 lg:h-80">
              <div className="flex flex-col gap-6 md:gap-8 items-end">
                <div className="flex justify-center items-center rounded-full w-32 h-10 md:w-40 md:h-12 bg-[#313131]">
                  <div className="rounded-full bg-[#D9D9D9] h-8 w-8 md:h-10 md:w-10"></div>
                  <p className="ml-2 text-sm md:text-base">AI Education</p>
                </div>
                <p className="text-3xl md:text-4xl text-right">Education</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-2">
            <div className="flex flex-1 flex-col justify-between items-end rounded-3xl bg-[#1E1E1E] h-60 p-6 md:h-72 lg:h-80">
              <div className="flex flex-col gap-6 md:gap-8 items-end">
                <div className="flex justify-center items-center rounded-full w-32 h-10 md:w-40 md:h-12 bg-[#313131]">
                  <div className="rounded-full bg-[#D9D9D9] h-8 w-8 md:h-10 md:w-10"></div>
                  <p className="ml-2 text-sm md:text-base text-white">AI Community</p>
                </div>
                <p className="text-3xl md:text-4xl text-right text-white">Community</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>

      {/* Seventh Section */}
      <div className="flex justify-center w-full mt-28">
        <div className="text-white flex flex-col lg:flex-row w-[90%] px-4 md:px-8 lg:px-16 gap-4 lg:gap-0">
          <p className="text-3xl sm:text-4xl md:text-5xl flex-1 text-center lg:text-left">
            Future-proof your career <span className="text-gray-500">today</span>
          </p>
          <p className="flex-1 font-light text-lg sm:text-xl md:text-2xl lg:text-xl text-center lg:text-right">
            Don’t let the fear of layoffs hold you back. With TCx, you’ll be armed with the knowledge and skills to navigate and lead in the AI-driven world. Sign up now and take the first step towards an empowered, secure, and exciting future.
          </p>
        </div>
      </div>

      {/* Eighth Section */}
      <div className="flex justify-center w-full mt-10">
        <div className="w-[90%]">
          <img src={AIskull} alt="AIskull" className="w-full object-contain" />
        </div>
      </div>

      {/* Ninth Section */}
      <Footer />
    </>
  );
}

export default Hero;
