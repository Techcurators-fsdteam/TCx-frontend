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

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/Practicetest1" element={<Practicetest1 />} />
        <Route path='/result' element={<Result/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
