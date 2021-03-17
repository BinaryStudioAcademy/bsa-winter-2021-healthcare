import passport from 'passport';
import { StrategyName } from '~/common/enums';

const registrationMiddleware = passport.authenticate(StrategyName.REGISTER, {
  session: false,
});

export { registrationMiddleware };
