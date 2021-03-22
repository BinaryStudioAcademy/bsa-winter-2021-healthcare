import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_CONFIG } from './jwt.config';
import { AuthValidationMessage, HttpCode, StrategyName } from '~/common/enums';
import { checkIsPasswordSame } from '~/helpers';
import { user as userRepository } from '~/data/repositories';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_CONFIG.SECRET,
};

passport.use(
  StrategyName.LOGIN,
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await userRepository.findByEmail(email);
        if (!user) {
          return done(
            {
              status: HttpCode.UNAUTHORIZED,
              messages: [AuthValidationMessage.EMAIL_INCORRECT],
            },
            false,
          );
        }

        return (await checkIsPasswordSame(user, password))
          ? done(null, user)
          : done(
            {
              status: HttpCode.UNAUTHORIZED,
              messages: [AuthValidationMessage.PASSWORD_INCORRECT],
            },
            false,
          );
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  StrategyName.REGISTER,
  new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password',
    },
    async ({ body }, username, password, done) => {
      try {
        return done(null, body);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  new JwtStrategy(options, async ({ id }, done) => {
    try {
      const user = await userRepository.getById(id);
      return user
        ? done(null, user)
        : done(
          {
            status: HttpCode.UNAUTHORIZED,
            messages: [AuthValidationMessage.TOKEN_INVALID],
          },
          null,
        );
    } catch (err) {
      done(err);
    }
  }),
);
