import { ErrorRequestHandler } from 'express';
import { logger } from '~/services/services';
import { HttpError } from '~/exceptions';
import { HttpCode } from '~/common/enums';

const handleError: ErrorRequestHandler = (err: HttpError, _req, res, _next) => {
  const { status = HttpCode.INTERNAL_SERVER_ERROR, message, messages, stack } = err;

  logger.error(message, stack);

  return res.status(status).send({
    messages,
  });
};

export { handleError };
