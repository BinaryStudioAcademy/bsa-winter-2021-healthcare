import * as yup from 'yup';
import {
  AuthValidationRule,
  LoginPayloadKey,
  AuthValidationMessage,
} from '~/common/enums';

const login = yup.object().shape({
  [LoginPayloadKey.EMAIL]: yup
    .string()
    .email(AuthValidationMessage.EMAIL_INCORRECT)
    .required(AuthValidationMessage.EMAIL_REQUIRED),
  [LoginPayloadKey.PASSWORD]: yup
    .string()
    .min(
      AuthValidationRule.PASSWORD_MIN_LENGTH,
      AuthValidationMessage.PASSWORD_MIN_LENGTH,
    )
    .required(AuthValidationMessage.PASSWORD_REQUIRED),
});

export { login };
