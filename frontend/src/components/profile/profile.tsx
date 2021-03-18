import * as React from 'react';
import { SideMenu, UserInfo, Documents } from './components';
import { EditUserPopup } from 'components/common';
import { IEditUserPayload, IUserTypeDoctor } from 'common/interfaces';
import { UserType } from 'common/enums';
import { AuthActionCreator } from 'store/slices';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { useParams } from 'react-router';
import { UsersActionCreator } from 'store/slices';

import styles from './styles.module.scss';

type RouteParam = {
  id:string
};

const Profile: React.FC = () => {
  const [isEditeMode, setIsEditMode] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<IUserTypeDoctor>();
  const { currentUser } = useSelector(({ auth }: RootState) => ({
    currentUser: auth.user as IUserTypeDoctor,
  }));
  const { fetchedUser } = useSelector(({ users }: RootState) => ({
    fetchedUser: users.userInProfile as IUserTypeDoctor,
  }));
  const dispatch = useDispatch();
  const { id } = useParams<RouteParam>();
  const isCurrentUser = currentUser.id === id;
  const isDoctor = user?.type === UserType.DOCTOR;
  React.useEffect(()=>{ 
    if (isCurrentUser) {
      setUser(currentUser);
    } else {      
      dispatch(UsersActionCreator.getUser(id));    
    }   
  },[]);
  React.useEffect(()=>{
    setUser(fetchedUser);
  },[fetchedUser]);
  
  const handleOpenPopUp = () => {
    setIsEditMode(true);
  };
  const handleUserInfoEdit = (userData:IEditUserPayload) => {
    userData.id = user?.id;
    dispatch(AuthActionCreator.editCurrentUser(userData));
    setIsEditMode(false);
  };
  return (
    <>
      {user ? <div className={styles.profileContainer}>
        <SideMenu />
        <div className={styles.infoContainer}>
          <UserInfo user ={user} onEdit={handleOpenPopUp}/>
          {isDoctor && <Documents document={user.doctor.document}/>}
        </div>        
        {isEditeMode && <EditUserPopup
          user={user}
          onEditUser={handleUserInfoEdit}
          onFormHide={() => setIsEditMode(false)}
        />}        
      </div> : <div>Loading</div>}
    </>
  );
};

export default Profile;
