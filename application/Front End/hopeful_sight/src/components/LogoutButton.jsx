import React from "react";
import { useNavigate } from "react-router-dom";
import { removeLoggedIn } from "../test_data/sessionStorageCache";

/**
 * 
 * @returns Redirection to the homepage
 */

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeLoggedIn();
    // Will redirect to the next page after logout
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="text-white hover:text-gray-400">
      Logout
    </button>
  );
}
