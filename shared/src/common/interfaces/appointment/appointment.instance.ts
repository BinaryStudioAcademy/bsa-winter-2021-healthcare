import { AppointmentType } from '~/common/enums';

interface IAppointment {
  date: Date;
  type: AppointmentType;
  cost: number;
  subject: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { IAppointment };
