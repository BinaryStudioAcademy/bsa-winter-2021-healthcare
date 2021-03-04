import { emailRegExp } from '../../constants/regex/regex.helper';

const isValidEmail = (email: string): boolean => {
  return emailRegExp.test(email);
};

const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

export { isValidEmail, isValidPassword };
