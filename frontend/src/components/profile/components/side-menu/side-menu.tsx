import React from 'react';
import styles from './styles.module.scss';
import { ProfileTab } from 'components/profile/common';
import { SideMenuItem } from 'components/profile/components';

type Props = {
  onChangeProfileTab: React.Dispatch<React.SetStateAction<ProfileTab>>;
};

const SideMenu: React.FC<Props> = ({ onChangeProfileTab }) => {
  const handleChangeTabToPersonalInfo = () => {
    onChangeProfileTab(ProfileTab.PERSONAL_INFO);
  };

  const handleChangeTabToDiagnoses = () => {
    onChangeProfileTab(ProfileTab.DIAGNOSES);
  };

  return (
    <div className={styles.menuContainer}>
      <span className={styles.infoHeader}>My Profile</span>
      <SideMenuItem
        iconStyle={styles.person}
        title="Personal Information"
        onChangeProfileTab={handleChangeTabToPersonalInfo}
      />
      <SideMenuItem
        iconStyle={styles.clinic}
        title="Diagnoses"
        onChangeProfileTab={handleChangeTabToDiagnoses}
      />
    </div>
  );
};

export default SideMenu;
