import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/FetchData";
import NavBar from "../components/Navbar";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [quantity, setQuantity] = useState(1);
  let { productId } = useParams();

  useEffect(() => {
    const productInfo = getProduct(setData, setFilter, productId);
    setData(productInfo);
  }, []);

  const handleQuantity = (action) => {
    if (action.length > 0 && action === 'add') {
      setQuantity(quantity + 1)
    }
    else if (action === "minus" && quantity < 1) {
      setQuantity(quantity)
    }
    else if (action === 'minus') {
      setQuantity(quantity - 1)
    } else {
      return
    }
  }

  // useEffect(() => {
  //   handleQuantity()
  // }, [quantity]);

  return (
    <>
    <NavBar />
    <div className="flex flex-col items-stretch">
      <div className="flex justify-center">
        <h2>{filter.title}</h2>
        </div>
        <div className="flex flex-row mx-8 md:mx-24">
        <img src={filter.image} width="200px" alt={filter.title} />
        <div className="flex flex-col ml-8 my-2 justify-end">
        <div className="my-2 text-2xl">
        <span className="text-2xl">
          <button className="p-2 m-2 cursor-pointer" onClick={(() => handleQuantity("minus"))}>
            -
          </button>
          </span>
          {quantity}
          <button className="p-2 m-2 cursor-pointer" onClick={(() => handleQuantity("add"))}>
            +
          </button>
        </div>
      <div className="flex flex-col">
      <button className="my-2 py-2 px-4 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600" onClick={''}>Add to cart</button>
      <button className="my-2 py-2 px-4 text-white bg-green-500 rounded text-center mr-2 mb-2 cursor-pointer hover:bg-green-600" onClick={''}>Buy now</button>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Product;