import { Router } from 'express';
import { ApiPath, DiagnosesApiPath, HttpCode } from '~/common/enums';
import { diagnosis as diagnosisService } from '~/services/services';

const initDiagnosisApi = (apiRouter: Router): Router => {
  const diagnosisRouter = Router();

  apiRouter.use(ApiPath.DIAGNOSES, diagnosisRouter);

  diagnosisRouter.get(DiagnosesApiPath.ROOT, async (req, res, next) => {
    try {
      const diagnoses = await diagnosisService.getAllByUserId(
        req.user?.id as string,
      );
      res.status(HttpCode.OK).json(diagnoses);
    } catch (error) {
      next(error);
    }
  });

  diagnosisRouter.post(DiagnosesApiPath.ROOT, async (req, res, next) => {
    try {
      const diagnosis = await diagnosisService.create(req.body);
      res.status(HttpCode.CREATED).json(diagnosis);
    } catch (error) {
      next(error);
    }
  });

  return diagnosisRouter;
};

export { initDiagnosisApi };
