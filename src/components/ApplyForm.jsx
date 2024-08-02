import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../store/UserContext';

function StudentForm() {
    const location = useLocation();
    const { testId, interviewId } = location.state || {};
    const {user}=useUser();
    // console.log(testId)
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

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'testCompleted') {
                // console.log(event.data.data)
                toast("Test Successfully Submitted")
                navigate('/', { state: { ...event.data.data } });
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        // navigate('/next-page', { state: { formData, testId } });
        localStorage.setItem('testData', JSON.stringify({
            fullName: formData.fullName,
            contactNumber: formData.contactNumber,
            emailId: formData.emailId,
            universityCollege: formData.universityCollege,
            rollNo: formData.rollNo,
            branch: formData.branch,
            resume: formData.resume,
            linkedInProfile: formData.linkedInProfile,
            campus: true,
            testId: testId,
            interviewId,
            username: user.username,
        }));
        window.open('/test', "Test Page", `width=${window.screen.width},height=${window.screen.height},menubar=no,location=no,resizable=no,scrollbars=yes,status=no`)
    };

    return (
        <div className="bg-gray-900 text-gray-400 p-10 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <h2 className="text-5xl text-white font-semibold mb-6">Student Information</h2>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block text-sm font-medium mb-2">Contact Number</label>
                        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-sm font-medium mb-2">Email ID</label>
                        <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block text-sm font-medium mb-2">University/College</label>
                        <input type="text" name="universityCollege" value={formData.universityCollege} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-sm font-medium mb-2">Roll Number</label>
                        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block text-sm font-medium mb-2">Branch</label>
                        <input type="text" name="branch" value={formData.branch} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        <label className="block text-sm font-medium mb-2">Resume URL (optional)</label>
                        <input type="url" name="resume" value={formData.resume} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block text-sm font-medium mb-2">LinkedIn Profile (optional)</label>
                        <input type="url" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
