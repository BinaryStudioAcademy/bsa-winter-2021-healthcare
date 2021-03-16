import { Router } from 'express';
import { ApiPath, ClinicsApiPath, HttpCode, } from '~/common/enums';
import { validateSchema } from '~/middlewares';
import { addClinic as validationClinicSchema } from '~/validation-schemas';
import { clinicService } from '~/services/services';

const initClinicApi = (apiRouter: Router): Router => {
  const clinicRouter = Router();

  apiRouter.use(ApiPath.CLINICS, clinicRouter);

  clinicRouter.get(ClinicsApiPath.ROOT, async (_req, res, next) => {
    try {
      const clinics = await clinicService.getAllClinics();
      res.status(HttpCode.OK).json(clinics);
    } catch (error) {
      next(error);
    }
  });

  clinicRouter.get(ClinicsApiPath.$ID, async (req, res, next) => {
    try {
      const clinic = await clinicService.getClinicById(req.params.id);
      res.status(HttpCode.OK).json(clinic);
    } catch(error) {
      next(error);
    }
  });

  clinicRouter.post(ClinicsApiPath.ROOT, validateSchema(validationClinicSchema), async (req, res, next) => {
    try {
      const clinic = await clinicService.createNewClinic(req.body);
      res.status(HttpCode.OK).json(clinic);
    } catch(error) {
      next(error);
    }
  });

  clinicRouter.delete(ClinicsApiPath.$ID, async (req, res, next) => {
    try {
      const isDeleted = await clinicService.deleteClinic(req.params.id);
      res.status(HttpCode.OK).json(isDeleted);
    } catch(error) {
      next(error);
    }
  });

  return clinicRouter;
};

export { initClinicApi };
