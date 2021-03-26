import { ProfessionModel } from '../models';
import { IProfession } from '~/common/interfaces';

class ProfessionRepository {
  public getAll(): Promise<IProfession[]> {
    return ProfessionModel.findAll();
  }

  public getById(id: string): Promise<IProfession | null> {
    return ProfessionModel.findOne({ where: { id } });
  }
}

export { ProfessionRepository };
