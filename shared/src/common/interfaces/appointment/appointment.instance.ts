import { AppointmentType, AppointmentKey } from '~/common/enums';

interface IAppointment {
  [AppointmentKey.ID]:string;
  [AppointmentKey.DATE]: string;
  [AppointmentKey.TYPE]: AppointmentType;
  [AppointmentKey.COST]: number;
  [AppointmentKey.SUBJECT]: string;
  [AppointmentKey.CREATED_AT]: string;
  [AppointmentKey.UPDATED_AT]: string;
}

export type { IAppointment };
