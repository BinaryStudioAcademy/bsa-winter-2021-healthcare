import { AppointmentKey } from '~/common/enums';
import { IUser } from '~/common/interfaces';

interface IAppointmentWithUser {
  [AppointmentKey.ID]: string;
  [AppointmentKey.TYPE]: string;
  [AppointmentKey.DATE]: string;
  [AppointmentKey.USER]: IUser;
}

export type { IAppointmentWithUser };
