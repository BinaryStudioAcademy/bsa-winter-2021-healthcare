import { AppointmentModel } from '../models';
import { ICreateAppointment, IAppointment } from '~/common/interfaces';

class AppointmentRepository {

  public createAppointment(appointment: ICreateAppointment): Promise<IAppointment> {
    return AppointmentModel.create(appointment);
  }
}

export { AppointmentRepository };
