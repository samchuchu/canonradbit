import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-white">
      <img 
        src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Elements/RADbit.gif" 
        alt="Loading Presentation..." 
        className="w-48 h-48 object-contain"
      />
    </div>
  );
};

export default LoadingScreen;
