import { Router } from 'express';
import { ApiPath, HttpCode, AppointmentsApiPath } from '~/common/enums';
import { appointment as appointmentService } from '~/services/services';
import { createdAppointment as createdAppointmentSchema } from '~/validation-schemas';
import { validateSchema } from '~/middlewares';
import { setTimeToDate } from '~/helpers';
import { ICreateAppointment } from '~/common/interfaces';

const initAppointmentApi = (apiRouter: Router): Router => {
  const appointmentRouter = Router();

  apiRouter.use(ApiPath.APPOINTMENTS, appointmentRouter);

  appointmentRouter.get(
    AppointmentsApiPath.DOCTOR_$ID,
    async (req, res, next) => {
      try {
        const appointments = await appointmentService.getAllById(req.params.id);
        res.status(HttpCode.OK).json(appointments);
      } catch (error) {
        next(error);
      }
    },
  );

  appointmentRouter.post(
    AppointmentsApiPath.ROOT,
    validateSchema(createdAppointmentSchema),
    async (req, res, next) => {
      try {
        const payload: ICreateAppointment = {
          ...req.body,
          date: setTimeToDate(req.body.date, req.body.time),
        };
        const appointmentData = await appointmentService.create(payload);
        res.status(HttpCode.OK).json(appointmentData);
      } catch (error) {
        next(error);
      }
    },
  );

  return appointmentRouter;
};

export { initAppointmentApi };
