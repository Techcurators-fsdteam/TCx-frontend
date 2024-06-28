import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import ldin from "../assets/ldin.svg";
import google from "../assets/google.svg";
import foto from "../assets/robot.svg";
import bgi from "../assets/bgimg.svg";
import coi from "../assets/logo.svg";

import { login } from "../api/axios";
import eye from "../assets/eyePasswordShow.svg";
import eyeStash from "../assets/eyePasswordHide.svg";
import { useUser } from "../store/UserContext";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const {fetchUserDetails}=useUser();
  const [user, setUseR] = useState("");
  const [profile, setProfile] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUseR(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  function googleLogin() {
    console.log(profile);
    axios
      .post("http://localhost:5000/api/auth/googleLogin", profile)
      .then((res) => {
        console.log(res.data.accessToken);
        document.cookie = `token=${res.data.accessToken};  path=/`;
        navigate("/");
      }).then(()=>fetchUserDetails())
  }

  useEffect(() => {
    // console.log(user);
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          
        })
        .catch((err) => console.log(err));
    }
  }, [user]);




  function handleSignIn() {
    const data = { email, username, password };
    // console.log("Hello")

    // console.log(res.token)
    login(data)
      .then((res) => {
        if(res.token!=undefined){
        document.cookie = `token=${res.token};  path=/`;
        console.log(res.token);
        navigate("/");}
        
        // Use navigate for redirection
      })
      .then(()=>fetchUserDetails())
      .catch((err) => {
        alert("Invalid Credentials"); // Handle errors appropriately
      });
  }


    useEffect(() => {
      if (profile) {
        googleLogin();  // Call googleLogin only after profile state is updated
      }
    }, [profile]);
  

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
                <Link
                  className="text-blue-500 text-sm hover:underline"
                  to="/SignUp"
                >
                  Sign up
                </Link>{" "}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white"></label>
              <input
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-4 py-4 rounded-full bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white"></label>
              <input
                type="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-full bg-gray-700 text-sm text-white focus:outline-none placeholder-orange-500 glowing-border"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-white"></label>
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
                style={{ width: "20px", height: "20px" }}
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
              <Link
                  className="text-blue-500 text-sm hover:underline"
                  to="/Forgotpass"
                >
                  Forgot Password?
                </Link>{" "}
            </div>
            <div className="p-2">
              <button
                onClick={handleSignIn}
                className="w-full py-3 px-4 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
              >
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
                <button
                  onClick={handleGoogleLogin}
                  className="text-blue-600 bg-white flex text-sm items-center px-2 rounded-full mx-2 hover:text-blue-700 cursor-pointer"
                >
                  <img src={google} alt="LinkedIn" /> Sign in With Google
                </button>

                {/* <img
                  src={google}
                  alt="Google"
                  className="text-red-600 text-3xl mx-2 hover:text-red-700 cursor-pointer"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
