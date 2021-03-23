import * as yup from 'yup';
import {
  CreateAppointmentKey,
  AppointmentTime,
  AppointmentValidationMessage,
} from '~/common/enums';


const createAppointment = yup.object().shape({  
  [CreateAppointmentKey.TIME]: yup
    .mixed<AppointmentTime>()
    .oneOf(Object.values(AppointmentTime))
    .required(AppointmentValidationMessage.TIME_REQUIRED),
  [CreateAppointmentKey.DATE]: yup
    .date()
    .required(AppointmentValidationMessage.DATE_REQUIRED), 
});

export { createAppointment };
