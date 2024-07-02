import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import google from "../assets/google.svg";
import coi from "../assets/logo.svg";
import Modal from "./Modal";
import { URL } from "../api/url";
import Forgotpass from './Forgotpass'
import Otp from './Otp'
import Confirmpass from './Confirmpass'
import Resetdone from './Resetdone'
import { login } from "../api/axios";
import eye from "../assets/eyePasswordShow.svg";
import eyeStash from "../assets/eyePasswordHide.svg";
import { useUser } from "../store/UserContext";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const { fetchUserDetails } = useUser();
  const [user, setUseR] = useState("");
  const [profile, setProfile] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const [isEmailModalOpen, setEmailModalOpen] = useState(false);
  const [isOTPModalOpen, setOTPModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isDone, setDone] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUseR(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  function googleLogin() {
    axios
      .post(`${URL}/auth/googleLogin`, profile)
      .then((res) => {
        document.cookie = `token=${res.data.accessToken};  path=/`;
        navigate("/");
      })
      .then(() => fetchUserDetails());
  }

  useEffect(() => {
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

    login(data)
      .then((res) => {
        if (res.token !== undefined) {
          document.cookie = `token=${res.token};  path=/`;
          navigate("/");
        }
      })
      .then(() => fetchUserDetails())
      .catch((err) => {
        alert("Invalid Credentials");
      });
  }

  useEffect(() => {
    if (profile) {
      googleLogin();
    }
  }, [profile]);

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
          <h3 className="text-orange-500 text-2xl m-1">Welcome Back!</h3>
          <h3 className="text-gray-400 text-md ">Glad to see you again!</h3>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleGoogleLogin}
              className="text-white border-gray-500 border-2 bg-gray-900 flex text-sm items-center px-2 rounded-xl mx-2 hover:text-gray-300 cursor-pointer"
            >
              <img src={google} alt="Google" className="w-5 h-10 mr-2" /> Continue With Google
            </button>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="username" className="text-white"></label>
            <input
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-gray-900 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="text-white"></label>
            <input
              type="email"
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-gray-900 text-sm text-white focus:outline-none placeholder-gray-500 glowing-border"
            />
          </div>
          <div className="mb-4 relative w-full">
            <label htmlFor="password" className="text-white"></label>
            <input
              type={passwordVisible ? "text" : "password"}
              required
              placeholder="Password"
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
          <div className="flex justify-between items-center w-full mb-5">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500"
              />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
            <Link
              onClick={() => { setEmailModalOpen(true); }}
              className="text-orange-500 text-sm hover:underline"
              to=""
            >
              Forgot Password?
            </Link>
          </div>
          <div className="w-full">
            <button
              onClick={handleSignIn}
              className="w-full py-3 px-4 bg-orange-500 text-white rounded-xl text-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
          <div className="flex">
            <p className="text-white pb-3 text-sm">
              Don't have an account.&nbsp;
            </p>
            <Link
              className="text-orange-500 text-sm hover:underline"
              to="/SignUp"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isEmailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        bg={"black"}
      >
        <Forgotpass email={email} setEmail={setEmail} setEmailModalOpen={setEmailModalOpen} setOTPModalOpen={setOTPModalOpen} />
      </Modal>
      <Modal
        isOpen={isOTPModalOpen}
        onClose={() => setOTPModalOpen(false)}
        bg={"black"}
      >
        <Otp email={email} setEmail={setEmail} setOTPModalOpen={setOTPModalOpen} setPasswordModalOpen={setPasswordModalOpen} />
      </Modal>
      <Modal
        isOpen={isPasswordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        bg={"black"}
      >
        <Confirmpass email={email} setEmail={setEmail} setPasswordModalOpen={setPasswordModalOpen} setDone={setDone} />
      </Modal>
      <Modal
        isOpen={isDone}
        onClose={() => setDone(false)}
        bg={"black"}
      >
        <Resetdone setDone={setDone} />
      </Modal>
    </>
  );
}

export default Login;
