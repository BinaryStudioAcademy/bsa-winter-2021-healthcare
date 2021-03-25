import { DoctorModel } from '../models';
import { IDoctor, IDoctorRegisterPayload } from '~/common/interfaces';

class DoctorRepository {
  public createDoctor(doctor: IDoctorRegisterPayload): Promise<IDoctor> {
    return DoctorModel.create(doctor);
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

export { DoctorRepository };
