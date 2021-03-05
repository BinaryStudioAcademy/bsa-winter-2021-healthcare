import * as React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { isValidEmail, isValidPassword } from 'healthcare-shared/helpers';

import styles from './signin.module.scss';

enum RegisterPayloadKey {
  EMAIL = 'email',
  PASSWORD = 'password',
}
interface IRegisterPayload {
  [RegisterPayloadKey.EMAIL]: string;
  [RegisterPayloadKey.PASSWORD]: string;
}
/* const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
}; */

const SignInPage: React.FC = () => {
  const validationSchema = yup.object().shape({
      email: yup.string().email('Email is incorrect').required('Email is required'),
      password: yup.string().length(6, 'min 6 chars').required('Password is required min six symbols')
    });
  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit=(formValues: IRegisterPayload) => {
    console.log(formValues);
  }
    return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input
              type={RegisterPayloadKey.EMAIL}
              name={RegisterPayloadKey.EMAIL}
              placeholder='mail@gmail.com'
              ref={register}
            />
            {errors.email && <span className={styles.errorSpan}>{errors.email.message}</span>}
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input
              type={RegisterPayloadKey.PASSWORD}
              name={RegisterPayloadKey.PASSWORD}
              placeholder='******'
              ref={register}
            />
            {errors.password && <span className={styles.errorSpan}>{errors.password.message}</span>}
          </div>
          <div className={styles.submit}>
            <button type='submit'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignInPage;

