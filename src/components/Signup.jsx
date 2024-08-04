import { useState } from "react";
import { register as signup } from "../api/axios";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); 

  function handleSignUp(e) {
    e.preventDefault(); 
    const data = { email, username, password, firstName, lastName };
    signup(data)
      .then((res) => {
        // console.log(res);
        navigate("/login"); 
      })
      .catch((err) => {
        console.error(err); 
      });
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
        <div className="flex flex-col w-full max-w-md bg-black rounded-xl justify-center items-center text-center p-8 space-y-4">
          <a href="/">
            <img
              className="w-20 h-20 rounded-full"
              src={coi}
              alt="Corner Image"
            />
          </a>
          <h3 className="text-orange-500 text-2xl m-1">Let's get you started!</h3>
          <h3 className="text-gray-400 text-md">Enter the details below to create your account and get started</h3>
          <div className="flex flex-col md:flex-row mb-4 w-full gap-4">
            <div className="flex-1">
              <label htmlFor="firstname" className="block text-white"></label>
              <input
                type="text"
                required
                placeholder="First name"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-4 rounded-xl bg-gray-900 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastname" className="block text-white"></label>
              <input
                type="text"
                required
                placeholder="Last name"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-4 rounded-xl bg-gray-900 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
              />
            </div>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="username" className="block text-white" />
            <input
              type="text"
              required
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-gray-900 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-white" />
            <input
              type="email"
              required
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-gray-900 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
            />
          </div>
          <div className="mb-4 relative w-full">
            <label htmlFor="password" className="block text-white" />
            <input
              type={passwordVisible ? "text" : "password"}
              required
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-gray-900 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
            />
            <img
              src={passwordVisible ? eye : eyeStash}
              alt="toggle"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div className="w-full p-2">
            <button onClick={handleSignUp} className="w-full py-3 px-4 bg-orange-500 text-white rounded-xl text-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>
          <div className="flex items-center mb-4">
            <p className="ml-2 text-white text-sm">Already a Member? &nbsp;</p>
            <a href="/login" className="text-orange-500 text-sm hover:underline">
              Log in
            </a>
          </div>

          {/* <div className="text-center pt-4 md:pt-6">
            <p className="text-white rounded-full text-xl ">
              or sign up with
            </p>
          </div>
          <div className="flex justify-center mt-4 pb-">
            <img
              src={ldin}
              alt="Linkedin"
              className="text-blue-600 text-3xl mx-2 hover:text-blue-700 cursor-pointer"
            />
            <img
              src={google}
              alt="Google"
              className="text-red-600 text-3xl mx-2 hover:text-red-700 cursor-pointer"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
