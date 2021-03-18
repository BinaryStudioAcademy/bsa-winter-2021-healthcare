import { IOption } from 'common/interfaces';
import { MapCb } from 'healthcare-shared/common/types';

type GetOptionMapCb<T> = MapCb<T, IOption<T>>;

export type { GetOptionMapCb };
