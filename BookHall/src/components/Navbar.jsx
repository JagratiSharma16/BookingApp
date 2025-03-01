import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from "../assets/assets_frontend/assets"

const Navbar = () => {
    const [token, setToken] = useState(true)
    return (
        <div>
            {token ?
                <div> 
                    <div className="flex items-center justify-between text-5m py-5 mb-5 border-b-3 border-b-gray-400 ml-50 mr-50 shadow-lg">
                        <img className="w-26 rounded-2xl cursor-pointer" src={assets.Booklogo} alt="image" />
                        <ul className="hidden md:flex items-start gap-10 font-bold text-2xl">
                            <NavLink to="/">
                                <li className="py-1">Home</li>
                                <hr className="border-none outline-none h-1 bg-blue-500 w-5/5 m-auto hidden" />
                            </NavLink>
                            <NavLink to="/admin">
                                <li className="py-1">Admin</li>
                                <hr className="border-none outline-none h-1 bg-blue-500 w-5/5 m-auto hidden" />
                            </NavLink>
                            <NavLink to="/society">
                                <li className="py-1">Society</li>
                                <hr className="border-none outline-none h-1 bg-blue-500 w-5/5 m-auto hidden" />
                            </NavLink>
                        </ul>
                        <img className="w-15 rounded-full" onClick={() => setToken(false)} src={assets.lightmode} alt="light" />
                    </div>
                </div>
                :
                <div>
                    <div className="flex items-center justify-between bg-gray-600 text-5m py-5 mb-5 border-b-3 border-b-gray-400 ml-50 mr-50 shadow-lg">
                        <img className="w-26 rounded-2xl cursor-pointer" src={assets.Booklogo} alt="image" />
                        <ul className="hidden md:flex items-start gap-10 font-bold text-2xl">
                            <NavLink to="/">
                                <li className="py-1 text-white">Home</li>
                                <hr className="border-none outline-none h-1 bg-blue-200 w-5/5 m-auto hidden" />
                            </NavLink>
                            <NavLink to="/admin">
                                <li className="py-1 text-white">Admin</li>
                                <hr className="border-none outline-none h-1 bg-blue-200 w-5/5 m-auto hidden" />
                            </NavLink>
                            <NavLink to="/society">
                                <li className="py-1 text-white">Society</li>
                                <hr className="border-none outline-none h-1 bg-blue-200 w-5/5 m-auto hidden" />
                            </NavLink>
                        </ul>
                        <img className="w-15 rounded-full " onClick={() => setToken(true)} src={assets.darkmode} alt="dark" />
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar