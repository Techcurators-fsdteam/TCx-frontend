// CustomCursor.js
import React, { useEffect, useState } from 'react';
import '../index.css';  // Ensure this points to your CSS file

const CustomCursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  // Update cursor positions
  useEffect(() => {
    const handleMouseMove = (event) => {
      setDotPosition({ x: event.clientX, y: event.clientY });
      // For smooth trailing effect, we use a timeout to delay the trail position update
      setTimeout(() => {
        setTrailPosition({ x: event.clientX, y: event.clientY });
      }, 100); // Adjust latency here
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update pointer state
  useEffect(() => {
    const handlePointerChange = (event) => {
      setIsPointer(
        event.target.closest('a, button, [role="button"], [role="link"], .pointer')
      ); // Adjust selector as needed
    };

    document.addEventListener('mouseover', handlePointerChange);

    return () => {
      document.removeEventListener('mouseover', handlePointerChange);
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div
        className={`cursor-dot ${isPointer ? 'cursor-pointer' : ''}`}
        style={{ left: dotPosition.x, top: dotPosition.y }}
      ></div>
      
      {/* Trailing Circle */}
      <div
        className="cursor-trail"
        style={{ left: trailPosition.x, top: trailPosition.y }}
      ></div>
    </>
  );
};

export default CustomCursor;
