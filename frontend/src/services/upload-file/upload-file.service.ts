import { Http } from 'services/http/http.service';
import { HttpMethod, ApiPath, UploadFileType } from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class UploadFile {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public addImage(image: File): Promise<string> {
    const formData = new FormData();
    formData.append(UploadFileType.IMAGE, image);
    const payload = formData;

    return this.#http.load(`${this.#apiPrefix}${ApiPath.FILES}`, {
      method: HttpMethod.POST,
      payload,
    });
  }
}

export { UploadFile };
