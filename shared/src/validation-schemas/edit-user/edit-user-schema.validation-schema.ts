import * as yup from 'yup';
import {
  EditUserPayloadKey,
  UserType,
  UserSex,
  RegisterValidationMessage,
} from '~/common/enums';
import { phone as phoneRegExp } from '~/regexps';

const editUser = yup.object().shape({
  [EditUserPayloadKey.NAME]: yup
    .string()
    .required(RegisterValidationMessage.NAME_REQUIRED),
  [EditUserPayloadKey.SURNAME]: yup
    .string()
    .required(RegisterValidationMessage.SURNAME_REQUIRED),
  [EditUserPayloadKey.SEX]: yup
    .mixed<UserSex>()
    .oneOf(Object.values(UserSex))
    .required(RegisterValidationMessage.SEX_REQUIRED),
  [EditUserPayloadKey.BIRTHDATE]: yup
    .date()
    .required(RegisterValidationMessage.BIRTH_DATE_REQUIRED),
  [EditUserPayloadKey.EMAIL]: yup
    .string()
    .required(RegisterValidationMessage.EMAIL_REQUIRED)
    .email(RegisterValidationMessage.EMAIL_INCORRECT),
  [EditUserPayloadKey.PHONE]: yup
    .string()
    .required(RegisterValidationMessage.PHONE_REQUIRED)
    .matches(phoneRegExp, RegisterValidationMessage.PHONE_INCORRECT),
  [EditUserPayloadKey.TYPE]: yup
    .mixed<UserType>()
    .oneOf(Object.values(UserType))
    .required(),
});

export { editUser };
