import { Router } from 'express';
import { ApiPath, HttpCode, DocumentsApiPath } from '~/common/enums';
import { document as documentService } from '~/services/services';

const initDocumentApi = (apiRouter: Router): Router => {
  const documentRouter = Router();

  apiRouter.use(ApiPath.DOCUMENTS, documentRouter);

  documentRouter.post(DocumentsApiPath.ROOT, async (req, res, next) => {
    try {
      const newDocument = await documentService.createDocument(req.body);
      await documentService.addDocumentIdToDoctor(newDocument, req.user?.id as string);
      res.status(HttpCode.CREATED).json(newDocument);
    } catch(error) {
      next(error);
    }
  });

  documentRouter.put(DocumentsApiPath.$ID, async (req, res, next) => {
    try {
      const update = await documentService.updateDocument(req.params.id, req.body);
      res.status(HttpCode.OK).json(update);
    } catch(error) {
      next(error);
    }
  });

  return documentRouter;
};

export { initDocumentApi };
