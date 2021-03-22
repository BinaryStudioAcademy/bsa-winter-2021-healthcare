import { doctorRepository } from '~/data/repositories';
import { IDoctorRegisterPayload, IDoctor } from '~/common/interfaces';

class Doctor {
  public createDoctor(doctorPayload: IDoctorRegisterPayload): Promise<IDoctor> {
    return doctorRepository.createDoctor(doctorPayload);
  }
}

export { Doctor };
