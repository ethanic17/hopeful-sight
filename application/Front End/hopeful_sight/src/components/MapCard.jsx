import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
const center = [39.8283, -98.5795]
const uswest = [37.7749, -122.4194]
const ussouthwest = [35.1983, -111.6513]
const position = [39.8283, -98.5795]
const usmidwest = [39.7684,-86.1581]
const ussoutheast = [29.9511,-90.0715]
const usnortheast = [40.7128,-74.0060]

export function MapCard(){
    return(
        <div className ="bg-white p-4 rounded-lg w-3/5 h-[530px] shadow-md mx-auto">
            
            <MapContainer style={{height:"500px"}} center={center} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={uswest}>
                    <Popup>
                        United States West Donation Count:
                    </Popup>
                </Marker>

                <Marker position={ussouthwest}>
                    <Popup>
                        United States Southwest Donation Count:
                    </Popup>
                </Marker>

                <Marker position={usmidwest}>
                    <Popup>
                        United States Midwest Donation Count:
                    </Popup>
                </Marker>
                <Marker position={ussoutheast}>
                    <Popup>
                        United States Southeast Donation Count:
                    </Popup>
                </Marker>
                <Marker position={usnortheast}>
                    <Popup>
                        United States Northeast Donation Count:
                    </Popup>
                </Marker>
        </MapContainer>
                
        </div>
    )
}