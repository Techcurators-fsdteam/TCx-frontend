import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ldin from "../assets/ldin.svg";
import google from "../assets/google.svg";
import foto from "../assets/robot.svg";
import bgi from "../assets/bgimg.svg";
import coi from "../assets/logo.svg";
import { login } from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  function handleSignIn() {
      const data = { email, username, password };
      login(data).then(res => {
        

          document.cookie = `token=${res.token};  path=/`;
          console.log(res.token);
          navigate("/")
           // Use navigate for redirection
      }).catch(err => {
          alert("Invalid Credentials") // Handle errors appropriately
      });
  }

  return (
    <>
    
      <div className="flex justify-center items-center h-screen bg-black">
        <div
          className="absolute top-0 right-0 w-3/6 h-full bg-cover bg-center "
          style={{ backgroundImage: `url(${bgi})` }}
        ></div>

        <div className="w-3/6 h-4/6 flex bg-gray-800  z-10">
          <div>
            <a href="/">
              <img
                className="absolute top-0 left-0 w-25 h-25 mt-4 ml-4 rounded-full"
                src={coi}
                alt="Corner Image"
              />
            </a>
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
              <h3 className="text-orange-500 mb-0 text-lg">
                BEGIN YOUR JOURNEY TO AI EXCELLENCE
              </h3>
              <div className="flex">
                <p className="text-white pb-3 text-xs">
                  Don't have an account.&nbsp;
                </p>
                <a href="/signup" className="text-blue-500 text-xs hover:underline">
                  sign up
                </a>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-white" />
              <input
                type="text"
                required
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs focus:outline-none glowing-border placeholder-orange-500 "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white" />
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); }}
                className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs focus:outline-none glowing-border placeholder-orange-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white" />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => { setPass(e.target.value); }}
                className="w-full px-4 py-2 rounded-full bg-gray-700 text-xs focus:outline-none glowing-border placeholder-orange-500"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-white">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-orange-500"
                />
                <span className="ml-2 text-xs">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 text-xs hover:underline">
                Forgot password?
              </a>
            </div>

            <div className="p-2">
              <button onClick={handleSignIn} className="w-full py-2 px-4 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                Sign In
              </button>
            </div>

            <div>
              <div className="text-center">
                <p className="text-white rounded-full text-lg ">
                  or continue with
                </p>
              </div>
              <div className="flex justify-center mt-4 pb-">
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

export default Login;
