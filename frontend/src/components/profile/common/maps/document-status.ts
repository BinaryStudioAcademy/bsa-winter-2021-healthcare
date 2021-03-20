import { DocumentStatus } from 'common/enums';

const documentStatusToReadable  = {
  [DocumentStatus.VERIFIED]: 'Verified',
  [DocumentStatus.IN_REVIEW]: 'In review',
};

export { documentStatusToReadable };
