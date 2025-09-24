import React from 'react';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onChatbotClick: () => void;
  currentSlide: number;
  totalSlides: number;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, onChatbotClick, currentSlide, totalSlides }) => {
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  const buttonBaseClasses = "p-3 rounded-full bg-white shadow-md text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  const disabledClasses = "opacity-30 cursor-not-allowed";

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/50 to-transparent z-40">
      <div className="w-full mx-auto flex flex-col items-center space-y-3">
        <span className="text-sm font-medium text-gray-600 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          {currentSlide + 1} / {totalSlides}
        </span>
        <div className="w-full flex justify-between items-center px-2">
          <button
            onClick={onPrev}
            disabled={isFirstSlide}
            className={`${buttonBaseClasses} ${isFirstSlide ? disabledClasses : 'hover:bg-gray-100 active:scale-95'}`}
            aria-label="Previous Slide"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          
          <button 
            onClick={onChatbotClick} 
            className="transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Open Chatbot"
          >
            <img 
              src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Elements/RADbot-full.png" 
              alt="Open RADbot" 
              className="h-12 w-auto drop-shadow-lg" 
            />
          </button>

          <button
            onClick={onNext}
            disabled={isLastSlide}
            className={`${buttonBaseClasses} ${isLastSlide ? disabledClasses : 'hover:bg-gray-100 active:scale-95'}`}
            aria-label="Next Slide"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;