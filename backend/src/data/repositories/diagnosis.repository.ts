import { DiagnosisModel } from '../models';
import { IDiagnosis } from '~/common/interfaces';
import { SortType } from '~/common/enums';
import { DiagnosisKey } from '~/common/enums';

class Diagnosis {
  public create(diagnosis: IDiagnosis): Promise<IDiagnosis> {
    return DiagnosisModel.create(diagnosis);
  }

  public getAllByUserId(userId: string): Promise<IDiagnosis[]> {
    return DiagnosisModel.findAll({
      where: { userId },
      order: [[DiagnosisKey.CREATED_AT, SortType.DESC]],
    });
  }
}

export { Diagnosis };
