/**
 * A special page that shows up after you give a present (donation)
 * It has a bar that grows to show you're waiting
 * And when it's done, it takes you back to the start (home page)
 *
 * The page with a thank you message and a moving bar
 * @returns {JSX.Element}
 */
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();
  const progressBarRef = useRef(null);
  const confirmationNumber = Math.floor(Math.random() * 1000000);

  /**
   * Makes the waiting bar grow and then takes you home
   */
  useEffect(() => {
    if (progressBarRef.current) {
      let width = 1;
      const frame = () => {
        if (width >= 100) {
          clearInterval(intervalId);
        } else {
          width += 0.1;
          progressBarRef.current.style.width = `${width}%`;
        }

        if (width === 100) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      };
      const intervalId = setInterval(frame, 1);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-blue-600 mb-6">
        Thank You for Your Donation
      </h1>
      <div className="w-64 mb-4">
        <div
          ref={progressBarRef}
          className="progress-bar bg-blue-600 h-4 rounded-full"
          style={{ width: "1%" }}
        ></div>
      </div>
      <p className="mb-4">Confirmation Number: #{confirmationNumber}</p>
      <div className="flex space-x-2">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate("/map")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Product Map
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
