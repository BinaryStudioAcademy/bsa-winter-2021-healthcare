import { ClinicType } from 'common/enums';

const clinicTypesToReadable = {
  [ClinicType.STATE]: 'State',
  [ClinicType.PRIVATE]: 'Private',
};

export { clinicTypesToReadable };
