import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Learn from './components/Learn';
import './index.css';
import Login from './components/Login';
import Practicetest1 from './components/Practicetest1';
import SignUp from './components/Signup';
import Test from './components/Test';
import Result from './components/Result';
import Profile from './components/Profile.jsx'
import Certify from './components/Certify.jsx';
import Certify2 from './components/Certify2.jsx';
import Certify3 from './components/Certify3.jsx';
import Scroll from './Scroll';

function App() {
  
  return (
    <>
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
        <Route path="/Header" element={<Header/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/Practicetest1" element={<Practicetest1 />} />
        <Route path='/result' element={<Result/>} />
        
      </Routes>
      </Router>
    </>
  );
}

export default App;
