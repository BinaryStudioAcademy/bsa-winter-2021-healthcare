import * as yup from 'yup';
import { CityKey } from '~/common/enums';

const addCity = yup.object().shape({
  [CityKey.NAME]: yup.string().required('City name is required'),
});

export { addCity };
