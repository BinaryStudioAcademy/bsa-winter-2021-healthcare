import { AppointmentFormKey } from '../enums';
import { AppointmentTime } from 'common/enums';

type AppointmentFormPaiload = {
  [AppointmentFormKey.DATE]: Date;
  [AppointmentFormKey.TIME]: AppointmentTime;
};

export type { AppointmentFormPaiload };
