import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import SingUp from './Pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './Pages/Signin'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/projects' element={<Projects />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SingUp />} />

      </Routes>
        <Footer />
    </BrowserRouter>
  )
}
