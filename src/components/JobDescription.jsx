import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import building from '../assets/building.svg';
import Navbar from './Navbar';

const JobDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { job } = location.state || {};

    if (!job) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-white">No job selected</p>
            </div>
        );
    }

    const handleApplyClick = () => {
        navigate('/application', { state: { testId: job.testId,interviewId:job.interviewId } });
    };

    return (
        <>
            <Navbar />
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 0px;
                        background: transparent;
                    }
                    .custom-scrollbar {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                `}
            </style>
            <div className="flex flex-col md:flex-row justify-center items-start min-h-screen bg-black text-white mt-12 p-4 md:p-10 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start md:justify-center p-4 md:px-8">
                    <Link to="/apply" className="text-orange-500 block text-lg md:text-xl mb-8 flex items-center">
                        <FaArrowLeft className="mr-2" />
                        Go back
                    </Link>
                    <div className="mb-6">
                        <div className="flex items-center mb-8">
                            <img src={building} alt="Building" className="w-12 h-12 mr-4" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-8">{job.title}</h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-normal mb-6">{job.company}</p>
                        <button onClick={handleApplyClick} className="bg-orange-500 hover:bg-orange-600 text-white font-normal py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline text-lg">
                            Apply
                        </button>
                    </div>
                </div>
                <div className="flex-1 p-4 md:p-8 bg-gray-800 rounded-lg shadow-lg overflow-y-auto custom-scrollbar h-full md:h-auto max-h-screen">
                    <h3 className="text-xl font-semibold mb-4">Profile Summary</h3>
                    <p className="mb-4 font-light text-gray-300">{job.profileSummary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
                    <h3 className="text-xl font-semibold mb-4">Job Description</h3>
                    <p className="mb-4 font-light text-gray-300">{job.jobDescription || 'Duties include developing high-quality software design and architecture, identifying, prioritizing, and executing tasks in the software development life cycle, developing tools and applications by producing clean, efficient code, and automating tasks through appropriate tools and scripting. Reviewing and debugging code, performing validation and verification testing, collaborating with internal teams and vendors to fix and improve products, documenting development phases, and monitoring systems to ensure software is up-to-date with the latest technologies.'}</p>
                    <h3 className="text-xl font-semibold mb-4">Job Location</h3>
                    <p className="text-md text-gray-300 mb-4 font-light">{job.location || 'Remote'}</p>
                    <h3 className="text-xl font-semibold mb-4">Salary</h3>
                    <p className="text-md text-gray-300 mb-4 font-light">{job.salary || '$70,000 - $90,000 per year'}</p>
                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                    <ul className="list-disc list-inside text-md font-light text-gray-300">
                        {job.requirements ? job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        )) : (
                            <>
                                <li>Bachelor's degree in Computer Science</li>
                                <li>3+ years of experience in software development</li>
                                <li>Proficiency in React and Node.js</li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default JobDescription;
