import { ContentType, HttpMethod } from 'common/enums';

type HttpOptions = {
  method: HttpMethod;
  contentType: ContentType;
  payload: Record<string, unknown> | string | FormData;
  hasAuth: boolean;
};

export type { HttpOptions };
