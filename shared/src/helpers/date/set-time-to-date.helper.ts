import * as dayjs from 'dayjs';
import { AppointmentTime } from '~/common/enums';

const setTimeToDate = (date:Date, time:AppointmentTime):string => {
  const [hours, minutes] = time.split(':');
  return dayjs(date).set('h', Number(hours)).set('m', Number(minutes)).toISOString();
};

export { setTimeToDate };
