import React, { useState, useEffect, useCallback } from 'react';

interface GifPlayerProps {
  gifSrc: string;
  duration: number; // Duration of the GIF in milliseconds
  startButtonText: string;
  scanAgainButtonText: string;
  instructions: string;
}

const GifPlayer: React.FC<GifPlayerProps> = ({ gifSrc, duration, startButtonText, scanAgainButtonText, instructions }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentGifSrc, setCurrentGifSrc] = useState('');

  const playGif = useCallback(() => {
    setShowOverlay(false);
    // Append a timestamp to the URL to force the browser to reload the GIF
    setCurrentGifSrc(`${gifSrc}?t=${new Date().getTime()}`);
  }, [gifSrc]);
  
  useEffect(() => {
    // FIX: Use ReturnType<typeof setTimeout> for the timer ID type, as NodeJS.Timeout is not available in browser environments.
    let timer: ReturnType<typeof setTimeout>;
    if (currentGifSrc) {
        // When a new GIF src is set, it's playing.
        // Set a timer to show the overlay after the duration.
        timer = setTimeout(() => {
            setShowOverlay(true);
        }, duration);
    }
    return () => clearTimeout(timer);
  }, [currentGifSrc, duration]);

  const handleStartScan = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsLoading(true);

    // Short delay to show loading state before playing
    setTimeout(() => {
      setIsLoading(false);
      playGif();
    }, 500);
  };

  const handleScanAgain = () => {
    playGif();
  };

  if (!hasStarted) {
    return (
      <div className="text-center p-4">
        <button
          onClick={handleStartScan}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-none py-3 px-6 text-base font-bold rounded-full cursor-pointer my-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-px active:translate-y-0"
        >
          {startButtonText}
        </button>
        <p className="text-xs text-gray-600 mt-2">
            {instructions}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full text-center">
      {isLoading && (
        <div className="flex items-center justify-center p-4 text-green-600">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-green-600 rounded-full animate-spin mr-2"></div>
          Loading scan...
        </div>
      )}

      {currentGifSrc && !isLoading && (
         <div className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-black">
            <img 
                src={currentGifSrc} 
                className="w-full h-auto block" 
                alt="Scanning Animation" 
                onError={() => console.error('Failed to load GIF.')}
            />
            {showOverlay && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center animate-fade-in-fast p-4">
                    <button
                    onClick={handleScanAgain}
                    className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-none py-3 px-6 text-base font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-px active:translate-y-0"
                    >
                    {scanAgainButtonText}
                    </button>
                    <p className="text-xs text-gray-800 bg-white/50 rounded-md p-1 mt-3 text-center">
                        {instructions}
                    </p>
                </div>
            )}
         </div>
      )}
      <style>{`
        @keyframes fade-in-fast {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-fast {
          animation: fade-in-fast 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GifPlayer;