import { MapCard } from "../components/MapCard";
import { DonationStatsPanel } from "../components/DonationStatsPanel";
import { useState } from "react";
// import L from 'leaflet';

export function MapPage() {
  const [focusRegion, setFocusRegion] = useState(null);
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Donations by Region
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="flex-grow bg-white p-2 shadow-lg rounded-lg">
          <MapCard setFocusRegion={setFocusRegion} />
        </div>

        <div className="flex-grow bg-white shadow-lg rounded-lg p-4">
          <DonationStatsPanel focusRegion={focusRegion} />
        </div>
      </div>
    </div>
  );
}
