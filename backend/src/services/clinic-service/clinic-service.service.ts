import { clinicRepository } from '~/data/repositories';
import { IClinic } from '~/common/interfaces';

class ClinicService {
  public getAllClinics(): Promise<IClinic[]>{
    return clinicRepository.getAll()
  }

  public getClinicById(id:string):Promise<IClinic | null>{
    return clinicRepository.getById(id)
  }

  public createNewClinic(clinic: IClinic): Promise<IClinic>{
    return clinicRepository.createClinic(clinic)
  }

  public async updateClinic(id: string, data: IClinic): Promise<IClinic[]>{
    return clinicRepository.updateById(id, data)
  }
  public deleteClinic(id:string):Promise<boolean>{
    return clinicRepository.deleteById(id)
  }
}

export { ClinicService };
