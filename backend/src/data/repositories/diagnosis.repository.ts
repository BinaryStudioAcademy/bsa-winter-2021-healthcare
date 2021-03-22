import { DiagnosisModel } from '../models';
import { IDiagnosis } from '~/common/interfaces';

class Diagnosis {
  public create(diagnosis: IDiagnosis): Promise<IDiagnosis> {
    return DiagnosisModel.create(diagnosis);
  }

  public getAllByUserId(userId: string): Promise<IDiagnosis[]> {
    return DiagnosisModel.findAll({
      where: { userId },
      order: [
        ['createdAt', 'DESC'],
      ]
    });
  }
}

export { Diagnosis };
