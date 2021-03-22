import { Router } from 'express';
import { ApiPath, UploadFileApiPath, HttpCode, UploadFileType } from '~/common/enums';
import { uploadFile as uploadFileService } from '~/services/services';
import multer from 'multer';

const initUploadFileApi = (apiRouter: Router): Router => {
  const storage = multer.memoryStorage();
  const upload = multer({
    storage,
  });
  const uploadFileRouter = Router();

  apiRouter.use(ApiPath.FILES, uploadFileRouter);

  uploadFileRouter.post(UploadFileApiPath.ROOT, upload.single(UploadFileType.IMAGE), async (req, res, next) => {
    try {
      const result = (await uploadFileService.uploadFile(req.file)).secure_url;
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  return uploadFileRouter;
};

export { initUploadFileApi };
