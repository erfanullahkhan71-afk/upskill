import React from "react";

function Lern3() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-10 bg-gradient-to-b from-white to-blue-50">
      {/* Left Side - Image & Quote */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
        <img
          src="/sidimg.png"
          alt="Upskill Learning Center Speaker"
          className="rounded-3xl shadow-lg object-cover w-full md:w-5/6"
        />
        
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <button className="border border-blue-400 text-blue-600 rounded-full px-4 py-1 text-sm font-medium">
          Who we are
        </button>

        <h1 className="font-bold text-3xl md:text-4xl text-gray-900">
          Learn More About Upskill <br className="hidden md:block" /> Learning
          Center
        </h1>

        {/* FAQ Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-gray-800">
            What is Upskill Learning Center?
          </h3>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-gray-800">
            Who can join Upskill Learning Center?
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Anyone across Afghanistan who wants to improve their digital or
            professional skills can join. Our courses are designed for
            beginners, students, and professionals who want to upskill or change
            their career path.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-gray-800">
            How do I enroll in a course?
          </h3>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-gray-800">
            Are the courses free or paid?
          </h3>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 font-medium">
          More About Us
        </button>
      </div>
    </div>
  );
}

export default Lern3;

