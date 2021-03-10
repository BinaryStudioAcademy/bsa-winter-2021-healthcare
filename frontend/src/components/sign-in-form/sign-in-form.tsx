import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import styles from './signin.module.scss';
import { IUserLoginPayload } from 'common/interfaces';
import { LoginPayloadKey } from 'common/enums';
import { login as loginSchema } from 'validation-schemas';
import { Link } from 'components/common';
import { AppRoute } from 'common/enums';
import { AuthActionCreator } from 'store/slices';
import { RootState } from 'common/types';

const SignInForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IUserLoginPayload>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));

  const handleFormSubmit = (formValues: IUserLoginPayload) => {
    dispatch(AuthActionCreator.login(formValues));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2>Sign In</h2>
        <p>
          No account? <Link to={AppRoute.SIGN_UP}>Sign up</Link>
        </p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Link to={AppRoute.ROOT}>Forgot password</Link>
          <div className={styles.email}>
            <label htmlFor={LoginPayloadKey.EMAIL}>Email</label>
            <input
              type={LoginPayloadKey.EMAIL}
              name={LoginPayloadKey.EMAIL}
              placeholder="mail@gmail.com"
              ref={register}
            />
            {errors.email && (
              <span className={styles.errorSpan}>{errors.email.message}</span>
            )}
          </div>
          <div className={styles.password}>
            <label htmlFor={LoginPayloadKey.PASSWORD}>Password</label>
            <input
              type={LoginPayloadKey.PASSWORD}
              name={LoginPayloadKey.PASSWORD}
              placeholder="******"
              ref={register}
            />
            {errors.password && (
              <span className={styles.errorSpan}>
                {errors.password.message}
              </span>
            )}
          </div>
          <div className={styles.submit}>
            <button type="submit">Sign In</button>
          </div>
        </form>
        {user ? <div>{user.name}</div> : null}
      </div>
    </div>
  );
};
export default SignInForm;
