import { ProfessionKey } from '~/common/enums';

interface IProfession {
  [ProfessionKey.ID]: string;
  [ProfessionKey.NAME]: string;
  [ProfessionKey.CREATED_AT]: string;
  [ProfessionKey.UPDATED_AT]: string;
}

export type { IProfession };
