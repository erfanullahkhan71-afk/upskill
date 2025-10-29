import React from "react";

function Herosection() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url(/girl.jpg)",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Empower Afghanistan's Smartest Minds
            <br /> Through Digital Skills
          </h1>

          <div className="mt-6 w-full max-w-md mx-auto flex">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full bg-white px-4 py-2 rounded-l-full outline-none text-black"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-full px-6 py-2 whitespace-nowrap">
              Find Best Course
            </button>
          </div>
        </div>
      </div>

      {/* Section Two - Courses */}
      <div className="bg-blue-100 py-10">
        <div className="flex flex-wrap justify-center gap-6 px-4 md:px-0">
          {/* Card 1 */}
          <div className="w-32 sm:w-36 h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition">
            <img className="w-12 h-12 mb-2" src="/Vector.png" alt="Frontend" />
            <h1 className="text-center text-sm font-medium">
              FrontEnd <br /> Development
            </h1>
          </div>

          {/* Card 2 */}
          <div className="w-32 sm:w-36 h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition">
            <img
              className="w-12 h-12 mb-2"
              src="/Vector (1).png"
              alt="Backend"
            />
            <h1 className="text-center text-sm font-medium">
              BackEnd <br /> Development
            </h1>
          </div>

          {/* Card 3 */}
          <div className="w-32 sm:w-36 h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition">
            <img
              className="w-12 h-12 mb-2"
              src="/Vector (2).png"
              alt="Graphic Design"
            />
            <h1 className="text-center text-sm font-medium">
              Graphic <br /> Design
            </h1>
          </div>

          {/* Card 4 */}
          <div className="w-32 sm:w-36 h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition">
            <img className="w-12 h-12 mb-2" src="/pen-tool-2.png" alt="UI/UX" />
            <h1 className="text-center text-sm font-medium">
              UI/UX <br /> Design
            </h1>
          </div>

          {/* Card 5 */}
          <div className="w-40 sm:w-44 h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition">
            <img
              className="w-12 h-12 mb-2"
              src="/card-coin.png"
              alt="Finance"
            />
            <h1 className="text-center text-sm font-medium">
              Accounting & <br /> Finance
            </h1>
          </div>

          {/* Card 6 */}
          <div className="w-44 sm:w-48 h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition">
            <img className="w-12 h-12 mb-2" src="/Vector (3).png" alt="AI" />
            <h1 className="text-center text-sm font-medium">
              AI <br /> Artificial Intelligence
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
