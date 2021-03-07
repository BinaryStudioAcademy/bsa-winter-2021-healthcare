import { DocumentStatus } from '~/common/enums';

interface IDocument {
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
  DocumentStatus: DocumentStatus;
}

export type { IDocument };
