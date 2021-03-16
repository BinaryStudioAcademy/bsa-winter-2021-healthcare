import { clinicRepository } from '~/data/repositories';
import { IClinic } from '~/common/interfaces';

class ClinicService {
  public getAllClinics(): Promise<IClinic[]> {
    return clinicRepository.getAll()
  }
}

export { ClinicService };
