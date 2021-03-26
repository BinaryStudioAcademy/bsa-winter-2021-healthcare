import { AppointmentModel } from '../models';
import { ICreateAppointment, IAppointment } from '~/common/interfaces';

class Appointment {
  public getAllById(doctorId: string): Promise<IAppointment[]> {
    return AppointmentModel.findAll({
      where: { doctorId },
    });
  }

  public createAppointment(
    appointment: ICreateAppointment,
  ): Promise<IAppointment> {
    return AppointmentModel.create(appointment);
  }
}

export { Appointment };
