import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { RegisterPayloadKey, UserSex, UserType } from 'common/enums';
import {
  IRegisterPayload,
  IUser,
} from 'common/interfaces';
import { userRegister as validationUserSchema } from 'helpers';
import styles from './styles.module.scss';

interface IProps {
  user?: IUser,
  func: (data: IRegisterPayload) => void,
  hideForm: () => void,
}

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.SEX]: UserSex.MALE,
  [RegisterPayloadKey.BIRTH_DATE]: '',
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.TYPE]: UserType.PATIENT,
  [RegisterPayloadKey.IMAGE_PATH]: 'https://www.pikpng.com/pngl/b/80-805523_default-avatar-svg-png-icon-free-download-264157.png'
};


const CreateUser: React.FC<IProps> = ({ user, func, hideForm }) => {
  const [userState, setUserState] = useState(DEFAULT_VALUES);
  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };
  console.log(errors);
  const onSubmit = (data: IRegisterPayload) => func(data);
  const closeEdit = () => hideForm();

  useEffect(() => {
    user ? setUserState({ ...userState, ...user }) : null;
  }, []);

  return (
    <div className={styles.editContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.editForm}>
      <div className={styles.header}>
          <h2 className={styles.title}>Add user</h2>
          <button className={styles.closeButton} onClick={closeEdit} type="button">
            &#10060;
        </button>
        </div>
        <hr style={{width:'100%'}}/>
        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.NAME}>Name</label>
          <input
            type="text"
            placeholder="Name"
            name={RegisterPayloadKey.NAME}
            ref={register}
          />
          {errors.name && <span className={styles.errorSpan}>{errors.name.message}</span>}
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.SURNAME}>Surname</label>
          <input
            type="text"
            placeholder="Surname"
            name={RegisterPayloadKey.SURNAME}
            ref={register}
          />
          {errors.surname && <span className={styles.errorSpan}>{errors.surname.message}</span>}
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.SEX}>Gender</label>
          <select name={RegisterPayloadKey.SEX} ref={register}>
            <option value={UserSex.FEMALE}>female</option>
            <option value={UserSex.MALE}>male</option>
          </select>
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.BIRTH_DATE}>Birthday</label>
          <input type="date" name={RegisterPayloadKey.BIRTH_DATE} ref={register} />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.EMAIL}>E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            name={RegisterPayloadKey.EMAIL}
            ref={register}
          />
          {errors.email && <span className={styles.errorSpan}>{errors.email.message}</span>}
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.PASSWORD}>Password</label>
          <input
            type="password"
            placeholder="Password"
            name={RegisterPayloadKey.PASSWORD}
            ref={register}
          />
          {errors.password && <span className={styles.errorSpan}>{errors.password.message}</span>}
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.RETYPE_PASSWORD}>Retype Password</label>
          <input
            type="password"
            placeholder="Retype password"
            name={RegisterPayloadKey.RETYPE_PASSWORD}
            ref={register}
          />
          {errors.retypePassword && <span className={styles.errorSpan}>{errors.retypePassword.message}</span>}
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.PHONE}>Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            name={RegisterPayloadKey.PHONE}
            ref={register}
          />
          {errors.phone && <span className={styles.errorSpan}>{errors.phone.message}</span>}
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor={RegisterPayloadKey.TYPE}>Status</label>
          <select name={RegisterPayloadKey.TYPE} ref={register}>
            <option value={UserType.PATIENT}>Patient</option>
            <option value={UserType.DOCTOR}>Doctor/Nurse</option>
          </select>
        </div>

        {/* <div className={styles.inputBlock}>
  <input type="button" value="Upload documents" />
  <label>
    Upload file:
    <input type="file" multiple />
  </label>
  <span>file1.pdf</span>
  <span>file2.jpg</span>
</div> */}

        <div className={styles.inputBlock}>
          <input
            type="hidden"
            name={RegisterPayloadKey.IMAGE_PATH}
            ref={register}
            value={userState.imagePath}
          />
          {errors.imagePath && <span className={styles.errorSpan}>{errors.imagePath.message}</span>}
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateUser;
