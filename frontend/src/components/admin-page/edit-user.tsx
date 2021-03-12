import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { EditUserPayloadKey, UserSex, UserType } from 'common/enums';
import styles from './styles.module.scss';
import { IEditUserPayload, IUser } from 'common/interfaces';
import { validationEditUserSchema } from 'helpers';

interface IProps {
  user?: IUser;
  func: (data: IEditUserPayload) => void;
  hideForm: () => void;
}

const DEFAULT_VALUES: IEditUserPayload = {
  [EditUserPayloadKey.NAME]: '',
  [EditUserPayloadKey.SURNAME]: '',
  [EditUserPayloadKey.EMAIL]: '',
  [EditUserPayloadKey.PASSWORD]: '',
  [EditUserPayloadKey.RETYPE_PASSWORD]: '',
  [EditUserPayloadKey.PHONE]: '',
  [EditUserPayloadKey.BIRTHDATE]: '',
  [EditUserPayloadKey.TYPE]: UserType.DOCTOR,
  [EditUserPayloadKey.SEX]: UserSex.MALE,
};

const CreateUser: React.FC<IProps> = ({ user, func, hideForm }) => {
  const [userState, setUserState] = useState(DEFAULT_VALUES);
  const { register, handleSubmit, errors } = useForm<IEditUserPayload>({
    resolver: yupResolver(validationEditUserSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  const onSubmit = (data: IEditUserPayload) => func(data);
  const closeEdit = () => hideForm();

  const onSexChange = (event: any) => {
    setUserState({ ...userState, sex: event.target.value });
  }
  const onTypeChange = (event: any) => {
    setUserState({ ...userState, type: event.target.value });
  }

  useEffect(() => {
    user ? setUserState({ ...userState, ...user }) : null;
  }, []);

  return (
    <div className={styles.editContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.editForm}>
        <div className={styles.header}>
          <h2 className={styles.title}>Edit User</h2>
          <button className={styles.closeButton} onClick={closeEdit} type="button">
            &#10060;
        </button>
        </div>
        <hr style={{width:'100%'}}/>
        <div className={styles.inputElements}>
          <div className={styles.inputBlock}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={userState.name}
              name={EditUserPayloadKey.NAME}
              ref={register}
              onChange={(e) => inputHandler(e)}
            />
            {errors.name && (
              <span className={styles.errorSpan}>{errors.name.message}</span>
            )}
          </div>

          <div className={clsx(styles.surname, styles.inputBlock)}>
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              placeholder="Surname"
              value={userState.surname}
              name={EditUserPayloadKey.SURNAME}
              ref={register}
              onChange={(e) => inputHandler(e)}
            />
            {errors.surname && (
              <span className={styles.errorSpan}>{errors.surname.message}</span>
            )}
          </div>

          <div className={clsx(styles.email, styles.inputBlock)}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              value={userState.email}
              name={EditUserPayloadKey.EMAIL}
              ref={register}
              onChange={(e) => inputHandler(e)}
            />
            {errors.email && (
              <span className={styles.errorSpan}>{errors.email.message}</span>
            )}
          </div>

          <div className={clsx(styles.password, styles.inputBlock)}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Password"
              value={userState.password}
              name={EditUserPayloadKey.PASSWORD}
              ref={register}
              onChange={(e) => inputHandler(e)}
            />
            {errors.password && (
              <span className={styles.errorSpan}>{errors.password.message}</span>
            )}
          </div>

          <div className={clsx(styles.password, styles.inputBlock)}>
            <label htmlFor="password">Retype Password</label>
            <input
              type="text"
              placeholder="Retype password"
              value={userState.retypePassword}
              name={EditUserPayloadKey.RETYPE_PASSWORD}
              ref={register}
              onChange={(e) => inputHandler(e)}
            />
            {errors.retypePassword && (
              <span className={styles.errorSpan}>
                {errors.retypePassword.message}
              </span>
            )}
          </div>

          <div className={clsx(styles.phone, styles.inputBlock)}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              value={userState.phone}
              name={EditUserPayloadKey.PHONE}
              ref={register}
              onChange={(e) => inputHandler(e)}
            />
            {errors.phone && (
              <span className={styles.errorSpan}>{errors.phone.message}</span>
            )}
          </div>

          <div className={clsx(styles.phone, styles.inputBlock)}>
            <label htmlFor="birthdate">Date of birth</label>
            <input
              type="date"
              value={userState.birthdate.slice(0, 10).toString()}
              name={EditUserPayloadKey.BIRTHDATE}
              ref={register}
              onChange={(e) => inputHandler(e)}
            />
            {errors.birthdate && (
              <span className={styles.errorSpan}>{errors.birthdate.message}</span>
            )}
          </div>

          <div className={styles.checkBox}>
            <input
              type="radio"
              name={EditUserPayloadKey.TYPE}
              checked={userState.type === UserType.DOCTOR}
              value={UserType.DOCTOR}
              onChange={onTypeChange}
              ref={register}
            />
          Doctor
          <input
              type="radio"
              name={EditUserPayloadKey.TYPE}
              checked={userState.type === UserType.PATIENT}
              value={UserType.PATIENT}
              onChange={onTypeChange}
              ref={register}
            />
          Patient
        </div>
          <div className={styles.checkBox}>
            <input
              type="radio"
              name={EditUserPayloadKey.SEX}
              checked={userState.sex === UserSex.MALE}
              value={UserSex.MALE}
              onChange={onSexChange}
              ref={register}
            />
          Male
          <input
              type="radio"
              name={EditUserPayloadKey.SEX}
              checked={userState.sex === UserSex.FEMALE}
              value={UserSex.FEMALE}
              onChange={onSexChange}
              ref={register}
            />
          Female
        </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
