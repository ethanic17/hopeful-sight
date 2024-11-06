import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const center = [39.8283, -98.5795];
const uswest = [37.7749, -122.4194];
const ussouthwest = [35.1983, -111.6513];
const position = [39.8283, -98.5795];
const usmidwest = [39.7684, -86.1581];
const ussoutheast = [29.9511, -90.0715];
const usnortheast = [40.7128, -74.006];

export function MapCard() {
  const donationAmouts = [
    {
      position: uswest,
      textContent: "United States West Donation Count:",
      donationCount: 1,
    },
    {
      position: ussouthwest,
      textContent: "United States Southwest Donation Count:",
      donationCount: 1,
    },
    {
      position: usmidwest,
      textContent: "United States Midwest Donation Count:",
      donationCount: 1,
    },
    {
      position: ussoutheast,
      textContent: "United States Southeast Donation Count:",
      donationCount: 1,
    },
    {
      position: usnortheast,
      textContent: "United States Northeast Donation Count:",
      donationCount: 1,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg w-3/5 h-[530px] shadow-md mx-auto">
      <MapContainer
        style={{ height: "500px" }}
        center={center}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {donationAmouts.map((el) => {
          console.log(el.position);
          return (
            <Marker key={el.textContent} position={el.position}>
              <Popup>{el.textContent + el.donationCount}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
