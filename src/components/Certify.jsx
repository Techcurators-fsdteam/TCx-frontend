import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../assets/certifybg.svg";
import InfoIcon from "../assets/info-icon.svg";
import Sei from "../assets/SEI.svg";
import BouncingDotsLoader from "./Loaders/Bouncing";
import { getTests } from "../api/axios";
import { useUser } from "../store/UserContext";

function Certify() {
  const [loading, setLoading] = useState(true);
  const [tests, setTests] = useState([]);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        const response = await getTests();
        if (response.hasError) {
          throw new Error('Failed to fetch tests');
        }
        setTests(response.data);
      } catch (err) {
        console.error('Error fetching tests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const handleGetCertifiedClick = (testId, testName) => {
    if (!user) {
      alert("Please log in to proceed.");
      navigate('/login');
      return;
    }

    const certificate = user.certificates.find(cert => cert.tid === testId);
    // console.log(testId);
    // console.log(user.certicates)
    if (certificate) {
      const lastSubmitted = new Date(certificate.updatedAt);
      const currentDate = new Date();
      const nextEligibleDate = new Date(lastSubmitted.setDate(lastSubmitted.getDate() + 30));

      if (currentDate < nextEligibleDate) {
        const daysRemaining = Math.ceil((nextEligibleDate - currentDate) / (1000 * 60 * 60 * 24));
        alert(`You have already submitted this test. You can retake it after ${daysRemaining} days.`);
        return;
      }
    }

    navigate('/testIntro', { state: { testName, testId } });
  };

  return (
    <>
      {loading ? (
        <BouncingDotsLoader />
      ) : (
        <>
          <Navbar />
          <div
            className="flex flex-col w-full my-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bg})`, height: "400px" }}
          >
            <div className="flex flex-col w-[90%] sm:w-[341px] justify-center h-full pl-10 text-white">
              <p className="text-3xl md:text-5xl leading-tight">Get Certified</p>
              <p className="text-lg md:text-2xl sm:text-right mt-2">
                Certification test
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="flex justify-center items-center mb-20 px-4">
            <div
              className="flex flex-col md:flex-row w-full md:w-[90%] justify-center gap-4"
              style={{ marginTop: "-5%" }}
            >
              <div className="rounded-xl bg-white p-6 shadow-md flex-1 max-w-xs md:max-w-sm mx-auto">
                <h1 className="text-xl font-bold text-black mb-4">
                  Stand out from the crowd
                </h1>
                <p className="text-sm text-orange-600">
                  Get certified in technical skills by taking the TCx
                  Certification Test
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md flex-1 max-w-xs md:max-w-sm mx-auto mt-4 md:mt-0">
                <h1 className="text-xl font-bold text-black mb-4">
                  Standardised Assessment
                </h1>
                <p className="text-sm text-orange-600">
                  Assessments are organised around specific skills and are
                  carefully curated based on years of recruiting data from 2000+
                  companies
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md flex-1 max-w-xs md:max-w-sm mx-auto mt-4 md:mt-0">
                <h1 className="text-xl font-bold text-black mb-4">
                  Enrich your profile
                </h1>
                <p className="text-sm text-orange-600">
                  Upon successfully clearing an assessment, you can promote
                  yourself using the TCx certificate to peers and employers
                </p>
              </div>
            </div>
          </div>

          {/* Roles Certification Section */}
          <div className="flex justify-center items-center mb-10">
            <div className="w-full md:w-[90%] flex justify-center md:justify-start">
              <p className="text-orange-600 text-2xl font-medium text-center md:text-left">
                Get Your Roles Certified
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-center mb-20 px-4">
            <div className="w-full md:w-[90%] flex flex-wrap justify-center md:justify-start gap-10">
              {tests.map((test) => (
                <div key={test.testId} className="bg-gray-900 text-white rounded-xl p-5 w-full max-w-xs md:max-w-md relative flex flex-col justify-between shadow-lg mt-4 md:mt-0 mx-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">{test.testName}</h2>
                    <img src={InfoIcon} alt="Info Icon" className="w-5 h-5 cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => handleGetCertifiedClick(test.testId, test.testName)}
                      className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900 transition-all"
                    >
                      Get Certified
                    </button>
                    <img src={Sei} alt="SEI Logo" className="w-12 h-12 md:w-20 md:h-20 object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Certify;
