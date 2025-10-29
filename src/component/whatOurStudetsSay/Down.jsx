import React from "react";

function Down() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden px-4">
    
      <img
        src="/Image (2).png"
        className="absolute top-20 left-10 md:top-24 md:left-56 w-16 md:w-24 rounded-xl shadow-lg"
        alt=""
      />
      <img
        src="/Image (3).png"
        className="absolute top-20 right-10 md:top-24 md:right-56 w-16 md:w-24 rounded-xl shadow-lg"
        alt=""
      />
      <img
        src="/Image (2).png"
        className="absolute bottom-20 left-10 md:bottom-24 md:left-48 w-12 md:w-16 rounded-xl shadow-lg"
        alt=""
      />
      <img
        src="/Image (3).png"
        className="absolute bottom-20 right-10 md:bottom-24 md:right-48 w-12 md:w-20 rounded-xl shadow-lg"
        alt=""
      />
      <img
        src="/Image (2).png"
        className="absolute top-1/2 left-2 md:left-12 w-8 md:w-10 rounded-xl shadow-lg -translate-y-1/2"
        alt=""
      />
      <img
        src="/Image (3).png"
        className="absolute top-1/2 right-2 md:right-12 w-8 md:w-10 rounded-xl shadow-lg -translate-y-1/2"
        alt=""
      />

      <div className="z-10 max-w-md">
        <h2 className="text-gray-700 text-lg mb-2">
          Join our Afghan-led global learning community
        </h2>
        <h1 className="text-5xl font-bold text-gray-900 mb-2">217,924+</h1>
        <p className="text-gray-500 mb-4">where ambition meets opportunity</p>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">
          Join Community
        </button>
      </div>
    </div>
  );
}

export default Down;
