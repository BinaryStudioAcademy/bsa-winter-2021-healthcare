import { DiagnosisKey } from 'common/enums';
import { IDiagnosisPayload } from 'common/interfaces';

const DEFAULT_DIAGNOSIS_VALUE: IDiagnosisPayload = {
  [DiagnosisKey.DIAGNOSIS]: '',
  [DiagnosisKey.DESCRIPTION]: '',
  [DiagnosisKey.USER_ID]: '',
};

export { DEFAULT_DIAGNOSIS_VALUE };
