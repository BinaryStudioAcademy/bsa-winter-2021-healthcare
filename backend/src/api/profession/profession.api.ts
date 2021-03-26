import { Router } from 'express';
import { validateSchema } from '~/middlewares';
import { ApiPath, ProfessionApiPath, HttpCode } from '~/common/enums';
import { profession as professionService } from '~/services/services';
import { addProfessionIdToDoctor as addProfessionIdToDoctorSchema } from '~/validation-schemas';

const initProfessionApi = (apiRouter: Router): Router => {
  const professionRouter = Router();

  apiRouter.use(ApiPath.PROFESSION, professionRouter);

  professionRouter.get(ProfessionApiPath.ROOT, async (req, res, next) => {
    try {
      const professions = await professionService.getAllProfessions();
      res.status(HttpCode.OK).json(professions);
    } catch (error) {
      next(error);
    }
  });

  professionRouter.post(ProfessionApiPath.$ID, validateSchema(addProfessionIdToDoctorSchema), async (req, res, next) => {
    try {
      professionService.addProfessionIdToDoctor(req.params.id, req.body.userId as string);
      const profession = await professionService.getById(req.params.id);
      res.status(HttpCode.OK).json(profession);
    } catch(error) {
      next(error);
    }
  });

  return professionRouter;
};

export { initProfessionApi };
