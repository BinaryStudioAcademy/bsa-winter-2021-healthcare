import { doctorRepository } from '~/data/repositories';
import { IDoctorRegisterPayload, IDoctor } from '~/common/interfaces';

class Doctor {
  public createDoctor(doctorPayload: IDoctorRegisterPayload): Promise<IDoctor> {
    return doctorRepository.createDoctor(doctorPayload);
  }

  public addDoctorToClinic(doctorId:string,clinicId:string): Promise<boolean>{
    return doctorRepository.addDoctorToClinic(doctorId,clinicId);
  }
}

export { Doctor };
