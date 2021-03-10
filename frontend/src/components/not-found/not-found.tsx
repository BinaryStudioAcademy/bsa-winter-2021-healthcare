import * as React from 'react';
import styles from './not-found.module.scss';
import iconLogo from 'assets/images/icon-logo.svg';
import clsx from 'clsx';

const NotFound: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={clsx(styles.notFoundContainer, styles.flexColumnCentered)}>
        <p className={styles.text404}>404</p>
        <p className={styles.textNotFound}>Page not Found</p>
      </div>
      <footer className={clsx(styles.footerContainer, styles.flexColumnCentered)}>
        <img src={iconLogo} className={styles.iconCareLogo} alt="icon-logo" />
        <p>{currentYear} <span>&#169;</span> HealthCare</p>
      </footer>
    </>
  )
}

export default NotFound;
