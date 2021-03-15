import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import { Column, IUser } from 'common/interfaces';
import {Table} from 'components/common';
import styles from './styles.module.scss';
import { PropFunctionType } from 'components/admin-page/components/types';
import { getRows } from './helpers';

interface IProps{
  onUserDelete: PropFunctionType<string>,
  onFormShow: PropFunctionType<IUser>
}

const AdminTable: React.FC<IProps> = ({ onFormShow, onUserDelete }) => {
  const { allUsers } = useSelector(({ users }: RootState) => ({
    allUsers: users.users,
  }));
  const dispatch = useDispatch();
  const columns:Column[] = getRows({onFormShow, onUserDelete});

  React.useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
  }, []);

  return (
    <>
      <div className={styles.tablePosition}>
        <Table columns={columns} data={allUsers}/>
      </div>
    </>
  );
};

export default AdminTable;
