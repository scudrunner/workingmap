import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { Icon } from "leaflet";

const position = [51.505, -0.09];

export default function Maps(props) {
  return (
    <MapContainer
      center={[37.392867130905096, 24.880986621795806]}
      zoom={10}
      maxZoom={18}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: "mrk.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41]
          })
        }
      ></Marker>
    </MapContainer>
  );
}
