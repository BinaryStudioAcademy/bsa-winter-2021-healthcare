import { diagnosis as diagnosisRepository } from '~/data/repositories';
import { IDiagnosis } from '~/common/interfaces';

class Diagnosis {
  public create(diagnosis: IDiagnosis): Promise<IDiagnosis> {
    return diagnosisRepository.create(diagnosis);
  }

  public getAllByUserId(userId: string): Promise<IDiagnosis[]> {
    return diagnosisRepository.getAllByUserId(userId);
  }
}

export { Diagnosis };
