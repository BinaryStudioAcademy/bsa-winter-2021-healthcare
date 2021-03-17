import { IOption } from 'common/interfaces';

const getDefaultOption = <T>(value: T): IOption<T> => ({
  value,
  label: value,
});

export { getDefaultOption };
