import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

function About() {
  return (
    <div className="bg-gradient-to-br from-orange-200 via-white to-orange-100 min-h-screen">
      <div className="p-6 sm:p-8 xl:p-12 max-w-6xl xl:max-w-7xl 2xl:max-w-screen-xl mx-auto">
        <h1 className="text-4xl xl:text-5xl font-bold mb-8 text-left bg-gradient-to-r from-orange-800 via-orange-600 to-orange-400 text-transparent bg-clip-text">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-center xl:gap-16 2xl:gap-20">
          {/* TEXT SECTION */}
          <div className="md:w-1/2">
            <p className="text-lg xl:text-xl mb-6 text-gray-700 text-left leading-relaxed">
              Welcome to <span className="font-semibold text-orange-600 hover:text-orange-800 transition-colors duration-300 cursor-pointer">Venuetic</span> – your one-stop platform for seamless seminar and auditorium hall booking!
            </p>

            <div className="bg-white p-6 xl:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-orange-700">Our Mission</h2>
              <p className="text-gray-700 mb-4 text-base xl:text-lg leading-relaxed">
                At Venuetic, we aim to simplify the process of reserving spaces for academic, corporate, and cultural events. Whether you need a seminar room for a workshop or an auditorium for a large event, our platform provides a quick, transparent, and hassle-free booking experience.
              </p>

              <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-orange-700">What We Offer</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base xl:text-lg">
                {[
                  'Real-time availability of halls',
                  'Instant booking confirmation',
                  'Custom filters for capacity, equipment, and location',
                  'User-friendly dashboard for managing your events',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-orange-600 transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl xl:text-3xl font-semibold mt-6 mb-3 text-orange-700">Why Choose Us?</h2>
              <p className="text-gray-700 text-base xl:text-lg leading-relaxed">
                We believe in efficiency, accessibility, and trust. Our system is built to ensure that your event planning is smoother, smarter, and more successful.
              </p>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={assets.aboutimg}
              alt="Event Hall"
              className="w-64 sm:w-72 md:w-80 lg:w-[22rem] xl:w-[26rem] 2xl:w-[30rem] h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-16 bg-gradient-to-br from-gray-100 to-white p-6 xl:p-10 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl xl:text-3xl font-semibold text-orange-800 mb-4">Contact Us</h2>
          <div className="text-gray-700 text-base xl:text-lg leading-relaxed space-y-2">
            <p>
              <span className="font-medium">Website:</span>{' '}
              <a
                href="https://abes.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-300"
              >
                https://abes.ac.in/
              </a>
            </p>
            <p>
              <span className="font-medium">Location:</span> 19th KM Stone, NH-09, Ghaziabad (UP), PIN - 201009
            </p>
            <p>
              <span className="font-medium">Phone:</span>{' '}
              <a
                href="tel:01207135112"
                className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-300"
              >
                0120-7135112
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
