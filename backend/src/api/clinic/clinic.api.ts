import { Router } from 'express';
import { ApiPath, HttpCode, ClinicsApiPath } from '~/common/enums';
import { clinicService } from '~/services/services';

const initClinicApi = (apiRouter: Router): Router => {
  const clinicRouter = Router();

  apiRouter.use(ApiPath.CLINICS, clinicRouter);

  clinicRouter.get(ClinicsApiPath.ROOT, async (_req, res) => {
    try {
      const clinics = await clinicService.getAllClinics()
      res.status(HttpCode.OK).json(clinics);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });
  return clinicRouter;
};

export { initClinicApi };
