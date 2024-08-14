import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQues, getQuestions, submitAnswers, submitInterviewTest, submitCorporateTest } from "../api/axios";
import { useUser } from "../store/UserContext";
import BouncingDotsLoader from "./Loaders/Bouncing";
import { toast } from "react-toastify";

export default function Test(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [testing, setTesting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ques, setQues] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [clearDisabled, setClearDisabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds (5 minutes)
  const [timerRunning, setTimerRunning] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Flag to prevent multiple submissions
  const [initialLoad, setInitialLoad] = useState(true); // Flag to track initial load

  const testData = JSON.parse(localStorage.getItem('testData'));
  const { fName, lName, domain, experience, testId, fullName, contactNumber, emailId,
    universityCollege,
    rollNo,
    branch,
    campus,
    resume, corporate, organisation,
    linkedInProfile, interviewId, username } = testData;
  const { user, setAppData } = useUser();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!initialLoad && document.visibilityState === 'hidden' && !submitted) {
        // alert("Tab is no longer visible!");
        handleFinalSubmit();
      }
    };

    const handleResize = () => {
      toast('Window size has changed');
      handleFinalSubmit();
    };

    // Add event listeners for visibility change and window resize
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [initialLoad, submitted]);

  useEffect(() => {
    if (testId) {
      async function fetchData() {
        try {
          const data = await getQuestions(testId);
          setQues(data.selectedQuestions);
          setTimeLeft(data.duration * 60);
          setSelectedAnswers(Array(data.selectedQuestions.length).fill(""));
          setInitialLoad(false); // Set initial load to false after data fetch
        } catch (err) {
          alert(err);
        }
      }
      fetchData();
    } else if (domain && experience) {
      async function fetchData() {
        try {
          const data = await getQues({ fName, lName, domain, experience });
          setQues(data.randomQuestions); // Assuming 'randomQuestions' is the array containing questions
          setSelectedAnswers(Array(data.randomQuestions.length).fill(""));
          setInitialLoad(false); // Set initial load to false after data fetch
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    } else {
      alert("Invalid Input");
    }
  }, [fName, lName, domain, experience, testId]);

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

  const handleFinalSubmit = useCallback(async () => {
    if (submitted) return; // Prevent multiple submissions
    setSubmitted(true);

    setLoading(true);

    if (domain && experience) {
      let calculatedScore = 0;
      for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i] === ques[i].answer) {
          calculatedScore += 1;
        }
      }
      setScore(calculatedScore);
      navigate("/result", { state: { fName, lName, score: calculatedScore } });
    } else if (testId) {
      let answers = [];
      for (let i = 0; i < ques.length; i++) {
        const questionId = ques[i]._id;
        const selectedOption = selectedAnswers[i];
        answers.push({ questionId, selectedOption });
      }
      if (corporate) {
        try {
          // console.log({
          //     fullName,
          //     contactNumber,
          //     emailId,
          //     universityCollege,
          //     organisation,
          //     experience,
          //     resume,
          //     linkedInProfile,
          //     testId,
          //     answers,
          //     username,
          //     testName: "GenAI Test" // assuming testName is part of testData
          //   })
          // Assuming the corporate submission requires these specific fields
          const response = await submitCorporateTest({
            fullName,
            contactNumber,
            emailId,
            universityCollege,
            organisation,
            experience,
            resume,
            linkedInProfile,
            testId,
            answers,
            username,
            testName: "GenAI Test" // assuming testName is part of testData
          });

          if (response.status === 201) {
            // setAppData(result);
            window.opener.postMessage({ type: 'testCompleted', data: { ques, answers: selectedAnswers, report: response.data } }, '*');
            window.close(); // Navigate to a corporate-specific result page
          } else {
            throw new Error('Failed to submit corporate test');
          }
        } catch (error) {
          toast.error(`Error: ${error.message}`);
          console.error("Error submitting corporate test:", error);
          setSubmitted(false); // Allow retry
        }
      }
      else if (campus) {
        const response = await submitInterviewTest({
          fullName,
          contactNumber,
          emailId,
          universityCollege,
          rollNo,
          branch,
          resume,
          linkedInProfile,
          testId,
          answers,
          username,
          interviewId
        });
        if (response.status === 201) {
          setSubmitted(true);
        }
      } else {
        const result = await submitAnswers(testId, answers, `${fName} ${lName}`, username);
        setAppData(result);
        window.opener.postMessage({ type: 'testCompleted', data: { ques, answers: selectedAnswers, report: result } }, '*');
        window.close();
      }
    }

    setLoading(false);
  }, [submitted, selectedAnswers, ques, testId, domain, experience, fName, lName, campus, fullName, contactNumber, emailId, universityCollege, rollNo, branch, resume, organisation, experience, linkedInProfile, username, interviewId, navigate, setAppData]);

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
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currIndex] = "";
      return updatedAnswers;
    });
    setClearDisabled(true);
  };

  const handleFullScreen = () => {
    setTesting(false);
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };
  if (submitted) {
    if(campus){
      return <TestSubmissionSuccess />;
    }
    else{
      window.opener.postMessage({ type: 'testCompleted', data: { ques, answers: selectedAnswers, report: response.data } }, '*'); // Navigate to a corporate-specific result page
    }
    
  }

  const renderTextWithNewLines = (text) => {
    return text.split("\n").map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  const renderQuestion = (question, index) => {
    if (testId) {
      return (
        <div key={index}>
          <p className="text-black mb-4">
            <span className="text-xl font-semibold">Question {index + 1}:</span> {renderTextWithNewLines(question.questionText)}
          </p>
          <div className="flex flex-col mb-4">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center">
                <input
                  type="radio"
                  id={`option_${index}_${optionIndex}`}
                  name={`question_${index}`}
                  value={option.text}
                  checked={selectedAnswers[index] === option.text}
                  onChange={() => handleOptionChange(index, option.text)}
                />
                <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2">
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div key={index}>
          <p className="text-black mb-4">
            <span className="text-xl font-semibold">Question {index + 1}:</span> {renderTextWithNewLines(question.question)}
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
                <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {testing ? (
        <div className="w-full h-full flex justify-center items-center">
          <button onClick={handleFullScreen} className="bg-[#FF7C1D] mx-5 text-white px-5 py-2 mt-3 h-fit border-gray-500 rounded-md">
            Start Test
          </button>
        </div>
      ) : (
        <>
          {loading ? <BouncingDotsLoader /> : (
            <>
              <div className="flex justify-center mt-24 w-full p-4">
                <div className="w-full md:w-[80%] bg-white rounded-2xl p-20 relative">
                  <div className="absolute top-4 right-4">
                    <p className="text-black text-lg">
                      Time Remaining: {Math.floor(timeLeft / 60)}:
                      {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
                    </p>
                  </div>
                  {ques.length > 0 && (
                    <>
                      {renderQuestion(ques[currIndex], currIndex)}
                      {finish ? (
                        <div className="flex justify-between">
                          <button
                            onClick={prev}
                            className="bg-[#8C8C8C] text-black px-5 py-2 mt-3 h-fit border-gray-500 rounded-md"
                          >
                            Previous
                          </button>
                          <div>
                            <button
                              onClick={handleClearSelection}
                              className="bg-[#FF7C1D] text-white px-5 py-2 mt-3 h-fit border-gray-500 rounded-md"
                              disabled={clearDisabled}
                            >
                              Clear Selection
                            </button>
                            <button
                              onClick={handleFinalSubmit}
                              className="bg-[#FF7C1D] mx-5 text-white px-5 py-2 mt-3 h-fit border-gray-500 rounded-md"
                            >
                              {selectedAnswers[currIndex] ? "Submit" : "Skip and Submit"}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between">
                          <button
                            onClick={prev}
                            className="bg-[#8C8C8C] text-black px-5 py-2 mt-3 h-fit border-gray-500 rounded-md"
                          >
                            Previous
                          </button>
                          <div>
                            <button
                              onClick={handleClearSelection}
                              className="bg-[#FF7C1D] text-white px-5 py-2 mt-3 h-fit border-gray-500 rounded-md"
                              disabled={clearDisabled}
                            >
                              Clear Selection
                            </button>
                            <button
                              onClick={next}
                              className="bg-[#FF7C1D] mx-5 text-white px-5 py-2 mt-3 h-fit border-gray-500 rounded-md"
                            >
                              {selectedAnswers[currIndex] ? "Next" : "Skip and Next"}
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

function TestSubmissionSuccess() {
  const handleGoHome = () => {
    window.opener.postMessage({ type: 'testCompleted' }, '*');
    window.close();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-3xl text-white font-semibold mb-4">Your Test Has Been Submitted Successfully!</h1>
        <button
          onClick={handleGoHome}
          className="bg-[#FF7C1D] hover:bg-[#FF7C1D] text-white font-bold py-2 px-4 rounded"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
}
