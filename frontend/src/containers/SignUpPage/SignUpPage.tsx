import * as React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "yup-phone";

import styles from './styles.module.scss';

enum RegisterPayloadKey {
  NAME = 'name',
  SURNAME = 'surname',
  EMAIL = 'email',
  PASSWORD = 'password',
  RETYPE_PASSWORD = 'retypePassword',
  PHONE = 'phone',
  IS_STAFF = 'isStaff',
  // AVATAR = 'avatar'
}

interface IRegisterPayload {
  [RegisterPayloadKey.NAME]: string;
  [RegisterPayloadKey.SURNAME]: string;
  [RegisterPayloadKey.EMAIL]: string;
  [RegisterPayloadKey.PASSWORD]: string;
  [RegisterPayloadKey.RETYPE_PASSWORD]: string;
  [RegisterPayloadKey.PHONE]: string;
  [RegisterPayloadKey.IS_STAFF]: boolean;
}

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.IS_STAFF]: false
};

const validationSchema = yup.object().shape({
  [RegisterPayloadKey.NAME]: yup.string().required(),
  [RegisterPayloadKey.SURNAME]: yup.string().required(),
  [RegisterPayloadKey.EMAIL]: yup.string().email(),
  [RegisterPayloadKey.PASSWORD]: yup.string().required().min(6),
  [RegisterPayloadKey.RETYPE_PASSWORD]: yup.string().oneOf([yup.ref(RegisterPayloadKey.PASSWORD), null], 'Passwords must match'),
  [RegisterPayloadKey.PHONE]: yup.string().phone().required(),
  [RegisterPayloadKey.IS_STAFF]: yup.boolean().required(),
  // [RegisterPayloadKey.AVATAR]: yup.mixed()
});


const SignUpPage: React.FC = () => {

  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data: IRegisterPayload) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} >

          {/* <div className={styles.uploadFiles}>
            <label htmlFor="name">avatar</label>
            <input
              type="file"
              placeholder="Avatar"
              name={RegisterPayloadKey.AVATAR}
              ref={register}
            />
          </div> */}

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
              type="text"
              placeholder="E-mail"
              name={RegisterPayloadKey.EMAIL}
            />
            {errors.email && <span className={styles.errorSpan}>{errors.email.message}</span>}
          </div>

          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
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
              type="text"
              placeholder="Phone"
              name={RegisterPayloadKey.PHONE}
              ref={register}
            />
            {errors.phone && <span className={styles.errorSpan}>{errors.phone.message}</span>}
          </div>

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

          <input type="submit" value="Sign Up" />

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
