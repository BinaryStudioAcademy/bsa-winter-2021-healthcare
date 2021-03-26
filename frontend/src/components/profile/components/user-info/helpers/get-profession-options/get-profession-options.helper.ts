import { ProfessionKey } from 'common/enums';
import { IOption, IProfession } from 'common/interfaces';

const getProfessionOptions = (professions: IProfession[]): IOption<string>[] => {
  return professions.map((profession: IProfession) => ({
    label: profession[ProfessionKey.NAME],
    value: profession[ProfessionKey.ID],
  }));
};

export { getProfessionOptions };
