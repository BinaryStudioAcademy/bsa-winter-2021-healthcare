import { IOption } from 'common/interfaces';
import { GetOptionMapCb } from 'common/types';

const getOptions = <T>(values: T[], cb: GetOptionMapCb<T>): IOption<T>[] => values.map(cb);

export { getOptions };
