import React from 'react';
import styles from './styles.module.scss';
import { ProfileTab } from 'components/profile/common';
import { SideMenuItem } from 'components/profile/components';

type Props = {
  isDoctor: boolean;
  onChangeProfileTab: React.Dispatch<React.SetStateAction<ProfileTab>>;
};

const SideMenu: React.FC<Props> = ({ isDoctor, onChangeProfileTab }) => {
  const handleChangeTabToPersonalInfo = () => {
    onChangeProfileTab(ProfileTab.PERSONAL_INFO);
  };

  const handleChangeTabToDiagnoses = () => {
    onChangeProfileTab(ProfileTab.DIAGNOSES);
  };

  const handleChangeTabToAppointments = () => {
    onChangeProfileTab(ProfileTab.APPOINTMENTS);
  };

  return (
    <div className={styles.menuContainer}>
      <span className={styles.infoHeader}>Profile</span>
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
      {isDoctor && (
        <SideMenuItem
          iconStyle={styles.appointment}
          title="Appointments"
          onChangeProfileTab={handleChangeTabToAppointments}
        />
      )}
    </div>
  );
};

export default SideMenu;
