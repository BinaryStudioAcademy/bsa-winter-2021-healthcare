import { IMember } from 'common/interfaces';
import { Http } from '../http/http.service';
import {
  ApiPath,
  ChatsApiPath,
  HttpMethod,
} from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class Chat {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getMembersByName(name: string | undefined): Promise<IMember[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.CHATS}${ChatsApiPath.MEMBERS}/${name}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  // public addChat(
  //   userId: string | undefined,
  // ): Promise<IChat> | void {
  //   navigator.chat?.getCurrentPosition((position) => {
  //     const payload: Partial<IChat> = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //       userId: userId,
  //     };

  //     return this.#http.load(`${this.#apiPrefix}${ApiPath.CHATS}`, {
  //       method: HttpMethod.POST,
  //       contentType: ContentType.JSON,
  //       payload,
  //     });
  //   });
  // }
}

export { Chat };
