import * as React from 'react';
import { useMap } from 'react-leaflet';
import L, { LatLng } from "leaflet";
import "leaflet-lasso";
import { FINISHED_EVENT, ENABLED_EVENT } from 'leaflet-lasso';
import { useEffect } from 'react';

const SelectMapArea: React.FC = () => {
  const map = useMap();
  const control = L.control.lasso({ position: 'topright' });

  let minLat = 90;
  let minLng = 180;
  let maxLat = -90;
  let maxLng = -180;

  let selectedAreaPolygon = L.polygon([]);

  useEffect(addLassoControl);

  map.on(ENABLED_EVENT, clearSelectionData);
  map.on(FINISHED_EVENT, handleSelection);

  function clearSelectionData(): void {
    minLat = 90;
    minLng = 180;
    maxLat = -90;
    maxLng = -180;
    selectedAreaPolygon.remove();
  }

  function addLassoControl(): void {
    control.addTo(map);
  }

  function handleSelection(event: any):void  {
    event.latLngs.forEach((coords: LatLng) => {
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
  }
  
  return null;
}

export default SelectMapArea;
