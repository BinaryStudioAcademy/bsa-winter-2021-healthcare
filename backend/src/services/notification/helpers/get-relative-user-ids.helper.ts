import { IGeolocation } from '~/common/interfaces';

const getRelativeUserIds = (relativeGeolocations: IGeolocation[]): string[] => {
  return relativeGeolocations.map((userCoords: IGeolocation) => userCoords.userId);
};

export { getRelativeUserIds };
