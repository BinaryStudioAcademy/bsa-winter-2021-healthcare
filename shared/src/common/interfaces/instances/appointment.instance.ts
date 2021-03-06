import { AppointmentType } from '~/common/enums';

export interface IAppointment {
  date: Date;
  type: AppointmentType;
  cost: number;
  subject: string;
  createdAt: Date;
  updatedAt: Date;
}
