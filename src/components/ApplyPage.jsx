import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDrives } from '../api/axios';
import Navbar from './Navbar';
import Footer from './Footer';
import building from '../assets/building.svg';

function ApplyPage() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDrives();
            if (!result.error) {
                setJobs(result);
            } else {
                console.error('Failed to fetch drives:', result.message);
            }
        };

        fetchData();
    }, []);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const handleApplyClick = (job) => {
        // console.log(job)
        const currentTime = new Date();
        const startTime = new Date(job.startTime);
        const endTime = new Date(job.endTime);

        // Comment out the alert
        if (currentTime < startTime || currentTime > endTime) {
            // alert("The test has not started or has already ended.");
        }

        navigate('/job-description', { state: { job } });
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center items-start pt-32 bg-black text-white min-h-screen px-4 md:px-10">
                <div className="w-full text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold pb-8">Get Your Dream Job</h1>
                    <div className="flex flex-wrap justify-center">
                        {jobs.slice(0, visibleCount).map((job, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg m-2 md:m-4 w-full md:w-80">
                                <div className="flex justify-center items-center mb-4">
                                    <img src={building} alt="Building" className="w-6 h-6 mr-2" />
                                    <p className="text-lg text-gray-400 font-normal">{job.company}</p>
                                </div>
                                <h2 className="text-xl font-medium mb-4">{job.title}</h2>
                                <button onClick={() => handleApplyClick(job)} className="bg-orange-500 hover:bg-orange-600 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                    {visibleCount < jobs.length && (
                        <button
                            className="mx-auto mt-4 bg-gray-700 hover:bg-gray-600 text-white font-normal py-2 px-8 rounded"
                            onClick={showMore}
                        >
                            Show More
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ApplyPage;
