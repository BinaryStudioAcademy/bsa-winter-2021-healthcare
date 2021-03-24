import { RegisterValidationRule } from './register-validation-rule.enum';

const RegisterValidationMessage = {
  NAME_REQUIRED: 'Name is required',
  SURNAME_REQUIRED: 'Surname is required',
  SEX_REQUIRED: 'Sex is required',
  BIRTH_DATE_REQUIRED: 'Birth date is required',
  EMAIL_INCORRECT: 'Email is incorrect',
  EMAIL_REQUIRED: 'Email is required',
  PHONE_INCORRECT: 'Phone is incorrect',
  PHONE_REQUIRED: 'Phone is required',
  PASSWORD_MIN_LENGTH: `Password must have at least ${RegisterValidationRule.PASSWORD_MIN_LENGTH} characters`,
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_REPEAT_MATCH: 'Passwords must match',
} as const;

export { RegisterValidationMessage };
