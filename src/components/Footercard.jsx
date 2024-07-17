import React, { useEffect, useState } from 'react';
import cardTick from '../assets/cardtick.svg';
import figmacert from '../assets/figmacert.svg';
import figmaachieve from '../assets/figmaachieve.svg';
import figmastudy from '../assets/figmastudy.svg';
import figmaobserve from '../assets/figmaobserve.svg';
import cardbg from '../assets/cardbg.svg';


const cardContent = [
  {
    mainHeading: "See Every Detail",
    subHeading: "Immersive tutorials with comprehensive views",
    paragraph: "Ever tried mastering a new AI tool with only basic instructions? Quite the challenge, right? All our lessons are crafted with meticulous attention to detail. This means when our expert demonstrates a technique, you see every click, every line of code, and every result, right in sync with your own actions.",
    points: [
      "Follow along effortlessly with your instructor's steps",
      "Say goodbye to the frustration of missing crucial steps",
      "Build your skills with hands-on practice sessions",
    ],
    imageUrl: figmaobserve,
  },
  {
    mainHeading: "Learn Seamlessly",
    subHeading: "Master Gen AI with no downloads required",
    paragraph: "Ever been bogged down by the hassle of downloading and installing software just to get started? We’ve eliminated that barrier. With our platform, you can dive right into coding and learning directly on our website in real time.",
    points: [
      "Code and learn effortlessly, anywhere, anytime",
      "Forget about installation issues and system compatibility",
      "Showcase your talent and master your Gen AI skills",
    ],
    imageUrl: figmastudy,
  },
  {
    mainHeading: "Earn and Showcase Your Expertise",
    subHeading: "Get certified and stand out in the Gen AI job market",
    paragraph: "Imagine not only mastering Gen AI skills but also having a certification to prove it. Our courses are designed to equip you with industry-relevant knowledge and provide certifications that are recognized by top employers in the Gen AI segment.",
    points: [
      "Stand out with our elite Gen AI certification",
      "Gain the credentials to secure top job roles in the industry",
      "Showcase your proficiency on our prestigious TC Group stage",
    ],
    imageUrl: figmacert,
  },
  {
    mainHeading: "Rise to the Top",
    subHeading: "Climb the leaderboard and unlock exclusive rewards",
    paragraph: "Imagine your name at the top of our leaderboard, showcasing your dedication and mastery in Gen AI. Each week, we update our leaderboard to highlight the top performers on our platform.",
    points: [
      "Meet top AI experts and gain invaluable insights",
      "Enjoy free access to our top paid courses",
      "Win exciting goodies and more",
    ],
    imageUrl:figmaachieve ,
  },
];

const Footercard = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const lastCard = document.getElementById('card-3');
      if (lastCard) {
        const lastCardRect = lastCard.getBoundingClientRect();
        const topOfLastCard = lastCardRect.top;

        if (topOfLastCard <= 0) {
          setStacked(true);
          setIsSticky(false);
        } else {
          setStacked(false);
          setIsSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardElement = document.getElementById(`card-${index}`);
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const scale = 1 - (window.innerHeight - rect.top) / window.innerHeight * 0.1;
          cardElement.style.transform = `scale(${scale})`;
          cardElement.style.opacity = '1';
        } else {
          cardElement.style.transform = 'scale(1)';
          cardElement.style.opacity = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${stacked ? 'stacked' : ''}`}>
      {cardContent.map((card, index) => (
        <section
          key={index}
          id={`card-${index}`}
          className={`card ${isSticky ? 'sticky top-12' : 'relative'}`}
          style={{
            height: '100vh',
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
          }}
        >
          <div className="mx-auto h-full w-[90%] p-4 sm:p-6 md:p-8 lg:p-10">
            <div
            style={{
            height: '100vh',
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            backgroundImage: `url(${cardbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
             className="grid grid-cols-1  p-4 sm:p-6 md:p-8 lg:p-10 rounded-[2rem] xl:grid-cols-10 gap-4 h-full">
              <div className="relative z-10 lg:col-span-3 hidden xl:block">
                <div className="absolute inset-0">
                  <img
                    alt=""
                    src={card.imageUrl}
                    className="h-full w-full object-contain  rounded-[2rem]"
                  />
                </div>
              </div>

              <div className="relative flex items-center rounded-[2rem] lg:col-span-7" style={{ minHeight: '100%' }}>
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full" style={{ lineHeight: '1.5' }}>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-500 font-bold">
                    {card.mainHeading}
                  </h2>
                  <h3 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                    {card.subHeading}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">{card.paragraph}</p>
                  <ul className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 list-disc list-inside">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex items-center">
                        <img src={cardTick} alt="Tick" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Footercard;
