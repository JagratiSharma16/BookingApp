import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets_frontend/assets";

const events = [
  { id: 1, title: "AI in Healthcare", date: "2025-04-20", image: assets.hall1 },
  { id: 2, title: "Smart City Symposium", date: "2025-04-25", image: assets.hall2 },
  { id: 3, title: "IoT & Edge Computing", date: "2025-05-01", image: assets.doc3 },
  { id: 4, title: "Cybersecurity Workshop", date: "2025-05-10", image: assets.hall4 },
  { id: 5, title: "Robotics in Industry 4.0", date: "2025-05-15", image: assets.hall4 },
];

const MarqueeRow = ({ reverse = false, speed = 40 }) => {
  const duplicatedEvents = [...events, ...events];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-8 2xl:gap-14"
        animate={{ x: reverse ? ["100%", "-100%"] : ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {duplicatedEvents.map((event, idx) => (
          <div
            key={idx}
            className="min-w-[280px] 2xl:min-w-[400px] bg-white rounded-3xl shadow-lg p-4 2xl:p-6"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 2xl:h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl 2xl:text-2xl font-semibold text-amber-800">{event.title}</h3>
            <p className="text-gray-600 2xl:text-lg">Date: {event.date}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FeaturedEvents = () => {
  return (
    <section className="py-14 px-4 2xl:px-24 bg-gradient-to-br from-amber-50 via-orange-100 to-amber-50">
      <h2 className="text-4xl 2xl:text-5xl font-bold text-center text-amber-800 mb-12 drop-shadow-lg">
        Featured Events
      </h2>
      <div className="space-y-8">
        <MarqueeRow reverse={false} speed={40} />
        <MarqueeRow reverse={true} speed={30} />
        <MarqueeRow reverse={false} speed={50} />
      </div>
    </section>
  );
};

export default FeaturedEvents;
