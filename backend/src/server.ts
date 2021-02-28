import { join } from 'path';
import express, { json, urlencoded } from 'express';
import { ENV } from '~/common/enums';
import { logger } from '~/services/services';
import { setTraceId, logRequest } from '~/middlewares';
import config from '../package.json';

const app = express();

app.use(setTraceId);
app.use(logRequest);
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(express.static(join(__dirname, '../public')));
app.use('/*', (_req, res) => {
  return res.sendFile(join(__dirname, '../public', 'index.html'));
});

const server = app.listen(ENV.APP.SERVER_PORT, () => {
  logger.log(
    `Listening to connections on port — ${ENV.APP.SERVER_PORT} on node — v${config.engines.node}`,
  );
});

export { server };
