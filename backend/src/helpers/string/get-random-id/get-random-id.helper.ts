import { nanoid } from 'nanoid';
import { DEFAULT_ID_LENGTH } from './common/constants';

const getRandomId = (size = DEFAULT_ID_LENGTH): string => nanoid(size);

export { getRandomId };
