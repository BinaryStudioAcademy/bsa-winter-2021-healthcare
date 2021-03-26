import { ProfessionKey } from 'common/enums';
import { IProfession } from 'common/interfaces';

const DEFAULT_PROFESSION_VALUE: Partial<IProfession> = {
  [ProfessionKey.ID]: '',
  [ProfessionKey.NAME]: '',
};

export { DEFAULT_PROFESSION_VALUE };
