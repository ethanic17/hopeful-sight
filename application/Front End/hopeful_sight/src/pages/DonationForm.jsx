/**
 * DonationForm component for handling user donations and sign-ups
 * This form collects donation amount and user details like name, email, phone, and address
 * Once submitted, it navigates to a confirmation page
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @typedef {Object} FormData
 *
 * The user's name
 * @property {string} name
 *
 * The user's email
 * @property {string} email
 *
 * The user's phone number in the format 100-100-1000
 * @property {string} phone
 *
 * The user's address
 * @property {string} address
 */

/**
 * The JSX form for donation and sign-up
 * @returns {JSX.Element}
 */
function DonationForm() {
  const [amount, setAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  /**
   * Updates the form data state when an input field changes
   *
   * The change event
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Handles form submission, prevents default action and navigates to confirmation
   *
   * The form submission event
   * @param {React.FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // We have the option to redirect this submission to the api
    navigate("/confirmation");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Donation and Sign Up Form
        </h2>

        {/* Donation amount */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Donation Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount"
            id="amount"
            name="amount"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Name */}
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
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Email */}
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
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Phone */}
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
            value={formData.phone}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Address */}
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
            value={formData.address}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline h-10 resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
