import React, { useState, useRef, useEffect, useCallback } from 'react';

interface ImageRevealProps {
  baseImageSrc: string;
  revealImageSrc: string;
}

const ImageReveal: React.FC<ImageRevealProps> = ({ baseImageSrc, revealImageSrc }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const handleDragMove = useCallback((clientX: number) => {
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);
  
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleDragMove(clientX);
  }, [handleDragMove]);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleDragMove(e.clientX);
      }
    };
  
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleDragMove(e.touches[0].clientX);
      }
    };
  
    const handleDragEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleDragEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDragMove]);

  if (!isStarted) {
    return (
      <div className="text-center p-4">
        <button
          onClick={() => setIsStarted(true)}
          className="bg-indigo-600 text-white border-none py-3 px-6 text-lg rounded-lg cursor-pointer my-4 transition-all duration-200 hover:bg-indigo-700 active:scale-95 shadow-lg hover:shadow-xl"
        >
          See AiCE DLR in Action
        </button>
        <p className="text-sm text-gray-600">Click to reveal an interactive comparison.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-black rounded-lg overflow-hidden shadow-2xl my-2">
      <div
        ref={imageWrapperRef}
        className="relative w-full h-64 overflow-hidden select-none cursor-ew-resize"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <img src={baseImageSrc} alt="Base" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
        <img
          src={revealImageSrc}
          alt="Reveal"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
        />
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/80 z-10 pointer-events-none"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-10 h-10 bg-white border-2 border-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg pointer-events-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center p-2 text-xs text-gray-400 bg-gray-900">
        Drag the slider to compare
      </div>
    </div>
  );
};

export default ImageReveal;
