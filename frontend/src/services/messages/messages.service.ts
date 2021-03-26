import { IMessage, IMessagePayload } from 'common/interfaces';
import { Http } from '../http/http.service';
import {
  ApiPath,
  HttpMethod,
  ContentType,
} from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class Messages {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public loadUserMessages(toUserId: string): Promise<IMessage[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.MESSAGES}/${toUserId}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public sendMessage(payload: Partial<IMessagePayload>): Promise<IMessage> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.MESSAGES}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { Messages };
