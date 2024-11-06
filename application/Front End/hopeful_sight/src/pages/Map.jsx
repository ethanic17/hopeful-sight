import { MapCard } from "../components/MapCard";
import { DonationStatsPanel } from "../components/DonationStatsPanel";
// import L from 'leaflet';

export function MapPage() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Donations by Region
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
        <div className="flex-grow">
          <MapCard />
        </div>
        <div className="w-full md:w-1/3">
          <DonationStatsPanel />
        </div>
      </div>
    </div>
  );
}
