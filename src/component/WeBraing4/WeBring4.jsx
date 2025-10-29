import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

function WeBring4() {
  const cards = [
    {
      img: "/1men.jpg",
      title: "Anea ahmadi",
      desc: "Upskill Learning Center helped me gain real skills in technology and build my confidence for the future.",
    },
    {
      img: "/2feml.jpg",
      title: "Title Goes Here",
      desc: "Based on empirical research, the economic model follows key principles that motivate learners.",
    },
    {
      img: "/3like.jpg",
      title: "Title Goes Here",
      desc: "Based on empirical research, the economic model follows key principles that motivate learners.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-gray-50 to-white text-gray-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          We Bring Expertise <br /> and Guidance for Talent
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Led by experts working daily in technology, AI, and leadership —
          bringing real-world experience to every program.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group h-[400px] cursor-pointer"
          >
            {/* Background image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Text content */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-200 mb-4">{card.desc}</p>
              <BsArrowUpRightCircle className="text-2xl hover:scale-110   transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeBring4;
