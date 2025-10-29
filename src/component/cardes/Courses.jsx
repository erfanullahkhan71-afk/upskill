import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Courses() {
  return (
    <div>
       <div className="py-10 bg-blue-100">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl font-semibold mb-8">
        Transforming Skills for Tomorrow&apos;s Challenges
      </h1>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-6"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
              <img
                className="rounded-t-xl w-full h-40 object-cover"
                src="/cardeIMG.png"
                alt="Course"
              />
              <h2 className="mt-3 font-semibold text-gray-800 text-base md:text-lg leading-snug">
                Productivity Master Class:
                <br /> Create a Custom System that Works
              </h2>

              <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                <img
                  className="w-6 h-6 rounded-full"
                  src="/Vector (2).png"
                  alt="Instructor"
                />
                <p>Erfan Jan</p>
              </div>

              <hr className="my-3" />
              <p className="text-sm text-gray-500">12 Lessons</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          More
        </button>
      </div>
    </div>
    </div>
  )
}

export default Courses





