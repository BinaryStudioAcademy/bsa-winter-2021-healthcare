import { DiagnosisKey } from '~/common/enums';

interface IDiagnosis {
  [DiagnosisKey.ID]: string;
  [DiagnosisKey.DIAGNOSIS]: string;
  [DiagnosisKey.DESCRIPTION]: string;
  [DiagnosisKey.USER_ID]: string;
  [DiagnosisKey.CREATED_AT]: string;
  [DiagnosisKey.UPDATED_AT]: string;
}

export type { IDiagnosis };
