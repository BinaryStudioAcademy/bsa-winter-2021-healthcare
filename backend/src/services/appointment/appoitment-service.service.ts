import { appointment as appointmentRepository } from '~/data/repositories';
import { IAppointment, ICreateAppointment } from '~/common/interfaces';

class Appointment {
  public async create(data: ICreateAppointment): Promise<IAppointment> {
    return appointmentRepository.createAppointment(data);
  }
}

export { Appointment };
