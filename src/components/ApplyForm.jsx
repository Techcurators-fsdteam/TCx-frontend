import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentForm() {
    const location = useLocation();
    const { testId } = location.state || {};
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailId: '',
        universityCollege: '',
        rollNo: '',
        branch: '',
        resume: '',
        linkedInProfile: ''
    });

    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    const navigate = useNavigate();

    const colleges = ["College A", "College B", "College C", "College D", "College E"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'checkbox1') {
            setCheckbox1(checked);
        } else if (name === 'checkbox2') {
            setCheckbox2(checked);
        }
    };

    const validateGoogleDriveLink = (url) => {
        const googleDrivePattern = /^(https?:\/\/)?(www\.)?(drive\.google\.com\/.*)$/;
        return googleDrivePattern.test(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.resume && !validateGoogleDriveLink(formData.resume)) {
            toast.error('Invalid Google Drive URL');
            return;
        }
        console.log(formData);
        navigate('/next-page', { state: { formData, testId } });
    };

    return (
        <div className="bg-black text-gray-400 p-10 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <h2 className="text-5xl text-white font-semibold mb-8">Student Information</h2>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">Full Name</label>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">Contact Number</label>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">Email ID</label>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <select name="universityCollege" value={formData.universityCollege} onChange={handleChange} required className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500">
                                <option value="" disabled > Select your college</option>
                                {colleges.map((college, index) => (
                                    <option key={index} value={college}>{college}</option>
                                ))}
                            </select>
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">University/College</label>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">Roll Number</label>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input type="text" name="branch" value={formData.branch} onChange={handleChange} required className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">Branch</label>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input type="url" name="resume" value={formData.resume} onChange={handleChange} placeholder="Google Drive link" className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">Resume URL (optional)</label>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input type="url" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">LinkedIn Profile (optional)</label>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full px-4 relative">
                        <label className="inline-flex items-center">
                            <input type="checkbox" name="checkbox1" checked={checkbox1} onChange={handleCheckboxChange} className="form-checkbox h-5 w-5 text-orange-500" />
                            <span className="ml-2 font-light">I confirm that the information entered by me is correct and can be used for further formalities.</span>
                        </label>
                    </div>
                </div>
                
                <button type="submit" disabled={!checkbox1} className={`bg-orange-500 hover:bg-orange-600 text-white font-normal py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline ${!checkbox1 ? 'opacity-50 cursor-not-allowed' : ''}`}>Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default StudentForm;
