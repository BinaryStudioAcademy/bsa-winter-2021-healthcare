import { DoctorModel } from '../models';
import { IDoctor, IDoctorRegisterPayload } from '~/common/interfaces';

class Doctor {
  public createDoctor(doctor: IDoctorRegisterPayload): Promise<IDoctor> {
    return DoctorModel.create(doctor);
  }

  public async addDoctorToClinic(
    doctorId: string,
    clinicId: string,
  ): Promise<IDoctor> {
    const [, [doctor]] = await DoctorModel.update(
      { clinicId },
      {
        where: { userId: doctorId },
        returning: true,
      },
    );
    return doctor;
  }

  public getByUserId(userId: string): Promise<IDoctor | null> {
    return DoctorModel.findOne({ where: { userId } });
  }

  public async updateByUserId(userId: string, data: IDoctor): Promise<IDoctor> {
    const [, [updatedDoctorData]] = await DoctorModel.update(data, {
      where: { userId },
      returning: true,
    });

    return updatedDoctorData;
  }
}

export { Doctor };
