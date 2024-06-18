import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/axios";
import eye from "../assets/eyePasswordShow.svg";
import eyeStash from "../assets/eyePasswordHide.svg";
import bgi from "../assets/bgimg.svg";
import google from "../assets/google.svg";
import ldin from "../assets/ldin.svg";
import coi from "../assets/logo.svg";
import foto from "../assets/robot.svg";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function handleSignIn() {
    const data = { email, username, password };
    login(data)
      .then((res) => {
        document.cookie = `token=${res.token}; path=/`;
        navigate("/");
      })
      .catch((err) => {
        alert("Invalid Credentials");
      });
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black font-custom">
        <div
          className="absolute top-0 right-0 w-3/6 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgi})`,
          }}
        ></div>
        <div className="w-6/10 h-5/10 flex ml-4 mr-4 bg-gray-800 rounded-3xl z-10">
          <div>
            <a href="/">
              <img
                className="absolute top-0 left-0 w-20 h-20 mt-4 ml-4 rounded-full"
                src={coi}
                alt="Corner Image"
              />
            </a>
          </div>
          <div className="hidden md:block w-3/6 h-full">
            <img
              className="w-full h-full object-cover rounded-l-3xl object-center"
              src={foto}
              alt="image"
            />
          </div>
          <div className="w-full md:w-3/6 p-8 bg-gray-800 rounded-3xl">
            <div className="sm:p-0.5 md:p-1 lg:p-1.5 mb-4">
              <h3 className="text-orange-500 text-2xl m-1">
                Begin Your Journey To AI Excellence
              </h3>
              <div className="flex">
                <p className="text-white pb-3 text-sm">
                  Don't have an account.&nbsp;
                </p>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  {" "}
                  <Link to="/SignUp">Sign up</Link>{" "}
                </a>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white">
                Username
              </label>
              <input
                type="text"
                required
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-4 py-4 rounded-full bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border "
                />
              
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-full bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-white">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                onClick={togglePasswordVisibility}
                className="w-full px-4 py-4 rounded-full bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border"
              />
              <img
                src={passwordVisible ? eye : eyeStash}
                alt="toggle"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                style={{ width: '20px', height: '20px' }}
              />
            </div>
            <div className="flex justify-between items-center mb-5">
              <label className="flex items-center text-white">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-orange-500"
                />
               <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="p-2">
            <button onClick={handleSignIn} className="w-full py-3 px-4 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
            <div>
            <div className="text-center pt-4 md:pt-6">
            <p className="text-white rounded-full text-xl">
                  or continue with
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <img
                  src={ldin}
                  alt="LinkedIn"
                 className="text-blue-600 text-3xl mx-2 hover:text-blue-700 cursor-pointer"
                />
                <img
                  src={google}
                  alt="Google"
                  className="text-red-600 text-3xl mx-2 hover:text-red-700 cursor-pointer"
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
