import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login as loginSchema } from 'validation-schemas';
import { IUserLoginPayload } from 'common/interfaces';
import { TextInput, Link, Button } from 'components/common';
import {
  LoginPayloadKey,
  InputType,
  InputColor,
  ButtonType,
  ButtonColor,
  ButtonStyleType,
} from 'common/enums';
import { AppRoute } from 'common/enums';
import { AuthActionCreator } from 'store/slices';
import { SIGN_IN_DEFAULT_VALUES } from '../common/constants';

import styles from './signin.module.scss';

const SignInForm: React.FC = () => {
  const { control, handleSubmit, errors } = useForm<IUserLoginPayload>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    defaultValues: SIGN_IN_DEFAULT_VALUES,
  });
  const dispatch = useDispatch();

  const handleFormSubmit = (formValues: IUserLoginPayload) => {
    dispatch(AuthActionCreator.login(formValues));
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.formSignIn}
    >
      <h2 className={styles.title}>Sign In</h2>

      <div className={styles.textBlock}>
        No account? <Link to={AppRoute.SIGN_UP}>Sign up</Link>
      </div>

      <div className={styles.inputBlock}>
        <TextInput
          name={LoginPayloadKey.EMAIL}
          label="Email"
          hasHiddenLabel={false}
          placeholder="Email"
          type={InputType.EMAIL}
          color={InputColor.GRAY_LIGHT}
          control={control}
          errors={errors}
        />
      </div>

      <div className={styles.inputBlock}>
        <TextInput
          name={LoginPayloadKey.PASSWORD}
          label="Password"
          hasHiddenLabel={false}
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
          hasHiddenLabel={false}
          type={ButtonType.SUBMIT}
          color={ButtonColor.PRIMARY_DARK}
          styleType={ButtonStyleType.WITHOUT_BORDER}
        />
      </div>
    </form>
  );
};
export default SignInForm;
