import { CreateAppointmentKey, AppointmentType, AppointmentTime } from '~/common/enums';

interface ICreateAppointment {
  [CreateAppointmentKey.TIME]: AppointmentTime;
  [CreateAppointmentKey.DATE]: Date;
  [CreateAppointmentKey.TYPE]: AppointmentType;
  [CreateAppointmentKey.COST]: number;
  [CreateAppointmentKey.SUBJECT]: string;
  [CreateAppointmentKey.DOCTOR_ID]:string;
  [CreateAppointmentKey.USER_ID]:string;
}

export type { ICreateAppointment };
