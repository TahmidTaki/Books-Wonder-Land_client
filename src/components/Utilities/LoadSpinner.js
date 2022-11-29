import React from "react";

const LoadSpinner = () => {
  return (
    <>
      <div className="flex justify-center mt-12">
        <div className="relative">
          <div className="w-20 h-20 border-success border-2 rounded-full"></div>
          <div className="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>

        <div className="relative">
          <div className="w-10 h-10 border-success border-2 rounded-full"></div>
          <div className="w-10 h-10 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>

        <div className="relative">
          <div className="w-5 h-5 border-success border-2 rounded-full"></div>
          <div className="w-5 h-5 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
        <br />
      </div>
      <h3 className="text-success text-2xl mt-8">Loading data..</h3>
    </>
  );
};

export default LoadSpinner;
