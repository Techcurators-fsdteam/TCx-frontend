import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
// import { useUser } from "../store/UserContext";

const Report = () => {
  const location = useLocation();
  const testReport = JSON.parse(localStorage.getItem('testReport'));

  const { ques, answers, report } = testReport;
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate()
  // const { getAppData } = useUser();
  // console.log(testReport)
  // const { passed, certificateLink } = getAppData();
  // console.log(passed)
  console.log(testReport)

  const totalQuestions = ques.length;
  const score = testReport.report.score;
  // console.log(answers)
  const attemptedQuestions = answers.filter(answer => answer !== "").length;
  const correctQuestions = score/5;
  console.log(correctQuestions)
  const wrongQuestions = attemptedQuestions - correctQuestions;
  // const skippedQuestions = totalQuestions - attemptedQuestions;
  // const history=useHistory()
  // console.log(report)
  function countCorrectAnswers(questions, answers) {
    return answers.reduce((acc, answer, index) => {
      const correctOption = questions[index].options.find(option => option.isCorrect);
      if (correctOption && answer === correctOption.text) {
        acc++;
      }
      return acc;
    }, 0);
  }

  useEffect(() => {
    const handleBeforeUnload = (event) => {

      event.preventDefault();
      event.returnValue = '';

      return 'You will be redirected to the Home page on reloading this page.';
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);



  useEffect(() => {
    // Function to handle back navigation
    const handleBackNavigation = () => {
      // Detect if user is trying to go back
      window.history.pushState(null, null, location.pathname);
      window.addEventListener('popstate', () => {
        if (location.pathname === '/testReport') {

          navigate('/');
        }
      });
    };

    handleBackNavigation();

    return () => {
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, [location.pathname]);
  const cert = report.certificateLink;
  // console.log(cert)
  const downloadPdf = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [500, 500]
    });

    // Image URL or base64 string
    const imageUrl = cert;
    // console.log(cert)

    // Add image to PDF
    doc.addImage(imageUrl, 'JPEG', 10, 10, 480, 480);

    // Save the PDF
    doc.save('download.pdf');
  };





  return (
    <section className="flex flex-col items-center w-full p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg m-4 text-center">
        {report.passed ? <h1 className="text-xl">Congratulations on passing the test! 🎉 </h1> : <h1 className="text-xl font-semibold">Don't be discouraged! 💪 Keep pushing forward! 🌟</h1>}
        <h2 className="text-2xl sm:text-xl font-semibold mb-4">Summary</h2>
        <p className="mb-2 text-lg sm:text-base">Total Questions: {totalQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Attempted Questions: {attemptedQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Correct Questions: {score/5}</p>
        <p className="mb-2 text-lg sm:text-base">Wrong Questions: {wrongQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Skipped Questions: {totalQuestions - attemptedQuestions}</p>
        <p className="mb-2 text-lg sm:text-base">Score: {score}%</p>
        <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
          {report.passed ? <button onClick={downloadPdf} className="bg-[#FF7C1D] text-xl sm:text-lg text-white px-5 py-3 h-fit border-2 border-orange-500 w-fit rounded-md">Claim your Certificate</button> : <Link to={'/'} className="bg-[#FF7C1D] text-xl sm:text-lg text-white px-5 py-3 h-fit border-2 border-orange-500 w-fit rounded-md">
            Continue to Home Page
          </Link>
          }
          <button onClick={() => setShowAnswers(!showAnswers)} className="bg-white border-2 border-orange-500 text-xl sm:text-lg text-orange-500 px-4 py-3 h-fit w-fit rounded-md">
            {showAnswers ? 'Hide Answers' : 'Review Answers'}
          </button>
        </div>
      </div>
      {showAnswers && (
        <div className="w-full max-w-4xl mt-10 text-lg sm:text-base">
          {ques.map((question, index) => (
            <RenderQuestion key={index} index={index} question={question} answers={answers} />
          ))}
        </div>
      )}
    </section>
  );
};

const RenderQuestion = ({ question, answers, index }) => {
  const userAnswer = answers[index].text || answers[index];
  const isCorrect = question.options.some(option => option.text === userAnswer && option.isCorrect);

  return (
    <div className="mt-4 w-full bg-white rounded-2xl p-6">
      <p className="text-black text-2xl sm:text-xl mb-4">
        <span className="text-3xl sm:text-2xl font-semibold">Question {index + 1}:</span>{" "}
        {question.questionText}
      </p>
      <div className="flex flex-col mb-4">
        {question.options.map((option, optionIndex) => (
          <div key={optionIndex} className={`flex items-center px-4 py-2 rounded-2xl text-xl sm:text-lg ${userAnswer === option.text ? (option.isCorrect ? "bg-green-200" : "bg-red-200") : "bg-white"}`}>
            <input
              type="radio"
              id={`option_${index}_${optionIndex}`}
              name={`question_${index}`}
              value={option.text}
              disabled={true}
              readOnly
            />
            <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2 flex-grow">
              {option.text}
              {userAnswer === option.text && (
                option.isCorrect ? (
                  <span className="text-green-600">✔</span> // Green tick
                ) : (
                  <span className="text-red-600">✘</span> // Red cross
                )
              )}
            </label>
          </div>
        ))}
      </div>
      {userAnswer === "" && (
        <p className="text-lg sm:text-md font-semibold text-gray-500">
          *You skipped this question
        </p>
      )}
    </div>
  );
};

export default Report;
