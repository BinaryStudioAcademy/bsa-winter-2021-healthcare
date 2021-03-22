import { AppointmentModel } from '../models';
import { ICreateAppointment, IAppointment } from '~/common/interfaces';

class Appointment {

  public createAppointment(appointment: ICreateAppointment): Promise<IAppointment> {
    return AppointmentModel.create(appointment);
  }
}

export { Appointment };
