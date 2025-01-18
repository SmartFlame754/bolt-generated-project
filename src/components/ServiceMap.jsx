import { MapContainer, TileLayer, Marker } from 'react-leaflet';

    function ServiceMap() {
      const position = [45.5017, -73.5673]; // Montreal coordinates

      return (
        <div className="service-map">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
          </MapContainer>
        </div>
      );
    }

    export default ServiceMap;
