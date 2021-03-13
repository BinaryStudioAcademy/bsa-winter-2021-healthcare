import { IOption } from 'common/interfaces';
import { CustomRecord, GetOptionMapCb } from 'common/types';
import { getOptions, getDefaultOption } from 'helpers';

const createOptions = <T>(options: T[] | CustomRecord<T>, cb: GetOptionMapCb<T> = getDefaultOption): IOption<T>[] => {
  const isArray = Array.isArray(options);

  return getOptions(isArray ? (options as T[]) : Object.values<T>(options), cb);
};

export { createOptions };
