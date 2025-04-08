import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <>
    <header className="relative w-476 h-100 mr-50 ml-50 overflow-hidden">
      <img
        src={assets.hallpic}
        alt="Seminar Hall"
        className="absolute inset-1 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl 2xl:text-5xl font-bold drop-shadow-lg">
          Seminar Hall Booking System
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Book, Manage, and Organize Events Seamlessly
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold rounded-2xl shadow-lg">
          Book Now
        </button>
      </div>
    </header>

    </>
  )
}

export default Header