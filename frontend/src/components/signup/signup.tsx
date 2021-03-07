import * as React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

import { Sign } from "../common";

import { RegisterPayloadKey, validationUserSchema, IRegisterPayload } from 'healthcare-shared'

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.IS_STAFF]: false
};

const SignUp: React.FC = () => {

  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data: IRegisterPayload) => console.log(data);

  return (

    <Sign>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            name={RegisterPayloadKey.NAME}
            ref={register}
          />
          {errors.name && <span className={styles.errorSpan}>{errors.name.message}</span>}
        </div>

        <div className={styles.surname}>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            placeholder="Surname"
            name={RegisterPayloadKey.SURNAME}
            ref={register}
          />
          {errors.surname && <span className={styles.errorSpan}>{errors.surname.message}</span>}
        </div>

        <div className={styles.email}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            name={RegisterPayloadKey.EMAIL}
            ref={register}
          />
          {errors.email && <span className={styles.errorSpan}>{errors.email.message}</span>}
        </div>

        <div className={styles.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name={RegisterPayloadKey.PASSWORD}
            ref={register}
          />
          {errors.password && <span className={styles.errorSpan}>{errors.password.message}</span>}
        </div>

        <div className={styles.password}>
          <label htmlFor="password">Retype Password</label>
          <input
            type="password"
            placeholder="Retype password"
            name={RegisterPayloadKey.RETYPE_PASSWORD}
            ref={register}
          />
          {errors.retypePassword && <span className={styles.errorSpan}>{errors.retypePassword.message}</span>}
        </div>

        <div className={styles.phone}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            name={RegisterPayloadKey.PHONE}
            ref={register}
          />
          {errors.phone && <span className={styles.errorSpan}>{errors.phone.message}</span>}
        </div>

        {/* <div className={styles.uploadFiles}>
          <label htmlFor="name">Avatar</label>
          <input
            type="file"
            placeholder="Avatar"
            name={RegisterPayloadKey.AVATAR}
            ref={register}
          />
        </div> */}

        <div className={styles.checkBox}>
          <input
            type="checkbox"
            name={RegisterPayloadKey.IS_STAFF}
            ref={register}
          />
          <label htmlFor="isStaff">Doctor/Nurse</label>
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
    </Sign>

  );
};

export default SignUp;
