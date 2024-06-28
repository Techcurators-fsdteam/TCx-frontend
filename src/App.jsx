import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Learn from './components/Learn';
import './index.css';
import Login from './components/Login';
import Practicetest1 from './components/Practicetest1';
import SignUp from './components/Signup';
import Test from './components/Test';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Result from './components/Result';
import Profile from './components/Profile.jsx'
import Certify from './components/Certify.jsx';
import Certify2 from './components/Certify2.jsx';
import Certify3 from './components/Certify3.jsx';
import Scroll from './Scroll';
import Report from './components/Report.jsx';
import Forgotpass from './components/Forgotpass.jsx';
import Otp from './components/Otp.jsx';
import Confirmpass from './components/Confirmpass.jsx';
import Resetdone from './components/Resetdone.jsx';

function App() {
  
  return (
    <>
    <GoogleOAuthProvider clientId='817860106596-lfombupsre85gug8361n208iu2j8amm4.apps.googleusercontent.com'>
    <Router>
    <Scroll />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/Certify" element={<Certify />} />
        <Route path="/Certify2" element={<Certify2 />} />
        <Route path="/Certify3" element={<Certify3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/Forgotpass" element={<Forgotpass/>} />
        <Route path="/Otp" element={<Otp/>} />
        <Route path="/Confirmpass" element={<Confirmpass/>} />
        <Route path="/Resetdone" element={<Resetdone/>} />
        {/* <Route path="/Header" element={<Header/>}/> */}
        <Route path="/test" element={<Test/>}/>
        <Route path="/Practicetest1" element={<Practicetest1 />} />
        <Route path='/result' element={<Result/>} />
        <Route path='/certificationTest' element={<Certify3/>}/>
        <Route path='/testIntro' element={<Certify2/>}/>  
        <Route path='/testReport' element={<Report/>}/>
        <Route path='/certificate' element={<Certify3/>}/>      
      </Routes>
      </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
