import * as yup from 'yup';
import { ClinicKey, addDoctorToClinicValidationMessage } from '~/common/enums';

const addDoctorToClinic = yup.object().shape({
  [ClinicKey.ID]: yup.string(),
  [ClinicKey.NAME]: yup
    .string()
    .required(addDoctorToClinicValidationMessage.NAME_REQUIRED),
  [ClinicKey.ADDRESS]: yup.string(),
  [ClinicKey.CLINIC_TYPE]: yup.string(),
});

export { addDoctorToClinic };
