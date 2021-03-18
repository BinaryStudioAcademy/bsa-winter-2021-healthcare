import passport from 'passport';
import { StrategyName } from '~/common/enums';

const authentication = passport.authenticate(StrategyName.LOGIN, {
  session: false,
});

export { authentication };
