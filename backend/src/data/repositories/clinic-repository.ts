import { ClinicModel } from '../models';
import { IClinic } from '~/common/interfaces';

class ClinicRepository {
  public getAll(): Promise<IClinic[]> {
    return ClinicModel.findAll();
  }
}

export { ClinicRepository };
