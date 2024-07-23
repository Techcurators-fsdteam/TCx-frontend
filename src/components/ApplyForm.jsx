import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'; // Import useNavigate

function StudentForm() {
    // Initialize state to hold form data
    const location=useLocation();
    const {testId}=location.state;
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

    const navigate = useNavigate(); // Instantiate the navigate function

    // Function to handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add any pre-navigation logic or database submissions
        console.log(formData);  // Optionally log data to the console for debugging
        navigate('/next-page', { state: { formData,testId } });  // Navigate to next page and pass formData via state
    };

    // JSX to render the form
    return (
        <div className="bg-gray-900 text-white p-10 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">Student Information</h2>
                {/* Render input fields for each form data state */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Contact Number</label>
                    <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email ID</label>
                    <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">University/College</label>
                    <input type="text" name="universityCollege" value={formData.universityCollege} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Roll Number</label>
                    <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Branch</label>
                    <input type="text" name="branch" value={formData.branch} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Resume URL (optional)</label>
                    <input type="url" name="resume" value={formData.resume} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">LinkedIn Profile (optional)</label>
                    <input type="url" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {/* Submit button */}
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
