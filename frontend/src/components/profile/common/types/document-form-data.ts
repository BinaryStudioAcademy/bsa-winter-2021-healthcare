import { DocumentStatus, DocumentKey } from 'common/enums';

type DocumentFormData = {
  [DocumentKey.STATUS]: DocumentStatus,
};

export type { DocumentFormData };
