// Map.jsx
import './Map.css';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
  // ... other imports
} from 'react-leaflet';

const ShowMap = ({ readOnly, location, onChange, room }) => {
    const lng= room?.lng
    console.log(lng);
    const Coordinates = [room?.propertyDetails?.lat,room?.propertyDetails?.lng];
  return (
    <div className="containerBox">
      <MapContainer
        className="map"
        center={[0,0]}
        zoom={1}
        dragging={!readOnly}
        touchZoom={!readOnly}
        doubleClickZoom={!readOnly}
        scrollWheelZoom={!readOnly}
        boxZoom={!readOnly}
        keyboard={!readOnly}
        attributionControl={false}
      >
       <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
       <Marker position={Coordinates}>
          <Popup>
            Gulshan, Dhaka, Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ShowMap;
