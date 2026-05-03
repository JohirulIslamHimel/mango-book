import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
        <p className="text-purple-600 font-bold animate-pulse">
          MangoBook is Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
