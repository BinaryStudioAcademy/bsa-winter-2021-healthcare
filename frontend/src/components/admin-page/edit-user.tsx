import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { RootState } from 'common/types';
import {
  RegisterPayloadKey,
  validationUserSchema,
  IRegisterPayload,
} from 'healthcare-shared';
import styles from './styles.module.scss';
import { UsersActionCreator } from 'store/slices';

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.IS_STAFF]: false,
};

const EditUser: React.FC = () =>{
  const { user } = useSelector(({ users }: RootState) => ({
    user: users.editUser.user,
  }));
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const onSubmit = (data: IRegisterPayload) => console.log(data);
  const closeEdit = () => dispatch(UsersActionCreator.showEdit(""));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.editForm}>
      <div className={styles.inputElements}>
        <div className={styles.inputRow}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            name={RegisterPayloadKey.NAME}
            ref={register}
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
            name={RegisterPayloadKey.SURNAME}
            ref={register}
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
            name={RegisterPayloadKey.EMAIL}
            ref={register}
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
            name={RegisterPayloadKey.PASSWORD}
            ref={register}
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
            name={RegisterPayloadKey.RETYPE_PASSWORD}
            ref={register}
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
            name={RegisterPayloadKey.PHONE}
            ref={register}
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

      <div className={styles.editButtons}>
        <button type="submit">Save</button>
        <button onClick={closeEdit} type="button">Close</button>
      </div>
    </form>
  );
}

export default EditUser;
