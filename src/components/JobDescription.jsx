import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import building from '../assets/building.svg';

const JobDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { job } = location.state || {};

    useEffect(() => {
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

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
            <div className="flex flex-col md:flex-row justify-center items-start h-screen bg-gray-900 text-white p-4 md:p-10">
                <div className="flex-1 flex flex-col justify-center p-4 md:p-8">
                    <Link to="/apply" className="text-orange-500 underline underline-offset-2 mb-4 block text-lg md:text-xl">
                        Go back
                    </Link>
                    <div className="mb-6">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-2">{job.title}</h2>
                        <div className="flex items-center mb-4">
                            <img src={building} alt="Building" className="w-6 h-6 mr-2" />
                            <p className="text-xl md:text-xl text-gray-400 font-normal">{job.company}</p>
                        </div>
                        <button onClick={handleApplyClick} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg md:text-xl">
                            Apply
                        </button>
                    </div>
                </div>
                <div className="flex-1 p-4 md:p-8 bg-gray-800 rounded-lg shadow-lg overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(100vh - 2.5rem)', height: '100%' }}>
                    <h3 className="text-xl font-semibold mb-4">Profile Summary</h3>
                    <p className="mb-4">{job.profileSummary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
                    <h3 className="text-xl font-semibold mb-4">Job Description</h3>
                    <p className="mb-4">{job.jobDescription || 'Duties include developing high-quality software design and architecture, identifying, prioritizing, and executing tasks in the software development life cycle, developing tools and applications by producing clean, efficient code, and automating tasks through appropriate tools and scripting. Reviewing and debugging code, performing validation and verification testing, collaborating with internal teams and vendors to fix and improve products, documenting development phases, and monitoring systems to ensure software is up-to-date with the latest technologies.'}</p>
                    <h3 className="text-xl font-semibold mb-4">Job Location</h3>
                    <p className="text-md text-gray-300 mb-4">{job.location || 'Remote'}</p>
                    <h3 className="text-xl font-semibold mb-4">Salary</h3>
                    <p className="text-md text-gray-300 mb-4">{job.salary || '$70,000 - $90,000 per year'}</p>
                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                    <ul className="list-disc list-inside text-md text-gray-300">
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
