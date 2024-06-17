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
import Profile from './Profile'
import Editwork from './Editwork';
import Editeducation from './Editeducation';
import Editlink from './Editlink';
import Editprofile from './Editprofile';
import Editresume from './Editresume';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/' element={<Profile />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/Practicetest1" element={<Practicetest1 />} />
        <Route path='/result' element={<Result/>} />
        <Route path='/Editwork' element={<Editwork />} />
          <Route path='/Editeducation' element={<Editeducation />} />
          <Route path='/Editlink' element={<Editlink />} />
          <Route path='/Editprofile' element={<Editprofile />} />
          <Route path='/Editresume' element={<Editresume />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
