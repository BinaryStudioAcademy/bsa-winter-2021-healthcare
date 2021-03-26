import { doctor as doctorRepository } from '~/data/repositories';
import { IDoctorRegisterPayload, IDoctor } from '~/common/interfaces';

class Doctor {
  public createDoctor(doctorPayload: IDoctorRegisterPayload): Promise<IDoctor> {
    return doctorRepository.createDoctor(doctorPayload);
  }

  public addDoctorToClinic(doctorId:string,clinicId:string): Promise<IDoctor>{
    return doctorRepository.addDoctorToClinic(doctorId,clinicId);
  }

  public getByUserId(userId: string): Promise<IDoctor | null> {
    return doctorRepository.getByUserId(userId);
  }

  public async updateByUserId(userId: string, data: IDoctor): Promise<IDoctor> {
    return doctorRepository.updateByUserId(userId, data);
  }
}

export { Doctor };
