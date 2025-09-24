import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import { SLIDES_DATA } from './constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    // Simulate loading assets for the presentation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second loading screen for demonstration

    return () => clearTimeout(timer);
  }, []);

  const changeSlide = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      // Fade the new slide back in
      setTimeout(() => setIsTransitioning(false), 50); // Short delay to allow re-render
    }, 300); // This duration should match the fade-out transition
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

  const slideContainerClass = `absolute inset-0 transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`;

  return (
    <div className="h-screen w-screen flex items-center justify-center font-sans bg-gray-100 p-4">
      <div
        className="relative w-full max-w-sm h-[85vh] max-h-[750px] rounded-3xl shadow-2xl overflow-hidden flex flex-col border-4 border-gray-800"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Elements/cloudbg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {isLoading ? (
          <LoadingScreen />
        ) : (
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
              currentSlide={currentSlide}
              totalSlides={SLIDES_DATA.length}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
