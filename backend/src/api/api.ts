import { Router } from 'express';
import { AppConfig } from '~/common/enums';
import { initUserApi } from './user/user.api';
import { initAuthApi } from './auth/auth.api';
import { initClinicApi } from './clinic/clinic.api';
import { initDocumentApi } from './document/document.api';
import { initGeolocationApi } from './geolocation/geolocation.api';
import { initDiagnosisApi } from './diagnosis/diagnosis.api';
import { initUploadFileApi } from './upload-file/upload-file.api';
import { initMapApi } from './map/map.api';
import { initPermissionApi } from './permission/permission.api';

const apis = [
  initUserApi,
  initAuthApi,
  initClinicApi,
  initGeolocationApi,
  initDiagnosisApi,
  initDocumentApi,
  initMapApi,
  initUploadFileApi,
  initPermissionApi,
];

const initApi = (app: Router): Router => {
  const apiRouter = Router();
  app.use(AppConfig.API_V1_PREFIX, apiRouter);

  apis.forEach((api) => api(apiRouter));

  return apiRouter;
};

export { initApi };
