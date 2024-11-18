import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { glasses } from "../test_data/glasses";

export function GlassesDetailPage() {
  const { id } = useParams();
  const glass = glasses.find((g) => g.glasses_id === parseInt(id, 10));

  if (!glass) {
    return <div>Glasses not found!</div>;
  }

  // We are using useState to manage the current glass item being viewed
  const [currentGlass, setCurrentGlass] = useState(glass);

  // Function to move to the next glass item
  const nextGlass = () => {
    const currentIndex = glasses.findIndex(
      (g) => g.glasses_id === currentGlass.glasses_id
    );
    const nextIndex = (currentIndex + 1) % glasses.length;
    setCurrentGlass(glasses[nextIndex]);
  };

  // Function to move to the previous glass item
  const prevGlass = () => {
    const currentIndex = glasses.findIndex(
      (g) => g.glasses_id === currentGlass.glasses_id
    );
    const prevIndex = (currentIndex - 1 + glasses.length) % glasses.length;
    setCurrentGlass(glasses[prevIndex]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">{currentGlass.name}</h1>
      <div className="relative">
        <img
          src={currentGlass.img}
          alt={currentGlass.name}
          className="w-full h-[300px] object-cover"
        />
        <button
          onClick={prevGlass}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 m-2 rounded-full"
        >
          Previous
        </button>
        <button
          onClick={nextGlass}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 m-2 rounded-full"
        >
          Next
        </button>
      </div>
      <div className="mt-4">
        <p>
          <strong>Description:</strong> {currentGlass.description}
        </p>
        <p>
          <strong>Frame Width:</strong> {currentGlass.size}mm
        </p>
        {/* Guys you can add other details you might want to display */}
        {/* Maybe some more information about the glasses */}
      </div>
    </div>
  );
}
