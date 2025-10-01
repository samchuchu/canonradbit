import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Chatbot from './components/Chatbot';
import { SLIDES_DATA } from './constants';

type View = 'slides' | 'chatbot';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [view, setView] = useState<View>('slides');
  const [isChatbotLoading, setIsChatbotLoading] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const changeSlide = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handleNext = () => {
    if (currentSlide < SLIDES_DATA.length - 1) {
      changeSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }
  };

  const handleChatbotClick = () => {
    setIsChatbotLoading(true);
    setTimeout(() => {
      setView('chatbot');
      setIsChatbotLoading(false);
    }, 1500);
  };

  const slideContainerClass = `absolute inset-0 transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`;

  return (
    <div className="h-screen w-screen flex md:items-center md:justify-center font-sans bg-gray-100 md:p-4">
      <div
        className="relative w-full h-full md:max-w-sm md:h-[85vh] md:max-h-[750px] md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col md:border-4 md:border-gray-800"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Elements/cloudbg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <style>{`
            @keyframes chatbot-loading-fade {
              0%, 100% { opacity: 0; }
              20%, 80% { opacity: 1; }
            }
            .animate-chatbot-loading {
              animation: chatbot-loading-fade 1.5s ease-in-out forwards;
            }
        `}</style>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            {view === 'slides' && (
              <>
                <ProgressBar current={currentSlide} total={SLIDES_DATA.length} />
                <main className="flex-grow overflow-y-auto relative">
                  <div className={slideContainerClass}>
                    <Slide content={SLIDES_DATA[currentSlide]} />
                  </div>
                </main>
                <Navigation
                  onPrev={handlePrev}
                  onNext={handleNext}
                  onChatbotClick={handleChatbotClick}
                  currentSlide={currentSlide}
                  totalSlides={SLIDES_DATA.length}
                />
              </>
            )}
            {view === 'chatbot' && <Chatbot onBack={() => setView('slides')} />}

            {isChatbotLoading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center animate-chatbot-loading">
                  <img 
                      src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Boxes%20Icons/ctroom01-removebg.png" 
                      alt="Loading RADbot..." 
                      className="w-4/5 h-auto opacity-50"
                  />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;