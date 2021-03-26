import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  SideMenu,
  UserInfo,
  Diagnoses,
} from './components';
import { EditUserPopup } from 'components/common';
import { IEditUserPayload, IUserWithPermissions } from 'common/interfaces';
import { UserType } from 'common/enums';
import { RootState } from 'common/types';
import { ProfileActionCreator } from 'store/slices';
import { ProfileTab } from './common/enums';

import styles from './styles.module.scss';
import Appointments from './components/appointments/appointments';

type RouteParam = {
  id: string;
};

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [profileTab, setProfileTab] = React.useState<ProfileTab>(
    ProfileTab.PERSONAL_INFO,
  );

  const { user } = useSelector(({ profile }: RootState) => ({
    user: profile.user,
  }));
  const dispatch = useDispatch();
  const { id } = useParams<RouteParam>();
  const isDoctor = user?.type === UserType.DOCTOR;

  const getProfileTab = (tab: ProfileTab) => {
    switch (tab) {
      case ProfileTab.DIAGNOSES: {
        return <Diagnoses userId={user?.id as string} />;
      }

      case ProfileTab.APPOINTMENTS: {
        return <Appointments />;
      }

      default:
        return (
          <>
            <UserInfo
              user={user as IUserWithPermissions}
              onEdit={handleTogglePopUp}
              isDoctor={isDoctor}
            />
          </>
        );
    }
  };

  React.useEffect(() => {
    dispatch(ProfileActionCreator.getUser(id));
    setProfileTab(ProfileTab.PERSONAL_INFO);
  }, [id]);

  const handleTogglePopUp = () => {
    setIsEditMode(!isEditMode);
  };

  const handleUserInfoEdit = (userData: IEditUserPayload) => {
    userData.id = user?.id;
    dispatch(ProfileActionCreator.editUserInProfile(userData));
    setIsEditMode(false);
  };

  return (
    <div className={styles.profileContainer}>
      <SideMenu isDoctor={isDoctor} onChangeProfileTab={setProfileTab} />
      {user && (
        <>
          <div className={styles.infoContainer}>
            {getProfileTab(profileTab)}
          </div>
          <EditUserPopup
            isShow={isEditMode}
            user={user}
            onEditUser={handleUserInfoEdit}
            onFormHide={handleTogglePopUp}
          />
        </>
      )}
    </div>
  );
};

export default Profile;
