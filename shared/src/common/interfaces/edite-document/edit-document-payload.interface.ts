import { EditDocumentPayloadKey, DocumentStatus } from '~/common/enums';

type IEditDocumentPayload = {
  [EditDocumentPayloadKey.ID]?: string;
  [EditDocumentPayloadKey.IMAGE_PATH]: string;
  [EditDocumentPayloadKey.DOCUMENT_STATUS]: DocumentStatus;
  [EditDocumentPayloadKey.CREATED_AT]?: string;
  [EditDocumentPayloadKey.UPDATED_AT]?: string;
};

export type { IEditDocumentPayload };
