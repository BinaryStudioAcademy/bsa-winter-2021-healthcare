import { DiagnosisKey } from '~/common/enums';

interface IDiagnosisPayload {
  [DiagnosisKey.DIAGNOSIS]: string;
  [DiagnosisKey.DESCRIPTION]: string;
  [DiagnosisKey.USER_ID]: string;
}

export type { IDiagnosisPayload };
