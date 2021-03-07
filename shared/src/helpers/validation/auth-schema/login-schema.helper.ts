import * as yup from 'yup';
import {
  EmailValidation,
  LoginPayloadKey,
  PasswordValidation,
} from '~/common/enums';

const loginSchema = yup.object().shape({
  [LoginPayloadKey.EMAIL]: yup
    .string()
    .email(EmailValidation.INCORRECT)
    .required(EmailValidation.REQUIRED),
  [LoginPayloadKey.PASSWORD]: yup
    .string()
    .length(
      PasswordValidation.MIN_LENGTH,
      PasswordValidation.MIN_LENGTH_MESSAGE,
    )
    .required(PasswordValidation.REQUIRED_MESSAGE),
});

export { loginSchema };
