import * as yup from 'yup';
import {
  ClinicKey,
  ClinicType,
  ClinicValidationMessage,
} from '~/common/enums';

const addClinic = yup.object().shape({
  [ClinicKey.NAME]: yup
    .string()
    .required(ClinicValidationMessage.NAME_REQUIRED),
  [ClinicKey.ADDRESS]: yup
    .string()
    .required(ClinicValidationMessage.ADDRESS_REQUIRED),
  [ClinicKey.CLINIC_TYPE]: yup
    .mixed<ClinicType>()
    .oneOf(Object.values(ClinicType))
    .required(),
  [ClinicKey.CITY_ID]: yup
    .string(),
  [ClinicKey.IMAGE_PATH]: yup
    .string().nullable(),
});

export { addClinic };
