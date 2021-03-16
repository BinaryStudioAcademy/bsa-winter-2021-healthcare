import { ClinicModel } from '../models';
import { IClinic } from '~/common/interfaces';


class ClinicRepository {

  public getAll(): Promise<IClinic[]> {
    return ClinicModel.findAll();
  }

  public getById(id: string): Promise<IClinic | null> {
    return ClinicModel.findByPk(id, {
      include: {
        model: ClinicModel,
      }
    });
  }

  public createClinic(clinic: IClinic): Promise<IClinic> {
    return ClinicModel.create(clinic);
  }

  public async updateById(id: string, data: IClinic): Promise<IClinic[]> {
    const result = await ClinicModel.update(data, {
      where: { id },
      returning: true,
    });

    return result[1];
  }

  public async deleteById(id: string): Promise<boolean> {
    const deletedRows = await ClinicModel.destroy({
      where: { id }
    });

    return Boolean(deletedRows)
  }
}

export { ClinicRepository };
