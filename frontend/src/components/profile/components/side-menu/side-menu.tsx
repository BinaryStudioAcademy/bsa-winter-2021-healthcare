import React from 'react';
import styles from './styles.module.scss';
import { ProfileTab } from 'common/enums/profile';
import { SideMenuItem } from '../side-menu-item/side-menu-item';

type Props = {
  onChangeProfileTab: React.Dispatch<React.SetStateAction<ProfileTab>>;
};

const SideMenu: React.FC<Props> = ({ onChangeProfileTab }) => {
  return (
    <div className={styles.menuContainer}>
      <span className={styles.infoHeader}>My Profile</span>
      <SideMenuItem
        iconStyle={styles.person}
        title="Personal Information"
        onChangeProfileTab={() => onChangeProfileTab(ProfileTab.PERSONAL_INFO)}
      />
      <SideMenuItem
        iconStyle={styles.clinic}
        title="Diagnoses"
        onChangeProfileTab={() => onChangeProfileTab(ProfileTab.DIAGNOSES)}
      />
    </div>
  );
};

export default SideMenu;
