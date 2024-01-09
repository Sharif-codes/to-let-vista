import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Marker, Popup, useMapEvents } from "react-leaflet";


const FindButtonAndMarker = ({ readOnly, location, onChange }) => {
    const [position, setPosition] = useState(location);
    const [callOnChange, setCallOnChange] = useState(true); // New state

    const map = useMapEvents({
      click(e) {
        !readOnly && setPosition(e.latlng);
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 13);
      },
      locationerror(e) {
        toast.error(e.message);
      },
    });

    useEffect(() => {
      if (readOnly) {
        map.setView(position, 13);
        return;
      }

      if (callOnChange && position) {
        onChange(position);
        // setCallOnChange(false); // Set the flag to prevent further calls
      }
    }, [map, onChange, position, readOnly, callOnChange]);

    return (
      <>
        {!readOnly && (
          <button
            type="button"
            className="find_location"
            onClick={() => {
              map.locate();
              // setCallOnChange(true); // Reset the flag when locating
            }}
          >
            Find My Location
          </button>
        )}
        {position && (
          <Marker
            eventHandlers={{
              dragend: (e) => {
                setPosition(e.target.getLatLng());
                // setCallOnChange(true); // Reset the flag when dragging
              },
            }}
            position={position}
            draggable={!readOnly}
          >
            <Popup>Property Location</Popup>
          </Marker>
        )}
      </>
    );
};

export default FindButtonAndMarker;