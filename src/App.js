import React, { useState } from 'react'
import Home from "./pages/Home.jsx"
import { Routes, Route } from "react-router-dom"
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'

const App = () => {

  const [choose, setChoose] = useState([])
    
  return (
    <div>
        <Routes>
          <Route path="/" element={ <Home choose={choose} setChoose={setChoose} /> } />
          <Route path={`/product/:productId`} element={ <Product />} />
          <Route path="/cart" element={ <Cart choose={choose} setChoose={setChoose} /> } />
        </Routes>
    </div>
  )
}

export default App