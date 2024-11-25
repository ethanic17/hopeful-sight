/**
 * A React component that renders an interactive map with markers for different regions showing donation counts
 *
 * @component
 *
 * JSX element that has the map card component
 * @returns {React.ReactElement}
 */

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

/**
 * Defines our default logo icon for application
 * @type {L.Icon}
 */
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

// Set the default icon for all markers to the custom one
L.Marker.prototype.options.icon = DefaultIcon;

/**
 * Central coordinates for the USA to center the map
 *
 * The data must be an array data structure
 * @type {Array<number>}
 */
const center = [39.8283, -98.5795];

const regions = [
  { name: "West", position: [37.7749, -122.4194] },
  { name: "Southwest", position: [35.1983, -111.6513] },
  { name: "Midwest", position: [39.7684, -86.1581] },
  { name: "Southeast", position: [29.9511, -90.0715] },
  { name: "Northeast", position: [40.7128, -74.006] },
];

/**
 * Function to render the map component with markers indicating donation counts by region
 *
 * @returns {React.ReactElement} JSX element for rendering the map container with markers
 */
export function MapCard({ setFocusRegion, className }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <MapContainer
        style={{ height: "500px" }}
        center={center}
        zoom={3}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {regions.map((region, index) => (
          <Marker
            key={index}
            position={region.position}
            eventHandlers={{
              click: () => {
                setFocusRegion(region.name);
              },
            }}
          >
            <Popup
              eventHandlers={{
                remove: () => {
                  setFocusRegion(null);
                },
              }}
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {region.name}
                </p>
                {/* <p className="text-sm text-gray-600 mt-2">
                  <span className="font-bold text-blue-600">
                    {region.donationCount}
                  </span>{" "}
                  Donations
                </p> */}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
