import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { AppRoute } from 'common/enums';
import {
  RegisterPayloadKey,
  validationUserSchema,
  IRegisterPayload,
  IUser,
} from 'healthcare-shared';
import styles from './styles.module.scss';

interface IProps{
  user?:IUser,
  func:(data:IRegisterPayload)=>void
}

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.IS_STAFF]: false,
};

function EditUser({ user, func }:IProps){
  const [userState, setUserState] = useState({
    name: '',
    surname: '',
    phone: '',
    password: '',
    retypePassword: '',
    email: '',
    diagnosis: '',
  });
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  const onSubmit = (data: IRegisterPayload) => func(data);
  const closeEdit = () => history.push(AppRoute.ADMIN_PAGE);

  useEffect(() => {
    user ? setUserState({ ...userState, ...user }) : null;
  },[]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.editForm}>
      <div className={styles.inputElements}>
        <div className={styles.inputRow}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={userState.name}
            name={RegisterPayloadKey.NAME}
            ref={register}
            onChange={(e) => inputHandler(e)}
          />
          {errors.name && (
            <span className={styles.errorSpan}>{errors.name.message}</span>
          )}
        </div>

        <div className={clsx(styles.surname, styles.inputRow)}>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            placeholder="Surname"
            value={userState.surname}
            name={RegisterPayloadKey.SURNAME}
            ref={register}
            onChange={(e) => inputHandler(e)}
          />
          {errors.surname && (
            <span className={styles.errorSpan}>{errors.surname.message}</span>
          )}
        </div>

        <div className={clsx(styles.email, styles.inputRow)}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            value={userState.email}
            name={RegisterPayloadKey.EMAIL}
            ref={register}
            onChange={(e) => inputHandler(e)}
          />
          {errors.email && (
            <span className={styles.errorSpan}>{errors.email.message}</span>
          )}
        </div>

        <div className={clsx(styles.password, styles.inputRow)}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={userState.password}
            name={RegisterPayloadKey.PASSWORD}
            ref={register}
            onChange={(e) => inputHandler(e)}
          />
          {errors.password && (
            <span className={styles.errorSpan}>{errors.password.message}</span>
          )}
        </div>

        <div className={clsx(styles.password, styles.inputRow)}>
          <label htmlFor="password">Retype Password</label>
          <input
            type="password"
            placeholder="Retype password"
            value={userState.retypePassword}
            name={RegisterPayloadKey.RETYPE_PASSWORD}
            ref={register}
            onChange={(e) => inputHandler(e)}
          />
          {errors.retypePassword && (
            <span className={styles.errorSpan}>
              {errors.retypePassword.message}
            </span>
          )}
        </div>

        <div className={clsx(styles.phone, styles.inputRow)}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            value={userState.phone}
            name={RegisterPayloadKey.PHONE}
            ref={register}
            onChange={(e) => inputHandler(e)}
          />
          {errors.phone && (
            <span className={styles.errorSpan}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.checkBox}>
          <input
            type="checkbox"
            name={RegisterPayloadKey.IS_STAFF}
            ref={register}
          />
          <label htmlFor="isStaff">Doctor/Nurse</label>
        </div>
      </div>

      <button type="submit">Save</button>
      <button className={styles.closeButton} onClick={closeEdit} type="button">
        Close
      </button>
    </form>
  );
}

export default EditUser;
