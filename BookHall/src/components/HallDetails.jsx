
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

const HallDetails = () => {
  const { doctors } = useContext(AppContext);

  return (
    <section className="py-10 px-6 2xl:mx-30 xl:mx-20 mx-10">
      <h2 className="text-3xl 2xl:text-5xl font-bold text-center mb-8 text-amber-800">Presenting Seminars</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((seminar, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out animate-fadeInUp"
          >
            <div className="overflow-hidden">
              <img
                src={seminar.image}
                alt={seminar.speciality}
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-xl 2xl:text-2xl font-semibold mb-2 text-gray-800">{seminar.speciality}</h3>

              <button className="mt-4 px-6 py-2 2xl:text-xl bg-amber-700 text-white rounded-xl hover:bg-amber-600 transition-all hover:scale-105 hover:shadow-md active:scale-95">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HallDetails;
