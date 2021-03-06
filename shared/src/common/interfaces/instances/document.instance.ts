import { DocumentStatus } from '~/common/enums';

export interface IDocument {
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
  DocumentStatus: DocumentStatus;
}
