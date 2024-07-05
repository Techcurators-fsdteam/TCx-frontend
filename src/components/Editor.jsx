import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Editor = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/assets/question-description.html')
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-screen  bg-black text-white">
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-1 flex-col bg-gray-900 p-4">
          
            <div
              className="text-white mt-20"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <div className="p-4">
              <p className="text-lg">Welcome to the Editor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
