import passport from 'passport';
import { StrategyName } from '~/common/enums';

const jwtMiddleWare = passport.authenticate(StrategyName.JWT, {
  session: false,
});

export { jwtMiddleWare };
