import { Http } from 'services/http/http.service';
import { HttpMethod, ApiPath } from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class ImageService {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public addImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    const payload = formData;

    return this.#http.load(`${this.#apiPrefix}${ApiPath.IMAGES}`, {
      method: HttpMethod.POST,
      payload,
    });
  }
}

export { ImageService };
