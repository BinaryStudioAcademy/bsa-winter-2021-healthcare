import { BasicToastrOptions, toastr, ToastrEmitter } from 'react-redux-toastr';
import { Http } from 'services/http/http.service';
import { INotification } from 'common/interfaces';
import { HttpMethod, ApiPath, NotificationApiPath } from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class Notification {
  #instance: ToastrEmitter;
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#instance = toastr;
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  _getFullMessage(messages: string[]): string {
    return messages.join(', ');
  }

  error(title: string, messages: string[], options?: BasicToastrOptions): void {
    this.#instance.error(title, this._getFullMessage(messages), options);
  }

  success(title: string, messages: string[], options?: BasicToastrOptions): void {
    this.#instance.success(title, this._getFullMessage(messages), options);
  }

  info(title: string, messages: string[], options?: BasicToastrOptions): void {
    this.#instance.info(title, this._getFullMessage(messages), options);
  }

  public getNotificationsByUser(userId: string): Promise<INotification[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.NOTIFICATIONS}${NotificationApiPath.USERS}/${userId}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}

export { Notification };
