import { InputColor } from 'common/enums';

const inputColorToCssColorValue = {
  [InputColor.GRAY_LIGHT]: 'var(--color-gray-light)',
  [InputColor.WHITE]: 'white',
};

export { inputColorToCssColorValue };
