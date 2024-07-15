import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Report = () => {
  const location = useLocation();
  const { ques, answers } = location.state;
  return (
    <section className="flex flex-col w-full justify-center ">
      {ques.map((question, index) => (
        <RenderQuestion
          key={index}
          index={index}
          question={question}
          answers={answers}
        />
      ))}
      <Link to={'/certificate'} className="ml-[42%] mt-10 mb-28 bg-[#FF7C1D] text-xl text-white px-5 py-4  h-fit border-gray-500 w-fit  rounded-xl "> Continue to Results Page</Link>
    </section>
  );
};

const RenderQuestion = ({ question, answers, index }) => {
  
  return (
    <div
      key={index}
      className="mt-24 ml-[20%] items-center w-fit md:w-[60%] bg-white rounded-2xl p-20 relative"
    >
      <p className="text-black text-2xl mb-4">
        <span className="text-3xl font-semibold">Question {index + 1}:</span>{" "}
        {question.questionText}
      </p>
      <div className="flex flex-col mb-4">
        {question.options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            className={`flex items-center px-4 rounded-2xl text-xl ${option.isCorrect ? "bg-green-700" : ""
              }`}
          >
            <input
              type="radio"
              id={`option_${index}_${optionIndex}`}
              name={`question_${index}`}
              value={option.text}
              disabled={true}
              checked={answers[index] === option.text}
              readOnly
            />
            <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2">
              {option.text}
            </label>
          </div>
        ))}
      </div>
      <p className="text-2xl font-semibold">
        Your Answer:{" "}
        {answers[index] === "" ? (
          <span className="text-xl font-normal">
            You have Skipped this Question
          </span>
        ) : (
          <span className="text-xl font-normal">{answers[index].text}</span>
        )}
      </p>
    </div>
  );
};

export default Report;
