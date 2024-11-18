import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { glasses } from "../test_data/glasses";

export function GlassesDetailPage() {
  const { id } = useParams();
  const glass = glasses.find((g) => g.glasses_id === parseInt(id, 10));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!glass) {
    return <div>Glasses not found!</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % glasses.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + glasses.length) % glasses.length
    );
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">{glass.name}</h1>
      <div className="relative">
        <img
          src={glasses[currentImageIndex].img}
          alt={glass.name}
          className="w-full h-[300px] object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 m-2 rounded-full"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 m-2 rounded-full"
        >
          Next
        </button>
      </div>
      <div className="mt-4">
        <p>
          <strong>Description:</strong> {glass.description}
        </p>
        <p>
          <strong>Frame Width:</strong> {glass.size}mm
        </p>
        {/* Add other details you might want to display */}
      </div>
    </div>
  );
}
