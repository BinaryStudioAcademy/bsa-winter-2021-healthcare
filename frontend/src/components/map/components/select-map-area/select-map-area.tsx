import * as React from 'react';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L, { LatLng, LeafletEvent } from 'leaflet';
import 'leaflet-lasso';
import { FINISHED_EVENT, ENABLED_EVENT, LassoHandlerFinishedEvent } from 'leaflet-lasso';
import { MapCoordsDefault } from 'common/enums';

const SelectMapArea: React.FC = () => {
  const map = useMap();
  const control = L.control.lasso({ position: 'topright' });
  let minLat = MapCoordsDefault.MIN_LAT;
  let minLng = MapCoordsDefault.MIN_LNG;
  let maxLat = MapCoordsDefault.MAX_LAT;
  let maxLng = MapCoordsDefault.MAX_LNG;
  let selectedAreaPolygon = L.polygon([]);

  const handleLassoAddition = (): void => {
    control.addTo(map);
  };

  const handleLassoActivacion = (): void => {
    minLat = MapCoordsDefault.MIN_LAT;
    minLng = MapCoordsDefault.MIN_LNG;
    maxLat = MapCoordsDefault.MAX_LAT;
    maxLng = MapCoordsDefault.MAX_LNG;
    selectedAreaPolygon.remove();
  };

  const handleAreaSelection = (evt: LeafletEvent): void => {
    const lassoEvent = evt as LassoHandlerFinishedEvent;
    lassoEvent.latLngs.forEach((coords: LatLng) => {
      if (coords.lat < minLat) minLat = coords.lat;
      if (coords.lat > maxLat) maxLat = coords.lat;
      if (coords.lng < minLng) minLng = coords.lng;
      if (coords.lng > maxLng) maxLng = coords.lng;
    });

    selectedAreaPolygon = L.polygon([
      [maxLat, minLng],
      [minLat, minLng],
      [minLat, maxLng],
      [maxLat, maxLng],
    ]);

    selectedAreaPolygon.addTo(map);
  };

  useEffect(handleLassoAddition);
  map.on(ENABLED_EVENT, handleLassoActivacion);
  map.on(FINISHED_EVENT, handleAreaSelection);

  return null;
};

export default SelectMapArea;
