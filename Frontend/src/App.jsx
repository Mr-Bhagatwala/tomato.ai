import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopPup from './components/LoginPopPup/LoginPopPup'
const App = () => {
  const [showLogin , setShowLogin] = useState(false)
  return (
  <>
    {showLogin ? <LoginPopPup  setShowLogin = {setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        <Route  path ='/'  element = {<Home/>}/>
        <Route  path ='/cart'  element = {<Cart/>}/>
        <Route  path ='/PlaceOrder'  element = {<PlaceOrder/>}/>
        {/* <Route path = '/verify' element = {<verify/>}/> */}
      </Routes>
    </div>
      <Footer/>
  </>
  )
}

export default App
