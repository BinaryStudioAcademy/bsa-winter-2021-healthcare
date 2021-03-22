import { GeolocationKey, MapKey } from '~/common/enums';
import { ICoordsSet, IGeolocation } from '~/common/interfaces';

const checkIsRelativeGeolocations = async (geolocations: IGeolocation[], selectedArea: ICoordsSet): Promise<IGeolocation[]> => {
  const relativeGeolocations = geolocations.filter((userCoords: IGeolocation) => {
    const isUserInLatArea =
      userCoords[GeolocationKey.LAT] >= selectedArea[MapKey.MIN_LAT] &&
      userCoords[GeolocationKey.LAT] <= selectedArea[MapKey.MAX_LAT];
    const isUserInLngArea =
      userCoords[GeolocationKey.LNG] >= selectedArea[MapKey.MIN_LNG] &&
      userCoords[GeolocationKey.LNG] <= selectedArea[MapKey.MAX_LNG];

    return isUserInLatArea && isUserInLngArea;
  });

  return relativeGeolocations;
};

export { checkIsRelativeGeolocations };
