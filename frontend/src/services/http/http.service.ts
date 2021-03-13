import { HttpError } from 'exceptions';
import { checkIsOneOf } from 'helpers';
import { ContentType, HttpHeader, HttpMethod, StorageKey } from 'common/enums';
import { HttpOptions } from 'common/types';
import { storage, notificationService } from 'services';

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
      body: isJSON ? JSON.stringify(payload) : (payload as string),
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

  _checkStatus(response: Response): Response {
    if (!response.ok) {
      const error = new HttpError({
        status: response.status,
        message: response.statusText,
      });
      notificationService.error(`Error ${error.status}`, error.message);
      throw error;
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
