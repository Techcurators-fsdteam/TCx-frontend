import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import building from '../assets/building.svg';
import Navbar from './Navbar';
import axios from 'axios';

const JobDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { job } = location.state || {};
    const [jobDescriptionHTML, setJobDescriptionHTML] = useState('');

    // useEffect(() => {
    //     const fetchJobDescription = async () => {
    //         try {
    //             const response = await axios.get(`/api/job-description/${job.id}`);
    //             setJobDescriptionHTML(response.data.html);
    //         } catch (error) {
    //             console.error('Error fetching job description:', error);
    //         }
    //     };

    //     if (job) {
    //         fetchJobDescription();
    //     }
    // }, [job]);
    useEffect(()=>{
        setJobDescriptionHTML(job.description)
    },[job])

    if (!job) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-white">No job selected</p>
            </div>
        );
    }

    const handleApplyClick = () => {
        navigate('/application', { state: { testId: job.testId, interviewId: job.interviewId, jobName: job.title } });
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
                    {jobDescriptionHTML ? (
                        <div dangerouslySetInnerHTML={{ __html: jobDescriptionHTML }} />
                    ) : (
                        <p className="text-gray-300">Loading job description...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default JobDescription;
