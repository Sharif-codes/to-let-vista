import './Map.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
} from 'react-leaflet';
import FindButtonAndMarker from './FindButtonAndMarker';

// const Map = ({ readOnly, location, onChange }) => {
  
//   function FindButtonAndMarker({ readOnly, location, onChange }) {
//     const [position, setPosition] = useState(location);
//     const map = useMapEvents({
//       click(e) {
//         !readOnly && setPosition(e.latlng);
//       },
//       locationfound(e) {
//         setPosition(e.latlng);
//         map.flyTo(e.latlng, 13);
//       },
//       locationerror(e) {
//         toast.error(e.message);
//       },
//     });

//     useEffect(() => {
//       if (readOnly) {
//         map.setView(position, 13);
//         return;
//       }
//       if (position) onChange(position);
//     }, [map, onChange, position, readOnly]);
//     return (
//         <>
//           {!readOnly && (
//             <button
//               type="button"
//               className="find_location"
//               onClick={() => map.locate()}
//             >
//               Find My Location
//             </button>
//           )}
//           {position && (
//             <Marker
//               eventHandlers={{
//                 dragend: (e) => {
//                   setPosition(e.target.getLatLng());
//                 },
//               }}
//               position={position}
//               draggable={!readOnly}
//             >
//               <Popup>Property Location</Popup>
//             </Marker>
//           )}
//         </>
//       );
//     }
    

//   return (
//     <div className="containerBox">
//       <MapContainer
//         className="map"
//         center={[0,0]}
//         zoom={1}
//         dragging={!readOnly}
//         touchZoom={!readOnly}
//         doubleClickZoom={!readOnly}
//         scrollWheelZoom={!readOnly}
//         boxZoom={!readOnly}
//         keyboard={!readOnly}
//         attributionControl={false}
//       >
//        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
//        {/* <Marker position={gulshanCoordinates}>
//           <Popup>
//             Gulshan, Dhaka, Bangladesh
//           </Popup>
//         </Marker> */}
//         <FindButtonAndMarker
//         readOnly={readOnly}
//         location={location}
//         onChange={onChange}
//         >

//         </FindButtonAndMarker>
//       </MapContainer>
//     </div>
//   );
// };
// export default Map;

// ... other imports

const Map = ({ readOnly, location, onChange }) => {
  

  return (
    <div className="containerBox">
      <MapContainer
        className="map"
        center={[0, 0]}
        zoom={1}
        dragging={!readOnly}
        touchZoom={!readOnly}
        doubleClickZoom={!readOnly}
        scrollWheelZoom={!readOnly}
        boxZoom={!readOnly}
        keyboard={!readOnly}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <FindButtonAndMarker
          readOnly={readOnly}
          location={location}
          onChange={onChange}
        />
      </MapContainer>
    </div>
  );
};
export default Map;
