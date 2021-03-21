import { CreateAppointmentKey, AppointmentType } from '~/common/enums';

interface ICreateAppointment {
  [CreateAppointmentKey.DATE]: string;
  [CreateAppointmentKey.TYPE]: AppointmentType;
  [CreateAppointmentKey.COST]: number;
  [CreateAppointmentKey.SUBJECT]: string;
  [CreateAppointmentKey.DOCTOR_ID]:string;
  [CreateAppointmentKey.USER_ID]?:string;
}

export type { ICreateAppointment };
