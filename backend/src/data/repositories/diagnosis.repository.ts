import { DiagnosisModel } from '../models';
import { IDiagnosis } from '~/common/interfaces';
import { SortType } from '~/common/enums';

class Diagnosis {
  public create(diagnosis: IDiagnosis): Promise<IDiagnosis> {
    return DiagnosisModel.create(diagnosis);
  }

  public getAllByUserId(userId: string): Promise<IDiagnosis[]> {
    return DiagnosisModel.findAll({
      where: { userId },
      order: [['createdAt', SortType.DESC]],
    });
  }
}

export { Diagnosis };
