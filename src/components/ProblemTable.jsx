import React, { useState, useEffect } from 'react';
import { fetchAllChallenges } from '../api/axios'; // Adjust the import path as needed
import 'tailwindcss/tailwind.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ProblemTableRow = ({ title, topic, difficulty, status }) => {
    const difficultyClass = difficulty => {
        switch (difficulty) {
            case 'Easy':
                return 'text-green-600';
            case 'Medium':
                return 'text-yellow-500';
            case 'Hard':
                return 'text-red-600';
            default:
                return '';
        }
    };

    const statusClass = status => {
        switch (status) {
            case 'Solved':
                return 'text-green-500';
            case 'Unsolved':
                return 'text-orange-500';
            default:
                return '';
        }
    };

    return (
        <tr className="hover:bg-[#262626]">
            <td className="p-4"><li className='list-disc'>{title}</li></td>
            <td className="p-4">{topic}</td>
            <td className={`p-4 ${difficultyClass(difficulty)}`}>{difficulty}</td>
            <td className={`p-4 font-bold ${statusClass(status)}`}>{status}</td>
        </tr>
    );
};

const ProblemTable = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [uniqueTopics, setUniqueTopics] = useState([]);
    const [uniqueDifficulties, setUniqueDifficulties] = useState([]);

    useEffect(() => {
        const getAllChallenges = async () => {
            try {
                const data = await fetchAllChallenges();
                if (Array.isArray(data)) {
                    setProblems(data);

                    // Extract unique topics and difficulties from data
                    const topics = [...new Set(data.map(problem => problem.topic))];
                    const difficulties = [...new Set(data.map(problem => problem.difficultyLevel))];
                    setUniqueTopics(topics);
                    setUniqueDifficulties(difficulties);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching challenges:', error);
                setLoading(false);
            }
        };

        getAllChallenges();
    }, []);

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const filteredProblems = problems.filter(problem => {
        return (selectedDifficulty === 'All' || problem.difficultyLevel === selectedDifficulty) &&
            (selectedTopic === 'All' || problem.topic === selectedTopic) &&
            (selectedStatus === 'All' || problem.status === selectedStatus);
    });

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="container mx-auto w-[70%] min-h-[100vh] mt-36 flex justify-center items-center">
                    <div className="text-white text-2xl">Loading...</div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto w-[70%] min-h-[100vh] mt-36">
                <h1 className="text-start text-white font-bold text-3xl mb-8">GenAI Practice Challenges</h1>
                <div className='flex justify-start space-x-4 mb-8'>
                    <select
                        className="p-2 bg-gray-800 text-white rounded"
                        value={selectedDifficulty}
                        onChange={handleDifficultyChange}
                    >
                        <option value="All">All Difficulties</option>
                        {uniqueDifficulties.map((difficulty, index) => (
                            <option key={index} value={difficulty}>{difficulty}</option>
                        ))}
                    </select>
                    <select
                        className="p-2 bg-gray-800 text-white rounded"
                        value={selectedTopic}
                        onChange={handleTopicChange}
                    >
                        <option value="All">All Topics</option>
                        {uniqueTopics.map((topic, index) => (
                            <option key={index} value={topic}>{topic}</option>
                        ))}
                    </select>
                    <select
                        className="p-2 bg-gray-800 text-white rounded"
                        value={selectedStatus}
                        onChange={handleStatusChange}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Solved">Solved</option>
                        <option value="Unsolved">Unsolved</option>
                    </select>
                </div>
                <div className="overflow-x-auto flex justify-center items-center">
                    <table className="min-w-[100%] rounded-xl bg-gray-500 bg-opacity-5 text-white">
                        <thead className="bg-blue-600 bg-opacity-20">
                            <tr>
                                <th className="p-4 text-left">Problem Title</th>
                                <th className="p-4 text-left">Problem Topic</th>
                                <th className="p-4 text-left">Difficulty Level</th>
                                <th className="p-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProblems.map((problem, index) => (
                                <ProblemTableRow
                                    key={index}
                                    title={problem.testName}
                                    topic={problem.topic}
                                    difficulty={problem.difficultyLevel}
                                    status={problem.status}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProblemTable;
