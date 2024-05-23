import React from 'react';

const BentoLayout = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-md mx-auto p-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Section 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Section 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Section 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;