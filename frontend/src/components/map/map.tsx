import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet';
import "leaflet-lasso";
import styles from './map.module.scss';
import SelectMapArea from './select-map-area';

const Map: React.FC = () => (
  <div className={styles.mapWrapper}>
    <MapContainer className={styles.map} center={[50.4536, 30.5164]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SelectMapArea />
    </MapContainer>
  </div>
)

export default Map;
