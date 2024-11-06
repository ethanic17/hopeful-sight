/**
 * @typedef {Object} GlassesData
 * @property {string} img  The URL for the glasses image (alias for img or imageUrl)
 * @property {string} imageUrl  The URL for the glasses image
 * @property {string} name  The name of the glasses
 * @property {string} description  A description of the glasses
 * @property {string} size  The frame width of the glasses
 */

/**
 * Renders and displays a div component for displaying glasses information.
 * @param {Object} props  Component props
 * @param {GlassesData} props.data  An object containing glasses data
 *
 * @returns {JSX.Element} A JSX element representing the glasses card
 * @example <GlassesCard data={glasses[i]} />
 */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../test_data/cartData";

export function GlassesCard({ onClick, loggedIn, data }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // const handleAddToCart = () => {
  //   if (loggedIn) {
  //     addToCart(data);
  //     navigate("/cart");
  //   } else {
  //     navigate("/login"); // Assuming there's a login page for non-logged-in users
  //   }
  // };

  return (
    <div className="flex flex-col w-full h-[500px] bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-102">
      <div className="flex-shrink-0 w-full h-[250px] mb-4">
        <img
          src={data.img || data.imageUrl}
          alt={data.name}
          className="object-cover w-full h-full rounded-lg bg-transparent"
        />
      </div>
      <div className="flex flex-col min-h-32">
        <h1 className="text-2xl font-bold text-black line-clamp-1 mb-1">
          {data.name}
        </h1>
        <h2 className="text-base text-blue-600 line-clamp-2 mb-2">
          {data.description}
        </h2>
        <h2 className="text-sm text-gray-800">Frame Width: {data.size}</h2>
      </div>
      <button
        onClick={onClick}
        className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {!loggedIn ? "Sign In" : "Donate"}
      </button>
    </div>
  );
}
