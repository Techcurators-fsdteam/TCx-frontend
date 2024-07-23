import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getDrives } from '../api/axios'; // Adjust the import path according to your file structure
import Navbar from './Navbar';
import Footer from './Footer';

function ApplyPage() {
    const [visibleCount, setVisibleCount] = useState(3);
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate(); // Instantiate navigate function

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
        const currentTime = new Date();
        const startTime = new Date(job.startTime);
        const endTime = new Date(job.endTime);

        if (currentTime >= startTime && currentTime <= endTime) {
            navigate('/application', { state: { testId: job.testId } });
        } else {
            alert("The test has not started or has already ended.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center items-start pt-32 bg-gray-900 text-white min-h-screen px-10">
                <div className="w-full text-center">
                    <h1 className="text-5xl font-bold pb-8">Get Your Dream Job</h1>
                    <div className="flex flex-wrap justify-center">
                        {jobs.slice(0, visibleCount).map((job, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg m-4 w-96">
                                <h2 className="text-xl font-semibold">{job.title}</h2>
                                <p className="mb-4">{job.company}</p>
                                <button onClick={() => handleApplyClick(job)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>
                    {visibleCount < jobs.length && (
                        <button
                            className="mx-auto mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded"
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
