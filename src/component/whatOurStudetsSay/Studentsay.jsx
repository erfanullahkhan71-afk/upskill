


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaPlay } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";


function Studentsay() {


     const testimonials = [
    {
      name: "David Miller",
      role: "Busy Professional",
      image: "/Image.png",
      rating: 5,
      text: "UltraClear is a lifesaver! My busy schedule doesn’t leave time for cleaning, but their reliable service keeps my apartment sparkling.",
    },
    {
      name: "Farhad",
      role: "Family Man",
      image: "/Image (1).png",
      rating: 5,
      text: "With kids and pets, keeping our house clean felt impossible. UltraClear changed the game! Coming home to a spotless haven after a long day is amazing.",
    },
    {
      name: "Farhad",
      role: "Family Man",
      image: "/Image (1).png",
      rating: 5,
      text: "With kids and pets, keeping our house clean felt impossible. UltraClear changed the game! Coming home to a spotless haven after a long day is amazing.",
    },
  ];
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <button className="border border-blue-400 text-blue-600 px-4 py-1 rounded-full mb-3">
            Testimonials 🥳
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Students Say
          </h1>
        </div>

        {/* Swiper */}
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col md:flex-row items-center md:items-stretch">
                  {/* Left Text Section */}
                  <div className="w-full md:w-1/2 p-6">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{item.role}</p>
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* Right Image Section with Play Button */}
                  <div className="relative w-full md:w-1/2 h-56 md:h-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 hover:bg-white rounded-full p-4 transition">
                        <FaPlay className="text-blue-600 text-xl" />
                      </div>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

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
    </div>
  );
}

export default Studentsay




