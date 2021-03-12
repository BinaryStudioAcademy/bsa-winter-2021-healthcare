import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login as loginSchema } from 'validation-schemas';
import { IUserLoginPayload } from 'common/interfaces';
import { TextInput, Link, Button } from 'components/common';
import { LoginPayloadKey, InputType, InputColor, ButtonType, ButtonColor, ButtonStyleType } from 'common/enums';
import { AppRoute } from 'common/enums';
import { AuthActionCreator } from 'store/slices';

import styles from './signin.module.scss';

const SignInForm: React.FC = () => {
  const { control, handleSubmit, errors } = useForm<IUserLoginPayload>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const handleFormSubmit = (formValues: IUserLoginPayload) => {
    dispatch(AuthActionCreator.login(formValues));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>

      <h2 className={styles.title}>Sign In</h2>

      <div className={styles.inputBlock}>
        No account? <Link to={AppRoute.SIGN_UP}>Sign up</Link>
      </div>

      <div className={styles.inputBlock}>
        <TextInput
          name={LoginPayloadKey.EMAIL}
          label="Email"
          placeholder="Email"
          type={InputType.EMAIL}
          color={InputColor.GRAY_LIGHT}
          control={control}
          errors={errors}
        />
      </div>
      <div className={styles.forgotLink}>
        <Link to={AppRoute.ROOT}>Forgot password</Link>
      </div>

      <div className={styles.inputBlock}>
        <TextInput
          name={LoginPayloadKey.PASSWORD}
          label="Password"
          placeholder="Password"
          type={InputType.PASSWORD}
          color={InputColor.GRAY_LIGHT}
          control={control}
          errors={errors}
        />
      </div>

      <div className={styles.submitBtn}>
        <Button
          label="Sign In"
          type={ButtonType.SUBMIT}
          color={ButtonColor.PRIMARY_DARK}
          styleType={ButtonStyleType.WITHOUT_BORDER}
        />
      </div>
    </form>
  );
};
export default SignInForm;
