import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

import { RegisterPayloadKey, IRegisterPayload, UserType, UserSex } from 'healthcare-shared'
import { userRegister as validationUserSchema } from 'validation-schemas'

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.SEX]: UserSex.MALE,
  [RegisterPayloadKey.BIRTH_DATE]: new Date(),
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.TYPE]: UserType.PATIENT,
  [RegisterPayloadKey.IMAGE_PATH]: ''
};

const FormSignUp: React.FC = () => {

  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data: IRegisterPayload) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h2>Sign Up</h2>

      <div className={styles.name}>
        <label htmlFor={RegisterPayloadKey.NAME}>Name</label>
        <input
          type="text"
          placeholder="Name"
          name={RegisterPayloadKey.NAME}
          ref={register}
        />
        {errors.name && <span className={styles.errorSpan}>{errors.name.message}</span>}
      </div>

      <div className={styles.surname}>
        <label htmlFor={RegisterPayloadKey.SURNAME}>Surname</label>
        <input
          type="text"
          placeholder="Surname"
          name={RegisterPayloadKey.SURNAME}
          ref={register}
        />
        {errors.surname && <span className={styles.errorSpan}>{errors.surname.message}</span>}
      </div>

      <div className={styles.select}>
        <label htmlFor={RegisterPayloadKey.SEX}>Gender</label>
        <select name={RegisterPayloadKey.SEX} ref={register}>
          <option value={UserSex.FEMALE}>female</option>
          <option value={UserSex.MALE}>male</option>
        </select>
      </div>

      <div className={styles.date}>
        <label htmlFor={RegisterPayloadKey.BIRTH_DATE}>Birthday</label>
        <input type="date" name={RegisterPayloadKey.BIRTH_DATE} ref={register} />
      </div>

      <div className={styles.email}>
        <label htmlFor={RegisterPayloadKey.EMAIL}>E-mail</label>
        <input
          type="email"
          placeholder="E-mail"
          name={RegisterPayloadKey.EMAIL}
          ref={register}
        />
        {errors.email && <span className={styles.errorSpan}>{errors.email.message}</span>}
      </div>

      <div className={styles.password}>
        <label htmlFor={RegisterPayloadKey.PASSWORD}>Password</label>
        <input
          type="password"
          placeholder="Password"
          name={RegisterPayloadKey.PASSWORD}
          ref={register}
        />
        {errors.password && <span className={styles.errorSpan}>{errors.password.message}</span>}
      </div>

      <div className={styles.password}>
        <label htmlFor={RegisterPayloadKey.RETYPE_PASSWORD}>Retype Password</label>
        <input
          type="password"
          placeholder="Retype password"
          name={RegisterPayloadKey.RETYPE_PASSWORD}
          ref={register}
        />
        {errors.retypePassword && <span className={styles.errorSpan}>{errors.retypePassword.message}</span>}
      </div>

      <div className={styles.phone}>
        <label htmlFor={RegisterPayloadKey.PHONE}>Phone</label>
        <input
          type="tel"
          placeholder="Phone"
          name={RegisterPayloadKey.PHONE}
          ref={register}
        />
        {errors.phone && <span className={styles.errorSpan}>{errors.phone.message}</span>}
      </div>

      <div className={styles.select}>
        <label htmlFor={RegisterPayloadKey.TYPE}>Status</label>
        <select name={RegisterPayloadKey.TYPE} ref={register}>
          <option value={UserType.PATIENT}>Patient</option>
          <option value={UserType.DOCTOR}>Doctor/Nurse</option>
        </select>
      </div>

      {/* <div className={styles.uploadFiles}>
        <input type="button" value="Upload documents" />
        <label>
          Upload file:
          <input type="file" multiple />
        </label>
        <span>file1.pdf</span>
        <span>file2.jpg</span>
      </div> */}

      <button type="submit">Sign Up</button>

    </form>
  );
};

export { FormSignUp };
