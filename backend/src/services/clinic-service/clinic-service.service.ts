import { clinic as clinicRepository } from '~/data/repositories';
import { IClinic } from '~/common/interfaces';

class Clinic {
  public getAllClinics(): Promise<IClinic[]> {
    return clinicRepository.getAll();
  }

  public createNewClinic(clinic: IClinic): Promise<IClinic> {
    return clinicRepository.createClinic(clinic);
  }
}

export { Clinic };
