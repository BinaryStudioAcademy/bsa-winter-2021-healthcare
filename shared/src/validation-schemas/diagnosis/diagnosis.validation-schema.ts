import * as yup from 'yup';
import { DiagnosisKey, DiagnosisValidationMessage } from '~/common/enums';

const addDiagnosis = yup.object().shape({
  [DiagnosisKey.DIAGNOSIS]: yup
    .string()
    .required(DiagnosisValidationMessage.DIAGNOSIS_REQUIRED),
  [DiagnosisKey.DESCRIPTION]: yup
    .string()
    .required(DiagnosisValidationMessage.DESCRIPTION_REQUIRED),
});

export { addDiagnosis };
