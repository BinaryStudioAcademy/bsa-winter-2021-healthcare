import { ApiPath, AuthApiPath } from '~/common/enums';

const routesWhiteList = [
  ApiPath.AUTH + AuthApiPath.LOGIN,
  ApiPath.AUTH + AuthApiPath.SIGNUP,
];

export { routesWhiteList };
