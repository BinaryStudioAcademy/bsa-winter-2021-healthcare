import { ModelName } from '~/common/enums';
import {
  AppointmentModel,
  ClinicModel,
  DiagnosisModel,
  DoctorModel,
  DocumentModel,
  MessageModel,
  NotificationModel,
  UserModel,
  PermissionModel,
  UserPermissionModel
} from '~/data/models';

type DbModels = {
  [ModelName.APPOINTMENT]: typeof AppointmentModel;
  [ModelName.CLINIC]: typeof ClinicModel;
  [ModelName.DIAGNOSIS]: typeof DiagnosisModel;
  [ModelName.DOCTOR]: typeof DoctorModel;
  [ModelName.DOCUMENT]: typeof DocumentModel;
  [ModelName.MESSAGE]: typeof MessageModel;
  [ModelName.NOTIFICATION]: typeof NotificationModel;
  [ModelName.USER]: typeof UserModel;
  [ModelName.PERMISSION]: typeof PermissionModel;
  [ModelName.USER_PERMISSION]: typeof UserPermissionModel;
};

export type { DbModels };
