import { DoctorModel } from '../models';
import { IDoctor, IDoctorRegisterPayload } from '~/common/interfaces';

class DoctorRepository {
  public createDoctor(doctor: IDoctorRegisterPayload): Promise<IDoctor> {
    return DoctorModel.create(doctor);
  }
}

export { DoctorRepository };
