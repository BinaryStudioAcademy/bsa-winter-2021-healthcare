import { Router } from 'express';
import { ApiPath, HttpCode, GeolocationsApiPath } from '~/common/enums';
import { geolocation as geolocationService } from '~/services/services';

const initGeolocationApi = (apiRouter: Router): Router => {
  const geolocationRouter = Router();

  apiRouter.use(ApiPath.GEOLOCATIONS, geolocationRouter);

  geolocationRouter.get(GeolocationsApiPath.USERS_$ID, async (req, res, next) => {
    try {
      const geolocation = await geolocationService.getByUserId(req.params.id);
      res.status(HttpCode.OK).json(geolocation);
    } catch (error) {
      next(error);
    }
  });

  geolocationRouter.post(GeolocationsApiPath.ROOT, async (req, res, next) => {
    try {
      const geolocation = await geolocationService.createGeolocation(req.body);
      res.status(HttpCode.CREATED).json(geolocation);
    } catch (error) {
      next(error);
    }
  });

  geolocationRouter.put(GeolocationsApiPath.$ID, async (req, res, next) => {
    try {
      const geolocation = await geolocationService.updateGeolocation(req.params.id, req.body);
      res.status(HttpCode.OK).json(geolocation);
    } catch (error) {
      next(error);
    }
  });

  return geolocationRouter;
};

export { initGeolocationApi };
