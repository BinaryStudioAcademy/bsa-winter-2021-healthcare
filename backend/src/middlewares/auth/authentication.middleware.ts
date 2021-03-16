import passport from 'passport';
import { StrategyName } from '~/common/enums';

const authenticationMiddleware = passport.authenticate(StrategyName.LOGIN, {
  session: false,
});

export { authenticationMiddleware };
