import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { MapCard } from "../components/MapCard"

export function MapPage() {
  return(
    <div className ="bg-blue-50 p-4">
      <div className="text-center text-4xl font-bold">
        <br/>
        Donations by Region
      </div>
      <br/>
      <MapCard/>
      <br/>
    </div>
  )
}
