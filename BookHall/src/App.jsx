import './App.css'
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Society from './pages/Society'
import Department from './pages/Department'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/society" element={<Society />} />
        <Route path="/department" element={<Department />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
