import { profession as professionRepository } from '~/data/repositories';
import { IDoctor, IProfession } from '~/common/interfaces';
import { doctor as doctorService } from '../services';
import { DoctorKey } from '~/common/enums';

class Profession {
  public getAllProfessions(): Promise<IProfession[]> {
    return professionRepository.getAll();
  }

  public getById(id: string): Promise<IProfession | null> {
    return professionRepository.getById(id);
  }

  public async addProfessionIdToDoctor(professionId: string, userId: string): Promise<IDoctor> {
    const doctor: IDoctor | null = await doctorService.getByUserId(userId);
    const newDoctorData: IDoctor = {
      ...doctor as IDoctor,
      [DoctorKey.PROFESSION_ID]: professionId,
    };
    const updatedDoctor: IDoctor = await doctorService.updateByUserId(userId, newDoctorData);
    return updatedDoctor;
  }
}

export { Profession };
