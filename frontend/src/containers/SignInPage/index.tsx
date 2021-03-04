import React, { useState } from 'react';
import { isValidEmail, isValidPassword } from 'healthcare-shared/helpers';

import styles from './signin.module.scss';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    isValidEmail(email) ? setEmailError(false) : setEmailError(true);
    isValidPassword(password)
      ? setPasswordError(false)
      : setPasswordError(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            {emailError && (
              <span className={styles.errorSpan}>Email is not valid!</span>
            )}
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            {passwordError && (
              <span className={styles.errorSpan}>
                Password must be six or more characters long and without spaces!
              </span>
            )}
          </div>
          <div className={styles.submit}>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignInPage;
