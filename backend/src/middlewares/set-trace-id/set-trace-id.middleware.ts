import { RequestHandler } from 'express';
import { appAsyncStorage } from '~/services/services';
import { getRandomId } from '~/helpers';
import { AppAsyncStorageKey } from '~/common/enums';

const setTraceId: RequestHandler = async (_req, _res, next) => {
  const traceId = getRandomId();
  const store = new Map().set(AppAsyncStorageKey.TRACE_ID, traceId);

  return appAsyncStorage.run(store, () => {
    return next();
  });
};

export { setTraceId };
