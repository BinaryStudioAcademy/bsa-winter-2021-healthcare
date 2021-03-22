import { ModelName } from '~/common/enums';
import {
  AppointmentModel,
  CityModel,
  ClinicModel,
  DiagnosisModel,
  DoctorModel,
  DocumentModel,
  MessageModel,
  NotificationModel,
  UserModel,
  GeolocationModel,
  PermissionModel,
  UserPermissionModel,
  SpecializationModel,
  UserSpecializationModel,
  ProfessionModel,
} from '~/data/models';

type DbModels = {
  [ModelName.APPOINTMENT]: typeof AppointmentModel;
  [ModelName.CITY]: typeof CityModel;
  [ModelName.CLINIC]: typeof ClinicModel;
  [ModelName.DIAGNOSIS]: typeof DiagnosisModel;
  [ModelName.DOCTOR]: typeof DoctorModel;
  [ModelName.DOCUMENT]: typeof DocumentModel;
  [ModelName.MESSAGE]: typeof MessageModel;
  [ModelName.NOTIFICATION]: typeof NotificationModel;
  [ModelName.USER]: typeof UserModel;
  [ModelName.GEOLOCATION]: typeof GeolocationModel;
  [ModelName.PERMISSION]: typeof PermissionModel;
  [ModelName.USER_PERMISSION]: typeof UserPermissionModel;
  [ModelName.SPECIALIZATION]: typeof SpecializationModel;
  [ModelName.USER_SPECIALIZATION]: typeof UserSpecializationModel;
  [ModelName.PROFESSION]: typeof ProfessionModel;
};

export type { DbModels };
