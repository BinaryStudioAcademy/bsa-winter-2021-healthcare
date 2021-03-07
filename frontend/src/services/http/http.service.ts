import { HttpError } from 'exceptions';
import { checkIsOneOf } from 'helpers';
import { ContentType, HttpHeader, HttpMethod } from 'common/enums';
import { HttpOptions } from 'common/types';

class Http {
  load<T = unknown>(url: string, options: Partial<HttpOptions> = {}): Promise<T> {
    const { method = HttpMethod.GET, payload = null, contentType } = options;
    const headers = this._getHeaders(contentType);
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

  _getHeaders(contentType?: ContentType): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  _checkStatus(response: Response): Response {
    if (!response.ok) {
      throw new HttpError({
        status: response.status,
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
