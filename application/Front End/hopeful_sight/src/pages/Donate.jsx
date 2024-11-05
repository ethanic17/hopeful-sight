/**
 * Donate component that provides options for users to either sign up for donation or navigate to the product catalog
 * This component is used as an entry point for the donation process, offering
 * A button to proceed to the donation form
 * A button to return to the main catalog
 */
import React from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
  const navigate = useNavigate();

  /**
   * Handles navigation to the donation form page
   */
  const handleDonateClick = () => navigate("/donate/form");

  /**
   * Handles navigation back to the home page (catalog)
   */
  const handleCatalogClick = () => navigate("/");

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-blue-600 mb-6">Support Our Cause</h1>
      <button
        onClick={handleDonateClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up to Donate
      </button>
      <button
        onClick={handleCatalogClick}
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      >
        Go to Catalog
      </button>
    </div>
  );
}

export default Donate;
