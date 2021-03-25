import { Http } from 'services/http/http.service';
import { HttpMethod, ApiPath, ContentType } from 'common/enums';
import { IDoctor } from 'common/interfaces';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class DoctorApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public addDoctorToClinic(payload: { doctorId:string,clinicId:string }): Promise<IDoctor> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.DOCTORS}/${payload.doctorId}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { DoctorApi };
