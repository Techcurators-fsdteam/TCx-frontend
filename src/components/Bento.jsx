import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import bg2 from '../assets/bg2.svg';

const Bento = () => {
  const cards = [
    {
      question: ' Want to ace your AI game ?',
      answer: 'Our Generative AI and machine learning courses are skill-based and packed with real-world resources, putting you in the driver seat to implement AI concepts effectively.',
      buttonText: 'Enroll to our Gen AI Course',
      link: '/learn',
      width: 'lg:w-2/3 w-full',
    },
    {
      question: 'Want to Connect with AI Enthusiasts ?',
      answer: 'Being part of a community makes learning more fun and effective. Join our community of AI enthusiasts and learn from each other.',
      buttonText: 'Join our Community now',
      link: '/',
      width: 'lg:w-1/3 w-full',
    },
    {
      question: 'Want to Become an AI Expert? ',
      answer: 'Test your GenAI proficiency in 19 mins ',
      buttonText: 'Learn More',
      link: '/certify',
      width: 'lg:w-1/3 w-full',
    },
    {
      question: 'Want to make real-world AI applications ?',
      answer: 'Immerse yourself in AI-focused live projects and gain hands-on experience by working on real-world applications.',
      buttonText: 'Learn More',
      link: '/learn#projectsSection',
      width: 'lg:w-2/3 w-full',
    },
  ];

  return (
    <div
      className='w-full min-h-screen py-10'
      style={{
        backgroundImage: 'radial-gradient(rgba(108, 71, 47,0.5),rgba(0,0,0,0.5))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-[90%] mx-auto '>
        <div className='flex flex-wrap'>
          {cards.map((card, index) => (
            <div key={index} className={`${card.width} p-2`}>
              <div className='bg-[#262626] bg-opacity-50 rounded-lg shadow-lg p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center'>
                <div>
                  <p className='text-gray-400 text-lg sm:text-2xl md:text-3xl font-medium mb-2'>{card.question}</p>
                  <p className='text-gray-300 text-base font-light sm:text-lg md:text-md mb-4'>{card.answer}</p>
                  <RouterLink to={card.link}>
                    <button className='bg-orange-500 bg-opacity-80 text-white font-light text-sm sm:text-base px-3 sm:px-4 py-2 rounded'>
                      {card.buttonText}
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bento;
