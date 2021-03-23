import { DiagnosisKey } from 'common/enums';
import { IDiagnosis } from 'common/interfaces';

const DEFAULT_DIAGNOSIS_VALUE: IDiagnosis = {
  [DiagnosisKey.ID]: '',
  [DiagnosisKey.DIAGNOSIS]: '',
  [DiagnosisKey.DESCRIPTION]: '',
  [DiagnosisKey.USER_ID]: '',
  [DiagnosisKey.CREATED_AT]: '',
  [DiagnosisKey.UPDATED_AT]: '',
};

export { DEFAULT_DIAGNOSIS_VALUE };
