import React from 'react';
import clsx from 'clsx';

import styles from './side-menu-item.module.scss';

type Props = {
  iconStyle: string;
  title: string;
  onChangeProfileTab: React.MouseEventHandler<HTMLDivElement>;
};

const SideMenuItem: React.FC<Props> = ({
  iconStyle,
  title,
  onChangeProfileTab,
}) => {
  return (
    <div className={styles.menuItem} onClick={onChangeProfileTab}>
      <span className={clsx(styles.icon, iconStyle)}></span>
      <span className={styles.menuText}>{title}</span>
    </div>
  );
};

export default SideMenuItem;
