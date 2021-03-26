import { Router } from 'express';
import { ApiPath, CityApiPath, HttpCode } from '~/common/enums';
import { validateSchema } from '~/middlewares';
import { addCity as validationCitySchema } from '~/validation-schemas';
import { city as cityService } from '~/services/services';

const initCityApi = (apiRouter: Router): Router => {
  const cityRouter = Router();

  apiRouter.use(ApiPath.CITIES, cityRouter);

  cityRouter.get(CityApiPath.ROOT, async (_req, res, next) => {
    try {
      const cities = await cityService.getAllCities();
      res.status(HttpCode.OK).json(cities);
    } catch (error) {
      next(error);
    }
  });

  cityRouter.post(CityApiPath.ROOT, validateSchema(validationCitySchema), async (req, res, next) => {
    try {
      const city = await cityService.createCity(req.body);
      res.status(HttpCode.CREATED).json(city);
    } catch(error) {
      next(error);
    }
  });

  return cityRouter;
};

export { initCityApi };
