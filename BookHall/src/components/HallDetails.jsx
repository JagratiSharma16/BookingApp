import React from 'react'
// import { assets } from '../assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext.jsx';
import { useContext } from 'react';


const HallDetails = () => {
    const {doctors} = useContext(AppContext)

    return (
        <section className="py-10 px-6 2xl:mx-30 xl:mx-20 mx-10">
            <h2 className="text-3xl font-bold text-center mb-8">Upcoming Seminars</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {doctors.map((seminar, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={seminar.image}
                            alt={seminar.speciality}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{seminar.speciality}</h3>
                            {/* <p className="text-sm text-gray-600">{seminar.date}</p> */}
                            {/* <p className="text-sm text-gray-600">{seminar.location}</p> */}
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                Register
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HallDetails