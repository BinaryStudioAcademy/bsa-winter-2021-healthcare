import { AppointmentKey, CreateAppointmentKey } from '~/common/enums';

interface IAppointmentInfo {
  [AppointmentKey.ID]: string;
  [AppointmentKey.SUBJECT]: string;
  [AppointmentKey.COST]: number;
  [AppointmentKey.TYPE]: string;
  [AppointmentKey.DATE]: string;
  [CreateAppointmentKey.USER_ID]: string;
}

export type { IAppointmentInfo };
