import { DoctorModel } from '../models';
import { IDoctor, IDoctorRegisterPayload } from '~/common/interfaces';

class DoctorRepository {
  public createDoctor(doctor: IDoctorRegisterPayload): Promise<IDoctor> {
    return DoctorModel.create(doctor);
  }
  public async addDoctorToClinic(doctorId:string,clinicId:string): Promise<boolean>{
      const [ , [doctor]] = await DoctorModel.update({clinicId}, {
        where: { userId:doctorId },
        returning: true,
      });
      return Boolean(doctor);
  }
}

export { DoctorRepository };
