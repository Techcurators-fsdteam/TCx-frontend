import React, { useRef, useState } from "react";
import msg from "../assets/msg.svg";
import { Link } from "react-router-dom";
import { VerifyOTP } from "../api/axios";

function Otp({ email, setEmail, setOTPModalOpen, setPasswordModalOpen }) {
  const otpRefs = Array(6)
    .fill(0)
    .map(() => useRef(null));
  const [otp, setOtp] = useState(Array(6).fill(""));
  // Initialize state for storing the complete OTP

  const handleSubmit = async () => {
    var OTP = "";
    otp.forEach((e) => {
      OTP += e;
    });
    // console.log(OTP)
    const res = await VerifyOTP(email, OTP);
    console.log(res);
    if (res.status == 200) {
      setOTPModalOpen(false);
      setPasswordModalOpen(true);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    if (!/^\d*$/.test(value)) {
      // Ensures only numbers are input
      e.target.value = "";
      return;
    }

    if (value.length > 1) {
      e.target.value = value.slice(0, 1); // Ensures only a single digit per input field
    }

    // Update the OTP state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && value !== "") {
      otpRefs[index + 1].current.focus(); // Move focus to the next input field
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpRefs[index - 1].current.focus(); // Move focus to the previous input field
    }
  };

  return (
    <div className="flex justify-center items-center min-h-fit bg-black">
      <div className="flex flex-col items-center justify-center w-11/12  text-center space-y-4 px-0 py-4">
        <img src={msg} alt="Message Icon" className="w-16 h-16" />
        <p className="text-white font-bold text-2xl md:text-3xl">
          Check your email
        </p>
        <p className="text-gray-500 font-medium text-lg">
          We have sent the OTP to your email address.
        </p>
        <label htmlFor="otp" className="block text-white w-full mt-2 text-left">
          OTP
        </label>
        <div className="flex space-x-2 justify-center">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              required
              maxLength="1"
              ref={otpRefs[index]}
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="w-12 h-12 text-center rounded-md bg-gray-700 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-0 bg-orange-600 text-white rounded-xl text-lg hover:bg-orange-500 focus:outline-none"
        >
          Reset Password
        </button>
        <a href="#" className="text-gray-400 text-sm mt-2 hover:underline">
          Didn't receive the email? Resend
        </a>
        <Link
          to="/Login"
          className="inline-flex items-center justify-center py-2 px-4 text-white rounded-full text-lg group"
        >
          <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">
            &#x2190;
          </span>{" "}
          {/* Unicode for left arrow */}
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Otp;
