import * as dayjs from 'dayjs';

const dateToSring = (date: Date):string => {
  return dayjs(date).toISOString();
};

export { dateToSring };
