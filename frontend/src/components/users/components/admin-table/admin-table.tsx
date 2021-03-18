import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import { Column } from 'common/interfaces';
import { Table } from 'components/common';
import styles from './styles.module.scss';
import { HideFormCb, DeleteUserCb } from 'components/users/common/types';
import { getRows } from './helpers';

type Props = {
  onUserDelete: DeleteUserCb;
  onFormShow: HideFormCb;
};

const AdminTable: React.FC<Props> = ({ onFormShow, onUserDelete }) => {
  const { allUsers } = useSelector(({ users }: RootState) => ({
    allUsers: users.users,
  }));
  const dispatch = useDispatch();
  const columns: Column[] = getRows({ onFormShow, onUserDelete });

  React.useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
  }, []);

  return (
    <>
      <div className={styles.tablePosition}>
        <Table columns={columns} data={allUsers} />
      </div>
    </>
  );
};

export default AdminTable;
