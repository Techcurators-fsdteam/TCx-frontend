import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentForm() {
    const location = useLocation();
    const { testId, interviewId } = location.state || {};
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

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const colleges = ["College A", "College B", "College C", "College D", "College E"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
    };

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'testCompleted') {
                // console.log(event.data.data)
                toast("Test Successfully Submitted");
                navigate('/', { state: { ...event.data.data } });
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [navigate]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'checkbox1') {
            setCheckbox1(checked);
        } else if (name === 'checkbox2') {
            setCheckbox2(checked);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.contactNumber) newErrors.contactNumber = 'Contact Number is required';
        if (!formData.emailId) newErrors.emailId = 'Email ID is required';
        if (!formData.universityCollege) newErrors.universityCollege = 'University/College is required';
        if (!formData.rollNo) newErrors.rollNo = 'Roll Number is required';
        if (!formData.branch) newErrors.branch = 'Branch is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Please fill in all required fields');
            return;
        }
        console.log(formData);
        navigate('/next-page', { state: { formData, testId } });
    };

    return (
        <div className="bg-black text-gray-400 p-10 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <h2 className="text-5xl text-white font-normal mb-8">Student Information</h2>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input 
                                type="text" 
                                name="fullName" 
                                value={formData.fullName} 
                                onChange={handleChange} 
                                required 
                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : ''}`} 
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Full Name <span className="text-gray-500">*</span>
                            </label>
                            {errors.fullName && <p className="text-gray-500 text-xs italic">{errors.fullName}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input 
                                type="text" 
                                name="contactNumber" 
                                value={formData.contactNumber} 
                                onChange={handleChange} 
                                required 
                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber ? 'border-red-500' : ''}`} 
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Contact Number <span className="text-gray-500">*</span>
                            </label>
                            {errors.contactNumber && <p className="text-gray-500 text-xs italic">{errors.contactNumber}</p>}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input 
                                type="email" 
                                name="emailId" 
                                value={formData.emailId} 
                                onChange={handleChange} 
                                required 
                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.emailId ? 'border-red-500' : ''}`} 
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Email ID <span className="text-gray-500">*</span>
                            </label>
                            {errors.emailId && <p className="text-gray-500 text-xs italic">{errors.emailId}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <select 
                                name="universityCollege" 
                                value={formData.universityCollege} 
                                onChange={handleChange} 
                                required 
                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 ${errors.universityCollege ? 'border-red-500' : ''}`}
                            >
                                <option value="" disabled > Select your college</option>
                                {colleges.map((college, index) => (
                                    <option key={index} value={college}>{college}</option>
                                ))}
                            </select>
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                University/College <span className="text-gray-500">*</span>
                            </label>
                            {errors.universityCollege && <p className="text-gray-500 text-xs italic">{errors.universityCollege}</p>}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input 
                                type="text" 
                                name="rollNo" 
                                value={formData.rollNo} 
                                onChange={handleChange} 
                                required 
                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.rollNo ? 'border-red-500' : ''}`} 
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Roll Number <span className="text-gray-500">*</span>
                            </label>
                            {errors.rollNo && <p className="text-gray-500 text-xs italic">{errors.rollNo}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input 
                                type="text" 
                                name="branch" 
                                value={formData.branch} 
                                onChange={handleChange} 
                                required 
                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.branch ? 'border-red-500' : ''}`} 
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Branch <span className="text-gray-500">*</span>
                            </label>
                            {errors.branch && <p className="text-gray-500 text-xs italic">{errors.branch}</p>}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input 
                                type="url" 
                                name="resume" 
                                value={formData.resume} 
                                onChange={handleChange} 
                                className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" 
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">Resume URL</label>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input 
                                type="url" 
                                name="linkedInProfile" 
                                value={formData.linkedInProfile} 
                                onChange={handleChange} 
                                className="shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline" 
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">LinkedIn Profile</label>
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
