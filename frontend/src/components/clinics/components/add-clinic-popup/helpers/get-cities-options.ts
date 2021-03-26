import { IOption, ICity } from 'common/interfaces';

const getCitiesOptions = (cities: ICity[]): IOption[] => {
  return cities.map((city) => ({
    label: city.name,
    value: city.id,
  }));
};

export { getCitiesOptions };
