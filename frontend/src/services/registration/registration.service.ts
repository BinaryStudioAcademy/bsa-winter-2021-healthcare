import { Http } from 'services/http/http.service';
import { ApiPath, AuthApiPath, HttpMethod } from 'common/enums';
import { IRegisterPayload } from 'common/interfaces'
import { ENV } from 'common/enums';

const registration = async (data: IRegisterPayload): Promise<unknown> => {
  const payload: string = JSON.stringify(data);
  const http = new Http();
  const response = await http.load((ENV.API_PATH || '') + ApiPath.AUTH + AuthApiPath.SIGNUP, {
    method: HttpMethod.POST,
    payload,
  });
  return response;
};

export { registration };
