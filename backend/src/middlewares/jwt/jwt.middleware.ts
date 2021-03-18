import passport from 'passport';
import { StrategyName } from '~/common/enums';

const jwt = passport.authenticate(StrategyName.JWT, {
  session: false,
});

export { jwt };
