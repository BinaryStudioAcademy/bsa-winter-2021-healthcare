import { DocumentStatus } from 'common/enums';
import { DocumentFormKey } from '../enums';

type DocumentFormData = {
  [DocumentFormKey.STATUS]: DocumentStatus,
};

export type { DocumentFormData };
