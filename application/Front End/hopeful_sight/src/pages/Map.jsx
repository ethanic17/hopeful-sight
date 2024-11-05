import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
const position = [51.505, -0.09]
export function MapPage() {
  return(
    <div>
      <MapContainer style={{height:"500px"}} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
