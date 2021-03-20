import { DiagnosisModel } from '../models';
import { IDiagnosis } from '~/common/interfaces';

class Diagnosis {
  public create(diagnosis: IDiagnosis): Promise<IDiagnosis> {
    return DiagnosisModel.create(diagnosis);
  }

  public getAllByUserId(userId: string): Promise<IDiagnosis[]> {
    return DiagnosisModel.findAll({ where: { userId } });
  }

  public async updateById(id: string, data: IDiagnosis): Promise<IDiagnosis> {
    const [, [updatedDiagnosis]] = await DiagnosisModel.update(data, {
      where: { id },
      returning: true,
    });

    return updatedDiagnosis;
  }
}

export { Diagnosis };
