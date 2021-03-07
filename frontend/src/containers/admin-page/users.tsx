import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { Column } from 'common/interfaces';
import { UsersActionCreator } from 'store/slices';
import * as config from './config/config.json';
import Table from './table';
import styles from './styles.module.scss';

function Users() {
  const { AllUsers } = useSelector(({ users }: RootState) => ({
    AllUsers: users.users,
  }));
  const dispatch = useDispatch();

  const columns:Column[] = Object.keys(AllUsers[0]).map((identifier)=>{
    return {
      Header:identifier.charAt(0).toUpperCase() + identifier.slice(1),
      accessor:identifier
    }
  });
  columns.push({
    Header:"Actions",
    accessor:"actions"
  })

  useEffect(() => {
    dispatch(UsersActionCreator.getUsers(2));
  }, []);

  return (
    <>
      <Table columns={columns} data={AllUsers}/>
    </>
    // <div>
    //   {AllUsers.map((user: any) => (
    //     <div className={styles.row} key={Date()}>
    //       {config.entityType.map((type: string) => (
    //         <li className={styles.elem} key={Date()}>
    //           {user[type] ? user[type] : <ActionsButton/>}
    //         </li>
    //       ))}
    //     </div>
    //   ))}
    // </div>
  );
}

export default Users;
