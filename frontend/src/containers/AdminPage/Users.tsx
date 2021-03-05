import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import * as config from './config/config.json';
import ActionsButton from './ActionsButton';
import styles from './styles.module.scss';

function Users() {
  const { AllUsers } = useSelector(({ users }: RootState) => ({
    AllUsers: users,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UsersActionCreator.getUsers(2))
  }, [])

  return (
    <div>
      {AllUsers.map((user: any) => (
        <div className={styles.row} key={Date()}>
          {config.entityType.map((type: string) => (
            <li className={styles.elem} key={Date()}>
              {user[type] ? user[type] : <ActionsButton/>}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Users;
