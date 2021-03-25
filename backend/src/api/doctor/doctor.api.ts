import { Router } from 'express';
import { ApiPath, HttpCode, DoctorApiPath } from '~/common/enums';
import { doctor } from '~/services/services';

const initDoctorApi = (apiRouter: Router): Router => {
  const doctorRouter = Router();

  apiRouter.use(ApiPath.DOCTORS, doctorRouter);

  doctorRouter.put(DoctorApiPath.$ID, async (req, res, next) => {
    try {
      const updatedDoctor = await doctor.addDoctorToClinic(req.body.doctorId, req.body.clinicId);
      res.status(HttpCode.OK).json(updatedDoctor);
    } catch(error) {
      next(error);
    }
  });

  return doctorRouter;
};

export { initDoctorApi };
