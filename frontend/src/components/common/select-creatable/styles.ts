import { StylesConfig } from 'react-select';
import { IOption } from 'common/interfaces';

const customStyles: StylesConfig<IOption<string>, false> = {
  control: (provided, { isFocused, selectProps: { color } }) => ({
    ...provided,
    backgroundColor: isFocused ? '#fff' : color,
  }),
};

export { customStyles };
