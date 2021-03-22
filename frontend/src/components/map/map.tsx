import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss';
import { SelectMapArea } from './components';
import { MapOption, TileOption } from './enums';

const Map: React.FC = () => (
  <div className={styles.mapWrapper}>
    <MapContainer
      className={styles.map}
      center={[MapOption.INITIAL_POSOTION_LAT, MapOption.INITIAL_POSOTION_LNG]}
      zoom={MapOption.ZOOM}>
      <TileLayer
        attribution={TileOption.ATTRIBUTION}
        url={TileOption.URL}
      />
      <SelectMapArea/>
    </MapContainer>
  </div>
);

export default Map;
