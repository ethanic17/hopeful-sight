import React, { useContext } from "react";
import { CartContext } from "../test_data/cartData";

export function Cart() {
  const { cartItem } = useContext(CartContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to the confirmation page
    window.location.href = "/confirmation";
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {cartItem && (
        <div className="bg-gray-100 rounded-lg p-4 mb-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Your Selection:</h3>
          <div className="flex items-center mb-4">
            <img
              src={cartItem.img || cartItem.imageUrl}
              alt={cartItem.name}
              className="w-20 h-20 object-cover mr-4"
            />
            <div>
              <p className="font-bold">{cartItem.name}</p>
              <p>{cartItem.price || "$0.00"}</p>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Confirm Your Glasses Selection
        </h2>

        {/* Name input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Phone input */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Phone Number (100-100-1000):
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Address input */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline h-10 resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirm Selection
        </button>
      </form>
    </div>
  );
}
