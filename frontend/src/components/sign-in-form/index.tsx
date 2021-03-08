import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './signin.module.scss';
import { IUserLoginPayload } from 'healthcare-shared/common/interfaces';
import { LoginPayloadKey } from 'healthcare-shared/common/enums';
import { loginSchema } from 'healthcare-shared/helpers';
import { Link } from 'components/common';
import { AppRoute } from 'common/enums';

const SignInPage: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IUserLoginPayload>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (formValues: IUserLoginPayload) => {
    console.log(formValues);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2>Sign In</h2>
        <p>No account? <Link to={AppRoute.SIGN_UP}>Sign up</Link></p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.email}>
            <label htmlFor={LoginPayloadKey.EMAIL}>Email <Link to={AppRoute.ROOT}>Forgot password</Link></label>
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

      </div>
    </div>
  );
};
export default SignInPage;
