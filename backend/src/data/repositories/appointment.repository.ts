import { AppointmentModel, UserModel } from '~/data/models';
import { ICreateAppointment, IAppointment } from '~/common/interfaces';
import { ModelAlias } from '~/common/enums';

class Appointment {
  public getAllById(doctorId: string): Promise<IAppointment[]> {
    return AppointmentModel.findAll({
      where: { doctorId },
      include: [
        {
          model: UserModel,
          as: ModelAlias.USER,
        },
      ],
    });
  }

  public createAppointment(
    appointment: ICreateAppointment,
  ): Promise<IAppointment> {
    return AppointmentModel.create(appointment);
  }
}

export { Appointment };
