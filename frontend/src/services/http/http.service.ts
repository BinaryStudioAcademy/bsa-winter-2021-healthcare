import { HttpError } from 'exceptions';
import { checkIsOneOf } from 'helpers';
import { ContentType, HttpHeader, HttpMethod, StorageKey } from 'common/enums';
import { HttpOptions } from 'common/types';
import { storage } from 'services';
import { IServerResponseErr } from 'common/interfaces';

class Http {
  load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {},
  ): Promise<T> {
    const {
      method = HttpMethod.GET,
      payload = null,
      hasAuth = true,
      contentType,
    } = options;
    const headers = this._getHeaders(hasAuth, contentType);
    const isJSON = checkIsOneOf(contentType, ContentType.JSON);
    return fetch(url, {
      method,
      headers,
      body: isJSON ? JSON.stringify(payload) : payload as string | FormData,
    })
      .then(this._checkStatus)
      .then((res) => this._parseJSON<T>(res))
      .catch(this._throwError);
  }

  _getHeaders(hasAuth: boolean, contentType?: ContentType): Headers {
    const headers = new Headers();
    const token = storage.getItem(StorageKey.TOKEN);

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    return headers;
  }

  async _checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const parsedException: IServerResponseErr | null = await response.json();
      throw new HttpError({
        status: response.status,
        messages: parsedException?.messages,
      });
    }
    return response;
  }

  _parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  _throwError(err: Error): never {
    throw err;
  }
}

export { Http };
