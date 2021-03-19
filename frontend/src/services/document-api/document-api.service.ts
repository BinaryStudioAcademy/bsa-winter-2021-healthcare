import { IDocument, IEditDocumentPayload } from 'common/interfaces';
import { ContentType } from 'common/enums';
import { Http } from 'services/http/http.service';
import {
  HttpMethod,
  ApiPath,

} from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class DocumentApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public editDocument(id: string, payload:IEditDocumentPayload): Promise<IDocument> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.DOCUMENTS}/${id}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { DocumentApi };
