import { DocumentStatus, DocumentKey } from '~/common/enums';

interface IDocument {
  [DocumentKey.ID]:string;
  [DocumentKey.IMAGE_PATH]: string;
  [DocumentKey.DOCUMENT_STATUS]: DocumentStatus;
  [DocumentKey.CREATED_AT]: string;
  [DocumentKey.UPDATED_AT]: string;
}

export type { IDocument };
