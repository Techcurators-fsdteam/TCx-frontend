import React, { useState } from 'react';

const ResumeUploadPage = () => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    if (file) {
      console.log('File:', file);
      // Add your upload logic here
    }
  };

  return (
    <div className="flex justify-center text-center px-4">
      <div
        className={`w-full md:w-[80%] lg:w-[60%] xl:w-[50%] bg-[#1F202A] mt-10 rounded-xl p-6 ${
          dragging ? 'border-4 border-dashed border-[#FF7C1D]' : ''
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-full">
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-extralight text-[#FF7C1D]">
              Upload Your Resume
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Resume File Upload */}
            <div
              className={`flex flex-col text-left ${
                dragging ? 'opacity-50' : ''
              }`}
            >
              <label className="text-white mb-2" htmlFor="resume">
                Drag & Drop or Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
              <div
                className={`w-full h-40 border-2 border-dashed rounded-md bg-[#121418] flex items-center justify-center ${
                  dragging ? 'border-[#FF7C1D]' : ''
                }`}
                onClick={() => document.getElementById('resume').click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                {file ? (
                  <p className="text-white">{file.name}</p>
                ) : (
                  <p className="text-white">Drag & drop here or click to upload</p>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Supported formats: PDF, DOC, DOCX
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-[#FF7C1D] text-white text-lg focus:outline-none hover:bg-[#FF6818] transition duration-200"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadPage;
