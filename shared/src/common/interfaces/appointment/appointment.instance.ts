import { AppointmentType } from '~/common/enums';

interface IAppointment {
  id: string;
  date: string;
  type: AppointmentType;
  cost: number;
  subject: string;
  createdAt: string;
  updatedAt: string;
}

export type { IAppointment };
