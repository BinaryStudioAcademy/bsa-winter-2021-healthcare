import { DocumentStatus } from '~/common/enums';

interface IDocument {
  imagePath: string;
  DocumentStatus: DocumentStatus;
  createdAt: string;
  updatedAt: string;
}

export type { IDocument };
