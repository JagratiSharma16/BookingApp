  import './App.css'
  import React from 'react'
  import {BrowserRouter,Route,Routes} from 'react-router-dom'
  import Home from './pages/Home'
  import Admin from './pages/Admin'
  import Navbar from './components/Navbar'
  import About from './pages/About'
  import AdminDashboard from './components/AdminDashboard'

  function App() {
    

    return (
      <>
      <div className='min-h-screen bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200'>
        <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        </Routes>
        </BrowserRouter>
        </div>
      </>
    )
  }

  export default App
