import { ClinicModel } from '../models';
import { IClinic } from '~/common/interfaces';

class ClinicRepository {

  public getAll(): Promise<IClinic[]> {
    return ClinicModel.findAll();
  }

  public createClinic(clinic: IClinic): Promise<IClinic> {
    return ClinicModel.create(clinic);
  }
}

export { ClinicRepository };
