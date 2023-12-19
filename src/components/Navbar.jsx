import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar({ quantityInCart, setQuantityInCart }) {

  return (
    <nav className="w-full bg-purple-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3">
            <a href="/">
              <h2 className="text-2xl font-bold text-red">Estore</h2>
            </a>
            <div className="flex flex-end">
              <ul>
            <li className="text-white">
                <Link
                  className="cursor-pointer"
                  to="/cart"
                >
                  <ShoppingCartIcon color="primary" />
                  <span>{quantityInCart}</span>
                </Link>
              </li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}