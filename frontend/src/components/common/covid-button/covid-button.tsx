import * as React from 'react';
import { AppRoute, ButtonColor, ButtonStyleType } from 'common/enums';
import { Button } from 'components/common';
import styles from './styles.module.scss';

const CovidButton: React.FC = () => (
  <div className={styles.covidButtonBlock}>
    <Button
      styleType={ButtonStyleType.EXTRA_LARGE_ROUND}
      color={ButtonColor.RED}
      label={'COVID-19'}
      hasHiddenLabel={false}
      href={AppRoute.MAP}
    />
  </div>
);

export default CovidButton;
