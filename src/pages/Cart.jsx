import React, { useEffect, useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Cart = ({choose, setChoose}) => {
  const [chosenProducts, setChosenProducts] = useState()
  const [quantity, setQuantity] = useState([0])

  async function showList() {
    const response = await fetch('https://fakestoreapi.com/products')
    console.log(response)
    const s = await response.clone().json()
    setChosenProducts(choose.map(i => s[i]))
  }

  function changeQuantity(direction, id) {
    if (direction === 'left') {
      setQuantity(quantity--)
    } else {
      setQuantity(quantity++)
    }
  }

  useEffect(() => {
    showList()
  }, [chosenProducts])

  return (
    <div className='grid gap-4 grid-cols-2'>
      {chosenProducts?.map(product => (
        <div className='items-center ml-8 my-4' key={product.id}>
          <div className='flex'>
          <img className='' width='250' height='300'  src={product.image} />
          </div>
          <h3>{product.title}</h3>
          <span>{product.price}$</span>
          <div className='m-2'>
          <button className='cursor-pointer' onClick={() => changeQuantity('left', product.id)}>
            <ArrowLeftIcon />
          </button>
          <span className='text-2xl mb-8 pb-8'>{quantity}</span>
          <button className='cursor-pointer' onClick={() => changeQuantity('right')}>
            <ArrowRightIcon />
          </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart