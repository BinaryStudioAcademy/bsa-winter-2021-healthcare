import * as React from 'react';
import { SideMenu, UserInfo, Documents } from './components';
import { EditUserPopup, Modal } from 'components/common';
import { IEditUserPayload, IUserTypeDoctor } from 'common/interfaces';
import { UserType } from 'common/enums';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { useParams } from 'react-router';
import { ProfileActionCreator } from 'store/slices';

import styles from './styles.module.scss';

type RouteParam = {
  id:string
};

const Profile: React.FC = () => {
  const [isEditeMode, setIsEditMode] = React.useState<boolean>(false); 
  const { user } = useSelector(({ profile }: RootState) => ({
    user: profile.user,
  }));
  const dispatch = useDispatch();
  const { id } = useParams<RouteParam>();  
  const isDoctor = user?.type === UserType.DOCTOR;
  React.useEffect(()=>{
    dispatch(ProfileActionCreator.getUser(id));    
  },[]);
  
  const handleTogglePopUp = () => {
    setIsEditMode(!isEditeMode);
  };
  const handleUserInfoEdit = (userData:IEditUserPayload) => {
    userData.id = user?.id;
    dispatch(ProfileActionCreator.editeUserInProfile(userData));
    setIsEditMode(false);
  };
  return (    
    <div className={styles.profileContainer}>
      <SideMenu />
      { user &&
        <>
          <div className={styles.infoContainer}>
            <UserInfo user ={user} onEdit={handleTogglePopUp} />
            {isDoctor && <Documents document={(user as IUserTypeDoctor).doctor.document}/>}
          </div>
          <Modal isShow={isEditeMode}>
            <EditUserPopup
              user={user}          
              onEditUser={handleUserInfoEdit}
              onFormHide={handleTogglePopUp}
            />
          </Modal> 
        </>
      }               
    </div>    
  );
};

export default Profile;
