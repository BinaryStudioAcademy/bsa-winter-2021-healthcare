import { IMember, IMessage, IMessagePayload } from 'common/interfaces';
import { Http } from '../http/http.service';
import {
  ApiPath,
  MessagesApiPath,
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

  public getMembersByName(name: string | undefined): Promise<IMember[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.CHATS}${MessagesApiPath.MEMBERS}/${name}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public loadMembersAsChats(): Promise<IMember[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.CHATS}${MessagesApiPath.MEMBERS}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public loadMemberMessages(memberId: string | undefined): Promise<IMessage[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.CHATS}${MessagesApiPath.MESSAGES}/${memberId}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public sendMessage(payload: Partial<IMessagePayload>): Promise<IMessage> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.CHATS}${MessagesApiPath.MESSAGES}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { Messages };
