import { Router } from 'express';
import { AppConfig } from '~/common/enums';
import { initUserApi } from './user/user.api';
import { initAuthApi } from './auth/auth.api';
import { initClinicApi } from './clinic/clinic.api';
import { initDocumentApi } from './document/document.api';
import { initGeolocationApi } from './geolocation/geolocation.api';
import { initNotificationApi } from './notification/notification.api';
import { initUploadFileApi } from './upload-file/upload-file.api';
import { initMapApi } from './map/map.api';

const apis = [initUserApi, initAuthApi, initClinicApi, initGeolocationApi, initDocumentApi, initMapApi, initUploadFileApi, initNotificationApi];

const initApi = (app: Router): Router => {
  const apiRouter = Router();
  app.use(AppConfig.API_V1_PREFIX, apiRouter);

  apis.forEach((api) => api(apiRouter));

  return apiRouter;
};

export { initApi };
