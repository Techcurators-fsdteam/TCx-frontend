import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../store/UserContext';
import Testintro2 from './Testintro2'; // Import the Testintro2 component
import { URL } from '../api/url';
import axios from 'axios';

function StudentForm() {
    const location = useLocation();
    const { testId, interviewId, jobTitle } = location.state || {};
    const { user } = useUser();
    const [showTestIntro, setShowTestIntro] = useState(false); // State to manage whether to show Testintro2
    const [rolls, setRolls] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailId: user.email,
        universityCollege: '',
        rollNo: '',
        branch: '',
        resume: '',
        linkedInProfile: ''
    });
    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchRolls = async () => {
            try {
                const response = await axios.get(`${URL}/apply/rolls`);
                // console.log(response);
                setRolls(response.data)
                // Assuming you want to do something with the response here
            } catch (error) {
                console.error('Failed to fetch rolls:', error);
            }
        };

        // Call the async function
        fetchRolls();
    }, []); // Don't forget dependencies if there are any


    const [checkbox1, setCheckbox1] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const colleges = ["Uttaranchal University, Dehradun"];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Reset error state for the current field or set specific error for roll number
        if (name === 'rollNo') {
            if (value && rolls.includes(value)) {
                setErrors(prevState => ({
                    ...prevState,
                    [name]: 'Roll number already exists'
                }));
            } else {
                setErrors(prevState => ({
                    ...prevState,
                    [name]: ''
                }));
            }
        } else {
            setErrors(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
    };


    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'testCompleted') {
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
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
        if (!formData.universityCollege.trim()) newErrors.universityCollege = 'University/College is required';
        if (!formData.rollNo.trim()) newErrors.rollNo = 'Roll Number is required';
        if (!formData.branch.trim()) newErrors.branch = 'Branch is required';
        // if (!formData.resume.trim()) newErrors.resume = 'Resume URL is required';
        // if (!formData.linkedInProfile.trim()) newErrors.linkedInProfile = 'LinkedIn Profile is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Please fill in all required fields');
            return;
        }
        localStorage.setItem('testData', JSON.stringify({
            fullName: formData.fullName,
            contactNumber: formData.contactNumber,
            emailId: user.email,
            universityCollege: formData.universityCollege,
            rollNo: formData.rollNo,
            branch: formData.branch,
            resume: formData.resume,
            linkedInProfile: formData.linkedInProfile,
            campus: true,
            testId: testId,
            interviewId,
            username: user.username,
            jobTitle
        }));
        setShowTestIntro(true); // Show Testintro2 component on form submission
    };

    const handleContinue = () => {
        window.open('/test', "Test Page", `width=${window.screen.width},height=${window.screen.height},menubar=no,location=no,resizable=no,scrollbars=yes,status=no`);
    };

    if (showTestIntro) {
        return <Testintro2 onContinue={handleContinue} formData={formData} />;
    }

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

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Full Name <span className="text-gray-500">*</span>
                            </label>
                            {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Contact Number <span className="text-gray-500">*</span>
                            </label>
                            {errors.contactNumber && <p className="text-red-500 text-xs italic">{errors.contactNumber}</p>}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input
                                type="email"
                                name="emailId"
                                disabled
                                value={user.email}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-grey leading-tight focus:outline-none focus:shadow-outline ${errors.emailId ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Email ID <span className="text-gray-500">*</span>
                            </label>
                            {errors.emailId && <p className="text-red-500 text-xs italic">{errors.emailId}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <select
                                name="universityCollege"
                                value={formData.universityCollege}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 ${errors.universityCollege ? 'border-red-500' : ''}`}
                            >
                                <option value="" disabled>Select your college</option>
                                {colleges.map((college, index) => (
                                    <option key={index} value={college}>{college}</option>
                                ))}
                            </select>
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                University/College <span className="text-gray-500">*</span>
                            </label>
                            {errors.universityCollege && <p className="text-red-500 text-xs italic">{errors.universityCollege}</p>}
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

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.rollNo ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Roll Number <span className="text-gray-500">*</span>
                            </label>
                            {errors.rollNo && <p className="text-red-500 text-xs italic">{errors.rollNo}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input
                                type="text"
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.branch ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Branch <span className="text-gray-500">*</span>
                            </label>
                            {errors.branch && <p className="text-red-500 text-xs italic">{errors.branch}</p>}
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


export const CorporateForm = () => {
    const location = useLocation();
    const { testId, testName } = location.state || {};
    const { user } = useUser();
    const [showTestIntro, setShowTestIntro] = useState(false); // State to manage whether to show Testintro2
    const [rolls, setRolls] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailId: user.email,
        organisation: '',
        universityCollege: '',
        experience: '',
        resume: '',
        linkedInProfile: ''
    });
    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchRolls = async () => {
            try {
                const response = await axios.get(`${URL}/apply/rolls`);
                // console.log(response);
                setRolls(response.data)
                // Assuming you want to do something with the response here
            } catch (error) {
                console.error('Failed to fetch rolls:', error);
            }
        };

        // Call the async function
        fetchRolls();
    }, []); // Don't forget dependencies if there are any


    const [checkbox1, setCheckbox1] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const colleges = ["Uttaranchal University, Dehradun"];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Reset error state for the current field or set specific error for roll number
        if (name === 'rollNo') {
            if (value && rolls.includes(value)) {
                setErrors(prevState => ({
                    ...prevState,
                    [name]: 'Roll number already exists'
                }));
            } else {
                setErrors(prevState => ({
                    ...prevState,
                    [name]: ''
                }));
            }
        } else {
            setErrors(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
    };
    useEffect(() => {
        const handleMessage = (event) => {
          if (event.data.type === 'testCompleted') {
            
            // console.log(event.data.data)
            localStorage.setItem('testReport', JSON.stringify({ ...event.data.data }))
            console.log("Hello")
            navigate('/testReport', { state: { ...event.data.data } });
          }
        };
    
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
      }, [navigate]);


    // useEffect(() => {
    //     const handleMessage = (event) => {
    //         if (event.data.type === 'testCompleted') {
    //             toast("Test Successfully Submitted");
    //             navigate('/', { state: { ...event.data.data } });
    //         }
    //     };

    //     window.addEventListener('message', handleMessage);
    //     return () => window.removeEventListener('message', handleMessage);
    // }, [navigate]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'checkbox1') {
            setCheckbox1(checked);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required';
        if (!formData.organisation.trim()) newErrors.universityCollege = 'Organisation is required';
        if (!formData.universityCollege.trim()) newErrors.rollNo = 'University/College is required';
        if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
        // if (!formData.resume.trim()) newErrors.resume = 'Resume URL is required';
        if (!formData.linkedInProfile.trim()) newErrors.linkedInProfile = 'LinkedIn Profile is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Please fill in all required fields');
            return;
        }
        localStorage.setItem('testData', JSON.stringify({
            fullName: formData.fullName,
            contactNumber: formData.contactNumber,
            emailId: user.email,
            organisation: formData.organisation,
            universityCollege: formData.universityCollege,
            experience: formData.experience,
            resume: formData.resume,
            linkedInProfile: formData.linkedInProfile,
            corporate: true,
            testId: testId,
            username: user.username,
        }));
        setShowTestIntro(true); // Show Testintro2 component on form submission
    };

    const handleContinue = () => {
        window.open('/test', "Test Page", `width=${window.screen.width},height=${window.screen.height},menubar=no,location=no,resizable=no,scrollbars=yes,status=no`);
    };

    if (showTestIntro) {
        return <Testintro2 onContinue={handleContinue} formData={formData} />;
    }

    return (
        <div className="bg-black text-gray-400 p-10 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <h2 className="text-5xl text-white font-normal mb-8">User Information</h2>

                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Full Name <span className="text-gray-500">*</span>
                            </label>
                            {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Contact Number <span className="text-gray-500">*</span>
                            </label>
                            {errors.contactNumber && <p className="text-red-500 text-xs italic">{errors.contactNumber}</p>}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input
                                type="email"
                                name="emailId"
                                disabled
                                value={user.email}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-grey leading-tight focus:outline-none focus:shadow-outline ${errors.emailId ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Email ID <span className="text-gray-500">*</span>
                            </label>
                            {errors.emailId && <p className="text-red-500 text-xs italic">{errors.emailId}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <input
                                type="text"
                                name="organisation"

                                value={formData.organisation}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.organisation ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Organisation <span className="text-gray-500">*</span>
                            </label>
                            {errors.organisation && <p className="text-red-500 text-xs italic">{errors.organisation}</p>}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4 mb-6">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 relative">
                        <div className="relative">
                            <input
                                type="text"
                                name="universityCollege"
                                value={formData.universityCollege}
                                onChange={handleChange}

                                className={`shadow appearance-none border rounded-lg w-full py-4 px-5 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.universityCollege ? 'border-red-500' : ''}`}
                            />
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                University/College<span className="text-gray-500">*</span>
                            </label>
                            {errors.universityCollege && <p className="text-red-500 text-xs italic">{errors.universityCollege}</p>}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <div className="relative">
                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className={`shadow appearance-none border rounded-lg w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline ${errors.experience ? 'border-red-500' : ''} select-dropdown`}
                            >
                                <option value="" disabled>Select Years of Experience</option>
                                {[...Array(50).keys()].map(num => (
                                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                                ))}
                            </select>
                                

                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">
                                Experience <span className="text-gray-500">*</span>
                            </label>
                            {errors.experience && <p className="text-red-500 text-xs italic">{errors.experience}</p>}
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
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">CV URL</label>
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
                            <label className="absolute -top-3.5 left-5 bg-black px-1 text-gray-400">LinkedIn Profile <span className="text-gray-500">*</span></label>
                            {errors.linkedInProfile && <p className="text-red-500 text-xs italic">{errors.linkedInProfile}</p>}
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
};
export default StudentForm;
