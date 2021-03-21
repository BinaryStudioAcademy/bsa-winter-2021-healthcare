import dayjs from 'dayjs';
import { AppointmentHours } from 'common/enums';

const setTimeToDate = (date:Date, time:AppointmentHours):string => {
  const [hours, minutes] = time.split(':');
  return dayjs(date).add(Number(hours), 'h').add(Number(minutes), 'm').toISOString();
};

export { setTimeToDate };
