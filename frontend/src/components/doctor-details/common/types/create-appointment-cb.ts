import { ICreateAppointment } from 'common/interfaces';

type CreateAppointmentCb = (data:Partial<ICreateAppointment>) => void;

export type { CreateAppointmentCb };
