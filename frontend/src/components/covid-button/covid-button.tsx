import * as React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { AppRoute, ButtonColor, ButtonStyleType } from 'common/enums';
import { Button } from 'components/common';
import styles from './styles.module.scss';

const CovidButton: React.FC = () => {
  const location = useLocation();
  const isMapPage = location.pathname == AppRoute.MAP;

  return isMapPage ? null : (
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
};

export default CovidButton;
