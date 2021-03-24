import * as dayjs from 'dayjs';
import { DateFormat } from '~/common/enums';

const getFormattedDate = (date:string | Date, dateFormat:DateFormat):string => {
  return dayjs(date).format(dateFormat);
};

export { getFormattedDate };
