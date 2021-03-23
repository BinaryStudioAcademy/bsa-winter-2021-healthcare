import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  SideMenu,
  UserInfo,
  Documents,
  Diagnoses,
  AddClinic,
} from './components';
import { EditUserPopup } from 'components/common';
import {
  IEditUserPayload,
  IUserTypeDoctor,
  IUserWithPermissions,
} from 'common/interfaces';
import { UserType } from 'common/enums';
import { RootState } from 'common/types';
import { ProfileActionCreator } from 'store/slices';

import styles from './styles.module.scss';
import { ProfileTab } from './common/enums';

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
        return <Diagnoses user={user as IUserWithPermissions} />;
      }

      default:
        return (
          <>
            <UserInfo
              user={user as IUserWithPermissions}
              onEdit={handleTogglePopUp}
            />
            <AddClinic user={user as IUserTypeDoctor} />
          </>
        );
    }
  };

  React.useEffect(() => {
    dispatch(ProfileActionCreator.getUser(id));
  }, []);

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
      <SideMenu onChangeProfileTab={setProfileTab} />
      {user && (
        <>
          <div className={styles.infoContainer}>
            {getProfileTab(profileTab)}
            {isDoctor && (
              <Documents document={(user as IUserTypeDoctor).doctor.document} />
            )}
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
