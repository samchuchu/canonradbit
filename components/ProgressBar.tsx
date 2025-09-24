import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="w-full bg-gray-200 h-1.5 absolute top-0 left-0 z-50">
      <div
        className="bg-indigo-600 h-1.5 transition-all duration-300 ease-in-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
