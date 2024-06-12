import { useState } from "react";
import { register as signup } from "../api/axios";
import { useNavigate } from "react-router-dom";
import ldin from "../assets/ldin.svg";
import google from "../assets/google.svg";
import foto from "../assets/robot.svg";
import bgi from "../assets/bgimg.svg";
import coi from "../assets/logo.svg";
import eye from "../assets/eyePasswordShow.svg";
import eyeStash from "../assets/eyePasswordHide.svg";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  function handleSignUp(e) {
    e.preventDefault(); // Prevent the default form submission
    const data = { email, username, password, firstName, lastName };
    signup(data)
      .then((res) => {
        console.log(res);
        navigate("/login"); // Use navigate for redirection to login
      })
      .catch((err) => {
        console.error(err); // Handle errors appropriately
      });
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <div
          className="absolute top-0 right-0 w-3/6 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgi})` }}
        ></div>
        <div className="w-3/6 h-4/6 flex bg-gray-800 z-10 rounded-lg">
          <div>
            <img
              className="absolute top-0 left-0 w-25 h-25 mt-4 ml-4 rounded-full"
              src={coi}
              alt="Corner Image"
            />
          </div>

          <div className="w-3/6 h-full">
            <img
              className="w-full h-full object-cover rounded tl-full object-center"
              src={foto}
              alt="image"
            />
          </div>

          <div className="w-3/6 p-8 bg-gray-800 rounded-lg">
            <div>
              <h3 className="text-orange-500 mb-0 text-lg pt-2 pb-3">
                Create your Account
              </h3>
            </div>

            <div className="flex mb-4">
              <div className="mr-2">
                <label htmlFor="firstname" className="block text-white"></label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your First Name"
                  name="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs text-white focus:outline-none placeholder-orange-500 glowing-border"
                />
              </div>
              <div className="ml-2">
                <label htmlFor="lastname" className="block text-white"></label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Last Name"
                  name="last_name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs text-white focus:outline-none placeholder-orange-500 glowing-border"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-white" />
              <input
                 type="text"
                 required
                 placeholder="Enter Your Username"
                 name="username"
                 value={username}
                 onChange={(e) => setUser(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs text-white focus:outline-none placeholder-orange-500 glowing-border"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white" />
              <input
                 type="email"
                 required
                 placeholder="Enter Your Email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs text-white focus:outline-none placeholder-orange-500 glowing-border"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-white" />
              <input
                type="password"
                required
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs text-white focus:outline-none placeholder-orange-500 glowing-border"
              />
              <img
                src={passwordVisible ? eyeStash : eye}
                alt="toggle"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                style={{ width: "20px", height: "20px" }}
              />
            </div>

            <div className="flex items-center mb-4">
              <p className="text-white text-sm">Already a Member? &nbsp;</p>
              <a href="/login" className="text-blue-500 text-xs hover:underline">
                Log in
              </a>
            </div>

            <div className="p-2">
              <button onClick={handleSignUp} className="w-full py-2 px-4 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>

            <div>
              <div className="text-center">
                <p className="text-white rounded-full text-lg ">
                  or sign up with
                </p>
              </div>
              <div className="flex justify-center mt-4 pb-">
                {/* <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-2xl mx-2 hover:text-blue-700 cursor-pointer" />
                <FontAwesomeIcon icon={faGoogle} className="text-red-600 text-2xl mx-2 hover:text-red-700 cursor-pointer" /> */}
                <img
                  src={ldin}
                  alt="Linkedin"
                  className="text-blue-600 text-2xl mx-2 hover:text-blue-700 cursor-pointer"
                />
                <img
                  src={google}
                  alt="Google"
                  className="text-red-600 text-2xl mx-2 hover:text-red-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
