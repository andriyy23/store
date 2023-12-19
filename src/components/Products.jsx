import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = ({ quantityInCart, setQuantityInCart, choose, setChoose }) => {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      setData(await response.clone().json())
      setFilter(await response.json())
    }
    getProducts()
  }, [])

  const filterProducts = (type) => {
    let updatedList = data.filter((i) => i.category === type)
    setFilter(updatedList)
  }

  function addToCart(id) {
    if(id != choose[id - 1]) {
      setQuantityInCart(quantityInCart + 1)
    setChoose([...choose, id])
    }
  }
  
  return (
    <div>
        <section className="py-8"> 
          <div className="container mx-auto flex items-center justify-center flex-wrap pt-4 pb-12 text-center">
            <div className="mx-8 mt-24 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 border-2 border-indigo-600">
            {filter.map((product) => (
              // href={`/products/${product.id}`}
                <a key={product.id}>
                  <div className="border-2 border-gray-400 rounded-lg border-solid">
                  <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-8" height="250px" width="200" src={product.image} alt={product.title} />
                  <div className="pt-3 px-4 flex items-center justify-between border-gray-700">
                  <Link to={`/product/${product.id}`}>
                  <p className="pt-1 text-gray-900">{product.title.substring(0, 20)}...</p>
                      </Link>
                      <button className={'cursor-pointer bg-slate-100'}  onClick={() => addToCart(product.id)}>
                    <svg className="h-6 w-6 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                      </svg>
                      </button>
                  </div>
                  <p className="pb-2 text-gray-900">${product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <button
        className="me-2 py-2 px-3 text-lg cursor-pointer"
        onClick={() => filterProducts("electronics")}
      >
        Electronincs
      </button>
          <button
        className="me-2 py-2 px-3 text-lg cursor-pointer"
        onClick={() => setFilter(data)}
      >
        All
      </button>
      <button
        className="me-2 py-2 px-3 text-lg cursor-pointer"
        onClick={() => filterProducts("men's clothing")}
      >
        Men
      </button>
      <button
        className="me-2 py-2 px-3 text-lg cursor-pointer"
        onClick={() => filterProducts("women's clothing")}
      >
        Women
      </button>
      <button
        className="me-2 py-2 px-3 text-lg cursor-pointer"
        onClick={() => filterProducts("jewelery")}
      >
        Jewelery
      </button>
        </section>
      </div>
  )
}

export default Products






{/* <svg className="h-6 w-6 mr-32 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> */}



// <>
// <div className="text-center justify-center my-5 pb-5">
//       <button
//         className="me-2 py-2 px-3 text-lg cursor-pointer"
//         onClick={() => setFilter(data)}
//       >
//         All
//       </button>
//       <button
//         className="me-2 py-2 px-3 text-lg cursor-pointer"
//         onClick={() => filterProducts("men's clothing")}
//       >
//         Men
//       </button>
//       <button
//         className="me-2 py-2 px-3 text-lg cursor-pointer"
//         onClick={() => filterProducts("women's clothing")}
//       >
//         Women
//       </button>
//       <button
//         className="me-2 py-2 px-3 text-lg cursor-pointer"
//         onClick={() => filterProducts("jewelery")}
//       >
//         Jewelery
//       </button>
//       <button
//         className="me-2 py-2 px-3 text-lg cursor-pointer"
//         onClick={() => filterProducts("electronics")}
//       >
//         Electronincs
//       </button>
//     </div>
//   {filter.map((product) => {
//       return (
//         <>
//           <div className='inline-grid grid-cols-3 gap-4'>
//             <span>
//               <img
//                 src={product.image}
//                 height="250px"
//                 className="card-img-top"
//                 alt={product.title}
//               />
//                 <h5 className="card-title mb-0">
//                   {product.title.substring(0, 12)}...
//                 </h5>
//                 <p className="card-text lead fw-bold">₹{product.price}</p>
//                 <a
//                   to={`/products/${product.id}`}
//                   className="btn  btn-outline-dark"
//                 >
//                   Buy Now
//                 </a>
//                 </span>
//           </div>
//         </>
//       );
//     })}
// </>