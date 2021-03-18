import { clinicRepository } from '~/data/repositories';
import { IClinic } from '~/common/interfaces';

class ClinicService {
  public getAllClinics(): Promise<IClinic[]> {
    return clinicRepository.getAll();
  }

  public createNewClinic(clinic: IClinic): Promise<IClinic> {
    return clinicRepository.createClinic(clinic);
  }
}

export { ClinicService };
