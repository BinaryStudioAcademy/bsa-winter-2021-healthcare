import { Router } from 'express';
import { ApiPath, HttpCode, GeolocationsApiPath } from '~/common/enums';
import { geolocationService } from '~/services/services';

const initGeolocationApi = (apiRouter: Router): Router => {
  const geolocationRouter = Router();

  apiRouter.use(ApiPath.GEOLOCATIONS, geolocationRouter);

  geolocationRouter.post(GeolocationsApiPath.ROOT, async (req, res, next) => {
    try {
      const location = await geolocationService.createLocation(req.body);
      res.status(HttpCode.OK).json(location);
    } catch (error) {
      next(error);
    }
  });

  return geolocationRouter;
};

export { initGeolocationApi };
