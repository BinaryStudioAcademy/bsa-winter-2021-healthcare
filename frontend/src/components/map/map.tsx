import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss';
import { MapOptions, TileOptions } from 'common/enums';
import { SelectMapArea } from './components';

const Map: React.FC = () => (
  <div className={styles.mapWrapper}>
    <MapContainer
      className={styles.map}
      center={[MapOptions.INITIAL_POSOTION_LAT, MapOptions.INITIAL_POSOTION_LNG]}
      zoom={MapOptions.ZOOM}>
      <TileLayer
        attribution={TileOptions.ATTRIBUTION}
        url={TileOptions.URL}
      />
      <SelectMapArea/>
    </MapContainer>
  </div>
);

export default Map;
