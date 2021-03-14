import { HttpCode, CustomExceptionName } from '~/common/enums';
import { DEFAULT_MESSAGE } from './common/constants';

class HttpError extends Error {
  status: HttpCode;
  messages: string[];

  constructor({
    status = HttpCode.INTERNAL_SERVER_ERROR,
    messages = [DEFAULT_MESSAGE],
  } = {}) {
    super(messages.join());
    this.status = status;
    this.messages = messages;
    this.name = CustomExceptionName.HTTP_ERROR;
  }
}

export { HttpError };
