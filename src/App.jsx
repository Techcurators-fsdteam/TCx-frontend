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
import { GoogleOAuthProvider } from '@react-oauth/google';
import Result from './components/Result';
import Profile from './components/Profile.jsx'
import Editwork from './components/Editwork';
import Editeducation from './components/Editeducation';
import Editlink from './components/Editlink';
import Editprofile from './components/Editprofile';
import Editresume from './components/Editresume';
import Modal from './components/Modal';

function App() {
  // const [modalOpen, setModalOpen] = useState(null);

  // const closeModal = () => setModalOpen(null);
  
  return (
    <>
    <GoogleOAuthProvider clientId='817860106596-lfombupsre85gug8361n208iu2j8amm4.apps.googleusercontent.com'>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/Header" element={<Header/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/Practicetest1" element={<Practicetest1 />} />
        <Route path='/result' element={<Result/>} />
        {/* <div className="relative">
        <Profile onOpenModal={setModalOpen} />
        
        <Modal isOpen={modalOpen === 'Editwork'} onClose={closeModal}>
          <Editwork />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editeducation'} onClose={closeModal}>
          <Editeducation />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editlink'} onClose={closeModal}>
          <Editlink />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editprofile'} onClose={closeModal}>
          <Editprofile />
        </Modal>
        
        <Modal isOpen={modalOpen === 'Editresume'} onClose={closeModal}>
          <Editresume />
        </Modal>
      </div> */}
        
      </Routes>
      </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
