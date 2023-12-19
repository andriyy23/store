import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = ({choose, setChoose}) => {
  const [quantityInCart, setQuantityInCart] = useState(0)

  return (
    <div>
      <Navbar quantityInCart={quantityInCart} />
      <Products quantityInCart={quantityInCart} setQuantityInCart={setQuantityInCart} choose={choose} setChoose={setChoose} />
      <Footer />
    </div>
  )
}

export default Home