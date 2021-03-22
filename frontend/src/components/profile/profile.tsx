import * as React from 'react';
import { SideMenu, UserInfo, Documents } from './components';
import { EditUserPopup } from 'components/common';
import { IEditUserPayload, IUserTypeDoctor } from 'common/interfaces';
import { UserType } from 'common/enums';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { useParams } from 'react-router';
import { ProfileActionCreator } from 'store/slices';

import styles from './styles.module.scss';

type RouteParam = {
  id: string;
};

const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const { user } = useSelector(({ profile }: RootState) => ({
    user: profile.user,
  }));
  const dispatch = useDispatch();
  const { id } = useParams<RouteParam>();
  const isDoctor = user?.type === UserType.DOCTOR;
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
      <SideMenu />
      {user && (
        <>
          <div className={styles.infoContainer}>
            <UserInfo user={user} onEdit={handleTogglePopUp} />
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