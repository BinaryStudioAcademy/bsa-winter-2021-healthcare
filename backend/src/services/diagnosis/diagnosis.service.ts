import { diagnosis as diagnosisRepository } from '~/data/repositories';
import { IDiagnosis } from '~/common/interfaces';

class Diagnosis {
  public create(diagnosis: IDiagnosis): Promise<IDiagnosis> {
    return diagnosisRepository.create(diagnosis);
  }

  public getAllByUserId(userId: string): Promise<IDiagnosis[]> {
    return diagnosisRepository.getAllByUserId(userId);
  }

  public async update(id: string, data: IDiagnosis): Promise<IDiagnosis> {
    return diagnosisRepository.updateById(id, data);
  }
}

export { Diagnosis };
