import { Router } from 'express';
import { ApiPath, HttpCode, DocumentsApiPath } from '~/common/enums';
import { document } from '~/services/services';

const initDocumentApi = (apiRouter: Router): Router => {
  const documentRouter = Router();

  apiRouter.use(ApiPath.DOCUMENTS, documentRouter);

  documentRouter.put(DocumentsApiPath.$ID, async (req, res, next) => {
    try {
      const update = await document.updateDocument(req.params.id, req.body);
      res.status(HttpCode.OK).json(update);
    } catch(error) {
      next(error);
    }
  });

  return documentRouter;
};

export { initDocumentApi };
