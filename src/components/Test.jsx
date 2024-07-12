import React, { useState, useEffect } from "react";
// import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { getQues, getQuestions, submitAnswers } from "../api/axios";
import { useUser } from "../store/UserContext";
import BouncingDotsLoader from "./Loaders/Bouncing";

export default function Test(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [ques, setQues] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [finish, setFinish] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [clearDisabled, setClearDisabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds (5 minutes)
  const [timerRunning, setTimerRunning] = useState(true);
  const { fName, lName, domain, experience, testId } = location.state || {};
  const [score, setScore] = useState(0);
  const { user, setAppData } = useUser();
  const [testid, setTestId] = useState();
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (fName && lName && testId) {

      async function fetchData() {
        try {
          const data = await getQuestions(testId);
          console.log(data)
          setQues(data.selectedQuestions)
          setTimeLeft(data.duration * 60)
          setTestId(data.testId)
          setSelectedAnswers(Array(data.selectedQuestions.length).fill(""));
        }
        catch (err) {
          alert(err)
        }
      }
      fetchData();

    }
    else if (domain && experience) {
      async function fetchData() {
        try {
          if (fName && lName && domain && experience) {
            const data = await getQues({ fName, lName, domain, experience });
            setQues(data.randomQuestions); // Assuming 'randomQuestions' is the array containing questions
            setSelectedAnswers(Array(data.randomQuestions.length).fill(""));
            console.log(data.randomQuestions);
          } else {
            console.error("Missing required parameters:", {
              fName,
              lName,
              domain,
              experience,
            });
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }
    else {
      alert("Invalid Input")
    }

  }, [fName, lName, domain, experience]);

  useEffect(() => {
    if (currIndex === ques.length - 1) {
      setFinish(true);
    } else {
      setFinish(false);
    }
  }, [currIndex, ques]);

  // Function to start the timer
  const startTimer = () => {
    setTimerRunning(true);
  };

  // Function to stop the timer
  const stopTimer = () => {
    setTimerRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setTimeLeft(300); // Reset to 300 seconds
    setTimerRunning(false);
  };

  // Timer countdown effect
  useEffect(() => {
    let interval;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Handle timer completion actions here
      console.log("Timer expired!");
      handleFinalSubmit();
      setTimerRunning(false);
      // You can add additional logic here, such as auto-submitting the quiz
    }

    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  const handleFinalSubmit = async () => {
    setLoading(true)
    if (domain && experience) {
      let calculatedScore = 0;
      for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i] === ques[i].answer) {
          calculatedScore += 1;
        }
      }
      setScore(calculatedScore);
      navigate("/result", { state: { fName, lName, score: calculatedScore } });
    }
    else if (testId) {
      let answers = []
      for (let i = 0; i < ques.length; i++) {
        const questionId = ques[i]._id;
        const selectedOption = selectedAnswers[i];
        const data = { questionId, selectedOption };
        answers.push(data);
      }
      const result = await submitAnswers(testid, answers, `${fName} ${lName}`,user.username)
      setAppData(result)
      navigate('/testReport', { state: { ques: ques, answers: selectedAnswers } })


    }
    setLoading(false)
  };

  const next = () => {
    if (currIndex < ques.length - 1) {
      setCurrIndex(currIndex + 1);
    }
    setClearDisabled(true); // Disable clear button when moving to the next question
  };

  const prev = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
    setClearDisabled(true); // Disable clear button when moving to the previous question
  };

  const handleOptionChange = (index, selectedOption) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = selectedOption;
    setSelectedAnswers(updatedSelectedAnswers);
    setClearDisabled(false); // Enable clear button when an option is selected
  };

  const handleClearSelection = () => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currIndex] = ""; // Clear the selected answer
      return updatedAnswers;
    });
    setClearDisabled(true); // Disable clear button after clearing the answer
  };

  const renderQuestion = (question, index) => {
    // Conditional rendering: Only render if testId is truthy
    if (testId) {
      return (
        <div key={index}>
          <p className="text-black mb-4">
            <span className="text-xl font-semibold">Question {index + 1}:</span> {question.questionText}
          </p>
          <div className="flex flex-col mb-4">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center">
                <input
                  type="radio"
                  id={`option_${index}_${optionIndex}`}
                  name={`question_${index}`}
                  value={option.optionText}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
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
                <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ); // Return null if testId is falsy
    }
  };


  return (
    <>
      {loading ?<BouncingDotsLoader/>: 
      <>
        {/* <Header /> */}
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
      </>}
    </>
  );
}
