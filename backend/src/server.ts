import { join } from 'path';
import express, { json, urlencoded } from 'express';
import passport from 'passport';
import { AppConfig, ENV } from '~/common/enums';
import { initApi } from '~/api/api';
import { logger } from '~/services/services';
import { setTraceId, logRequest, handleError } from '~/middlewares';
import { DbConnectionError } from '~/exceptions';
import { sequelize } from '~/data/db/connection';
import { authorization as authorizationMiddleware } from './middlewares';
import { routesWhiteList } from './configs';

const app = express();

sequelize
  .authenticate()
  .then(() => {
    return logger.log('Database connection was successful');
  })
  .catch(({ message, stack }: DbConnectionError) => {
    return logger.error(message, stack);
  });
app.use(setTraceId);
app.use(logRequest);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(passport.initialize());

app.use(AppConfig.API_V1_PREFIX, authorizationMiddleware(routesWhiteList));

initApi(app);

app.use(express.static(join(__dirname, '../public')));
app.use('*', (_req, res) => {
  return res.sendFile(join(__dirname, '../public', 'index.html'));
});

app.use(handleError);

const server = app.listen(ENV.APP.SERVER_PORT, () => {
  logger.log(`Listening to connections on port — ${ENV.APP.SERVER_PORT}`);
});

export { server };
