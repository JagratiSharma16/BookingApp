import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <>
    <header className="relative h-150 2xl:mx-30 xl:mx-20 mx-10 overflow-hidden">
      <img
        src={assets.homeimg}
        alt="Seminar Hall"
        className="absolute inset-1 w-full h-full object-cover brightness-50 bg-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="xl:text-3xl 2xl:text-5xl font-bold drop-shadow-lg">
          Seminar Hall Booking System
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Book, Manage, and Organize Events Seamlessly
        </p>
        <button className="mt-6 px-6 py-3 2xl:text-xl bg-amber-700 hover:bg-amber-600 transition-all text-white font-semibold rounded-2xl shadow-lg">
          Book Now
        </button>
      </div>
    </header>

    </>
  )
}

export default Header