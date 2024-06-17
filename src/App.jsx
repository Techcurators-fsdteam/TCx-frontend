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
import Editwork from './components/Editwork';
import Editeducation from './components/Editeducation';
import Editlink from './components/Editlink';
import Editprofile from './components/Editprofile';
import Editresume from './components/Editresume';

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
        <Route path="/Header" element={<Header/>}/>
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
