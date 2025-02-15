import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Header from './client/components/Header/Header'
import Footer from './client/components/Footer/Footer'
import Home from './client/components/Home/Home'
import Dashboard from './admin/components/Dashboard/Dashboard'
import BrowsingPage from './client/components/BrowsingPage/BrowsingPage'
import ProductDetails from './client/components/ProductDetails/ProductDetails'
import Cart from './client/components/Cart/Cart'
import ForgotPassword from './client/components/ForgotPassword/ForgotPassword'


export const userContext = createContext()

const App = () => {

  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(user => {
        setUser(user.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <section className='app'>
      <userContext.Provider value={user}>
        <BrowserRouter>
          <header className='header'>
            <Header />
          </header>
          <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Dashboard />} path='/admin'></Route>
            <Route element={<BrowsingPage />} path='/category'></Route>
            <Route element={<ProductDetails/>} path='/productDetails'></Route>
            <Route element={<Cart />} path='/cart'></Route>
            <Route element={<ForgotPassword />} path='/forgotPwd'></Route>
          </Routes>
          <footer className='footer'>
            <Footer />
          </footer>
        </BrowserRouter>
      </userContext.Provider>
    </section>
  )
}

export default App