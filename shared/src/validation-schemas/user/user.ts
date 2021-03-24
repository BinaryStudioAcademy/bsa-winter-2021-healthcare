import * as yup from 'yup';
import {
  RegisterPayloadKey,
  UserType,
  UserSex,
  RegisterValidationRule,
  RegisterValidationMessage,
} from '~/common/enums';

import { phone as phoneRegExp } from '~/regexps';

const userRegister = yup.object().shape({
  [RegisterPayloadKey.NAME]: yup
    .string()
    .required(RegisterValidationMessage.NAME_REQUIRED),
  [RegisterPayloadKey.SURNAME]: yup
    .string()
    .required(RegisterValidationMessage.EMAIL_REQUIRED),
  [RegisterPayloadKey.SEX]: yup
    .mixed<UserSex>()
    .oneOf(Object.values(UserSex))
    .required(RegisterValidationMessage.SEX_REQUIRED),
  [RegisterPayloadKey.BIRTH_DATE]: yup
    .date()
    .required(RegisterValidationMessage.BIRTH_DATE_REQUIRED),
  [RegisterPayloadKey.EMAIL]: yup
    .string()
    .required(RegisterValidationMessage.EMAIL_REQUIRED)
    .email(RegisterValidationMessage.EMAIL_INCORRECT),
  [RegisterPayloadKey.PASSWORD]: yup
    .string()
    .required(RegisterValidationMessage.PASSWORD_REQUIRED)
    .min(
      RegisterValidationRule.PASSWORD_MIN_LENGTH,
      RegisterValidationMessage.PASSWORD_MIN_LENGTH,
    ),
  [RegisterPayloadKey.RETYPE_PASSWORD]: yup
    .string()
    .oneOf(
      [yup.ref(RegisterPayloadKey.PASSWORD), null],
      RegisterValidationMessage.PASSWORD_REPEAT_MATCH,
    ),
  [RegisterPayloadKey.PHONE]: yup
    .string()
    .required(RegisterValidationMessage.PHONE_REQUIRED)
    .matches(phoneRegExp, RegisterValidationMessage.PHONE_INCORRECT),
  [RegisterPayloadKey.TYPE]: yup
    .mixed<UserType>()
    .oneOf(Object.values(UserType))
    .required(),
});

export { userRegister };
