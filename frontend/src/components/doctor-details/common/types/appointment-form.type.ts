import { AppointmentFormKey } from '../enums';
import { AppointmentHours } from 'common/enums';

type AppointmentFormPaiload = {
  [AppointmentFormKey.DATE]: Date;
  [AppointmentFormKey.TIME]: AppointmentHours;
};

export type { AppointmentFormPaiload };
