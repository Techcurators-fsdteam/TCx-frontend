import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import bg from '../assets/certifybg.svg';
import InfoIcon from '../assets/info-icon.svg'; 
import Sei from '../assets/SEI.svg';

const certificationBoxes = [
  {
    id: "box1",
    title: "Software Engineer Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box2",
    title: "Data Scientist Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box3",
    title: "Product Manager Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  }
];

const certificationBoxesSecondSet = [
  {
    id: "box4",
    title: "Software Engineer Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box5",
    title: "Data Scientist Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box6",
    title: "Product Manager Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box7",
    title: "Software Engineer Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box8",
    title: "Data Scientist Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box9",
    title: "Product Manager Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box10",
    title: "Software Engineer Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box11",
    title: "Data Scientist Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  },
  {
    id: "box12",
    title: "Product Manager Intern",
    buttonText: "Get Certified",
    icon: InfoIcon,
    logo: Sei,
  }
];

function Certify() {
  return (
    <>
      <div className='flex flex-col justify-center text-center items-center gap-8'>
        <Header />
        <Navbar />
      </div>
      <div 
        className='flex flex-col w-full my-10 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${bg})`, height: '400px' }}
      >
        <div className='flex flex-col justify-center h-full pl-10 text-white'>
          <p className='text-5xl'>Get Certified</p>
          <p>Certification test</p>
        </div>
      </div>
      
      <div className='flex justify-center items-center mb-20'>
        <div className="flex flex-col md:flex-row w-[90%] justify-center gap-4 mt-6 md:mt-0" style={{marginTop:'-6%'}}>
          <div className="rounded-xl bg-white p-6 shadow-md flex-1 max-w-xs md:max-w-sm">
            <h1 className="text-xl font-bold text-black mb-4">
              Stand out from the crowd
            </h1>
            <p className="text-sm text-orange-600">
              Get certified in technical skills by taking the TCx Certification Test
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md flex-1 max-w-xs md:max-w-sm mt-4 md:mt-0">
            <h1 className="text-xl font-bold text-black mb-4">
              Standardised Assessment
            </h1>
            <p className="text-sm text-orange-600">
              Assessments are organised around specific skills and are carefully curated based on years of recruiting data from 2000+ companies
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md flex-1 max-w-xs md:max-w-sm mt-4 md:mt-0">
            <h1 className="text-xl font-bold text-black mb-4">
              Enrich your profile
            </h1>
            <p className="text-sm text-orange-600">
              Upon successfully clearing an assessment, you can promote yourself using the TCx certificate to peers and employers
            </p>
          </div>
        </div>
      </div>
      
      <div className='flex justify-center items-center mb-10'>
        <div className='flex w-[90%]'>
          <p className='text-orange-600 text-2xl font-medium'>
            Get Your Roles Certified
          </p>
        </div>
      </div>
      
      <div className='flex justify-center items-center mb-20'>
        <div className='flex flex-col md:flex-row justify-evenly w-[90%] items-center gap-10'>
          {certificationBoxes.map(box => (
            <div key={box.id} id={box.id} className="bg-gray-900 text-white rounded-xl p-5 w-full max-w-xs md:max-w-md relative flex flex-col justify-between shadow-lg mt-4 md:mt-0">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{box.title}</h2>
                <img src={box.icon} alt="Info Icon" className="w-5 h-5 cursor-pointer" />
              </div>
              <div className='flex items-center justify-between mt-4'>
                <button className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900 transition-all">
                  {box.buttonText}
                </button>
                <img src={box.logo} alt={box.title} className="w-12 h-12 md:w-20 md:h-20 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center items-center mb-10'>
        <div className='flex w-[90%]'>
          <p className='text-orange-600 text-2xl font-medium'>
            Get Your Skill Certified
          </p>
        </div>
      </div>
      
      <div className='flex justify-center items-center mb-20'>
        <div className='flex flex-wrap justify-between w-[90%] items-center gap-10'>
          {certificationBoxesSecondSet.map(box => (
            <div key={box.id} id={box.id} className="bg-gray-900 text-white rounded-xl p-5 w-full max-w-xs md:max-w-md relative flex flex-col justify-between shadow-lg mt-4 md:mt-0 md:w-[30%]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{box.title}</h2>
                <img src={box.icon} alt="Info Icon" className="w-5 h-5 cursor-pointer" />
              </div>
              <div className='flex items-center justify-between mt-4'>
                <button className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900 transition-all">
                  {box.buttonText}
                </button>
                <img src={box.logo} alt={box.title} className="w-12 h-12 md:w-20 md:h-20 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Certify;
