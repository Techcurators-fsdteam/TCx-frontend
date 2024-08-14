// App.js
import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Learn from './components/Learn';
import Login from './components/Login';
import Practicetest1 from './components/Practicetest1';
import SignUp from './components/Signup';
import Test from './components/Test';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Result from './components/Result';
import Profile from './components/Profile';
import Certify from './components/Certify';
import Certify2 from './components/Certify2';
import Certify3 from './components/Certify3';
import Testintro2 from './components/Testintro2';
import Scroll from './Scroll';
import Report from './components/Report';
import Forgotpass from './components/Forgotpass';
import Otp from './components/Otp';
import ApplyPage from './components/ApplyPage';
import Confirmpass from './components/Confirmpass';
import Resetdone from './components/Resetdone';
import Editor from './components/Editor';
import CustomCursor from './components/CustomCursor'; // Import the Custom Cursor
import './index.css'; // Ensure this points to your CSS file
import ProblemTable from './components/ProblemTable';
import StudentDet from './components/StudentDet';
import StudentForm,{CorporateForm} from './components/ApplyForm';
import JobDescription from './components/JobDescription';

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
            <Route path="/project/:pid" element={<Editor />} />
            <Route path="/Certify" element={<Certify />} />
            <Route path="/Certify2" element={<Certify2 />} />
            <Route path="/Certify3" element={<Certify3 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Forgotpass" element={<Forgotpass />} />
            <Route path="/Otp" element={<Otp />} />
            <Route path="/Confirmpass" element={<Confirmpass />} />
            <Route path="/Resetdone" element={<Resetdone />} />
            {/* <Route path="/Header" element={<Header/>}/> */}
            <Route path="/test" element={<Test />} />
            <Route path="/Practicetest1" element={<Practicetest1 />} />
            <Route path="/StudentDet" element={<StudentDet />} />
            <Route path='/result' element={<Result />} />
            <Route path='/certificationTest' element={<Certify3 />} />
            <Route path='/testIntro' element={<Certify2 />} />
            <Route path='/testIntro2' element={<Testintro2 />} />
            <Route path='/testReport' element={<Report />} />
            <Route path='/certificate' element={<Certify3 />} />
            {/*<Route path='/problems/:testId' element={<PythonCodeEditor />} />*/}
            <Route path='/apply' element={<ApplyPage/>}/>
            <Route path='/application' element={<StudentForm/>}/>
            <Route path='/job-description' element={<JobDescription/>}/>
            <Route path='/genAI-test' element={<CorporateForm/>}/>
          </Routes>
        </Router>
      </GoogleOAuthProvider>
      <CustomCursor />
      <ToastContainer />
    </>
  );
}

export default App;
