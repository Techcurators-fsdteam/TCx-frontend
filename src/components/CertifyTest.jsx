import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getQuestions, submitAnswers } from '../api/axios';
import { useUser } from '../store/UserContext';
import BouncingDotsLoader from './Loaders/Bouncing';

export default function CertTest() {
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const [ques, setQues] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [clearDisabled, setClearDisabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerRunning, setTimerRunning] = useState(true);
  const { fName, lName, testId } = location.state || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (testId) {
        const questions = await getQuestions(testId);
        setQues(questions);
        setSelectedAnswers(Array(questions.length).fill(""));
      }
    }
    fetchData();
  }, [testId]);

  useEffect(() => {
    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
    toggleFullScreen();
  }, [])

  useEffect(() => {
    if (currIndex === ques.length - 1) {
      setFinish(true);
    } else {
      setFinish(false);
    }
  }, [currIndex, ques]);

  useEffect(() => {
    let interval;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleFinalSubmit();
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (selectedAnswers.some(answer => answer !== "")) { // Check if there's any interaction
        // Standard for most browsers
        event.preventDefault();
        // Chrome requires returnValue to be set
        event.returnValue = 'If you reload this page, page ki maa chud jayegi';
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [selectedAnswers]); // Ensure this effect runs when selectedAnswers changes




  const handleFinalSubmit = async () => {
    if (!loading) {
      setLoading(true);
      const results = await submitAnswers(testId, selectedAnswers.map((answer, index) => ({
        questionId: ques[index]._id,
        selectedOption: answer
      })), `${fName} ${lName}`);
      navigate('/result', { state: results });
      setLoading(false);
    }
  };

  const next = () => {
    if (currIndex < ques.length - 1) {
      setCurrIndex(currIndex + 1);
    }
    setClearDisabled(true);
  };

  const prev = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
    setClearDisabled(true);
  };

  const handleOptionChange = (index, selectedOption) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = selectedOption;
    setSelectedAnswers(updatedSelectedAnswers);
    setClearDisabled(false);
  };

  const handleClearSelection = () => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currIndex] = "";
    setSelectedAnswers(updatedAnswers);
    setClearDisabled(true);
  };

  const renderQuestion = (question, index) => (
    <div key={index}>
      <p className="text-black mb-4">
        <span className="text-xl font-semibold">Question {index + 1}:</span> {question.question}
      </p>
      <div className="flex flex-col mb-4">
        {question.options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex items-center">
            <input
              type="radio"
              id={`option_${index}_${optionIndex}`}
              name={`question_${index}`}
              value={option}
              checked={selectedAnswers[index] === option}
              onChange={() => handleOptionChange(index, option)}
            />
            <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4">
      {loading ? <BouncingDotsLoader /> : (
        <>
          <div className="mt-10">
            <p className="text-2xl font-bold">Certification Test</p>
            <p className="text-lg">Good luck, {fName} {lName}!</p>
            <div className="mt-4">
              {ques.length > 0 && (
                <>
                  {renderQuestion(ques[currIndex], currIndex)}
                  <div className="flex justify-between mt-4">
                    <button onClick={prev} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>
                    {finish ? (
                      <button onClick={handleFinalSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit Test</button>
                    ) : (
                      <button onClick={next} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                    )}
                    <button onClick={handleClearSelection} disabled={clearDisabled} className="bg-red-500 text-white px-4 py-2 rounded">Clear</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
