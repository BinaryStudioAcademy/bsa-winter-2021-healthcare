import * as React from 'react';
import styles from './not-found.module.scss';
import iconLogo from 'assets/images/icon-logo.svg';
import clsx from 'clsx';

const NotFound: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={clsx(styles.notFoundContainer, styles.flexColumnCentered)}>
        <h1 className={styles.textNotFound}><span className={styles.text404}>404</span> Page not found</h1>
      </div>
      <footer className={clsx(styles.footerContainer, styles.flexColumnCentered)}>
        <img src={iconLogo} height="31.76px" width="35px" loading="lazy" alt="HealthCareLogo" />
        <p>{currentYear} <span>&#169;</span> HealthCare</p>
      </footer>
    </>
  )
}

export default NotFound;
