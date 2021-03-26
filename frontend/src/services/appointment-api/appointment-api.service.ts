import { IAppointment, ICreateAppointment } from 'common/interfaces';
import { ContentType } from 'common/enums';
import { Http } from 'services/http/http.service';
import { HttpMethod, ApiPath } from 'common/enums';
import { AppointmentsApiPath } from 'healthcare-shared/common/enums/api';
import { IAppointmentWithUser } from 'healthcare-shared/common/interfaces';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class AppointmentApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public createAppointment(
    appointment: Partial<ICreateAppointment>,
  ): Promise<IAppointment> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.APPOINTMENTS}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: appointment,
    });
  }

  public getAllById(doctorId: string): Promise<IAppointmentWithUser[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.APPOINTMENTS}${
        AppointmentsApiPath.DOCTOR
      }/${doctorId}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}

export { AppointmentApi };
