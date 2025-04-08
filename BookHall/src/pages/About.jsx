import React from 'react';

function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      
      <p className="text-lg mb-6 text-gray-700 text-center">
        Welcome to <span className="font-semibold text-blue-600">HallBookr</span> – your one-stop platform for seamless seminar and auditorium hall booking!
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At HallBookr, we aim to simplify the process of reserving spaces for academic, corporate, and cultural events. Whether you need a seminar room for a workshop or an auditorium for a large event, our platform provides a quick, transparent, and hassle-free booking experience.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-blue-700">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Real-time availability of halls</li>
          <li>Instant booking confirmation</li>
          <li>Custom filters for capacity, equipment, and location</li>
          <li>User-friendly dashboard for managing your events</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-700">Why Choose Us?</h2>
        <p className="text-gray-700">
          We believe in efficiency, accessibility, and trust. Our system is built to ensure that your event planning is smoother, smarter, and more successful.
        </p>
      </div>
    </div>
  );
}

export default About;
