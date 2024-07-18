import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Report = () => {
  const location = useLocation();
  const { ques, answers } = location.state;
  const [showAnswers, setShowAnswers] = useState(false);

  const totalQuestions = ques.length;
  const attemptedQuestions = answers.filter(answer => answer !== "").length;
  const correctQuestions = answers.filter((answer, index) => {
    const correctOption = ques[index].options.find(option => option.isCorrect);
    return correctOption && answer === correctOption.text;
  }).length;
  const wrongQuestions = attemptedQuestions - correctQuestions;
  const skippedQuestions = totalQuestions - attemptedQuestions;
  const score = (correctQuestions / totalQuestions) * 100;

  return (
    <section className="flex flex-col items-center w-full p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg m-4 text-center">
        <h2 className="text-2xl sm:text-xl font-semibold mb-4">Summary</h2>
        <p className="mb-2 text-lg sm:text-base">Total Questions: {totalQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Attempted Questions: {attemptedQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Correct Questions: {correctQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Wrong Questions: {wrongQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Skipped Questions: {skippedQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Score: {score}%</p>
        <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to={'/certificate'}
            className="bg-[#FF7C1D] text-xl sm:text-lg text-white px-5 py-3 h-fit border-2 border-orange-500 w-fit rounded-md"
          >
            Continue to Results Page
          </Link>
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className="bg-white border-2 border-orange-500 text-xl sm:text-lg text-orange-500 px-4 py-3 h-fit w-fit rounded-md"
          >
            {showAnswers ? 'Hide Answers' : 'Review Answers'}
          </button>
        </div>
      </div>
      {showAnswers && (
        <div className="w-full max-w-4xl mt-10 text-lg sm:text-base">
          {ques.map((question, index) => (
            <RenderQuestion
              key={index}
              index={index}
              question={question}
              answers={answers}
            />
          ))}
        </div>
      )}
    </section>
  );
};

const RenderQuestion = ({ question, answers, index }) => {
  return (
    <div
      key={index}
      className="mt-4 w-full bg-white rounded-2xl p-6"
    >
      <p className="text-black text-2xl sm:text-xl mb-4">
        <span className="text-3xl sm:text-2xl font-semibold">Question {index + 1}:</span>{" "}
        {question.questionText}
      </p>
      <div className="flex flex-col mb-4">
        {question.options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            className={`flex items-center px-4 rounded-2xl text-xl sm:text-lg ${
              option.isCorrect ? "bg-green-700" : ""
            }`}
          >
            <input
              type="radio"
              id={`option_${index}_${optionIndex}`}
              name={`question_${index}`}
              value={option.text}
              disabled={true}
              checked={answers[index].selectedOption === option.text}
              readOnly
            />
            <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2">
              {option.text}
            </label>
          </div>
        ))}
      </div>
      <p className="text-2xl sm:text-xl font-semibold">
        Your Answer:{" "}
        {answers[index] === "" ? (
          <span className="text-xl sm:text-lg font-normal">
            You have Skipped this Question
          </span>
        ) : (
          <span className="text-xl sm:text-lg font-normal">{answers[index].selectedOption}</span>
        )}
      </p>
    </div>
  );
};

export default Report;
