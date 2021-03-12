import { DocumentStatus } from '~/common/enums';

interface IDocument {
  id: string;
  imagePath: string;
  DocumentStatus: DocumentStatus;
  createdAt: string;
  updatedAt: string;
}

export type { IDocument };
