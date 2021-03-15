import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CellValue } from 'react-table';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import { Column, IUser } from 'common/interfaces';
import {Table} from 'components/common';
import ActionsButton from './components/actions-button/actions-button';
import styles from './styles.module.scss';
import { DEFAULT_USER_INSTANCE } from 'components/admin-page/constants';
import { PropFunctionType } from './types/prop-function-void.type';

interface IProps{
  onUserDelete: PropFunctionType<string>,
  onFormShow: PropFunctionType<IUser>
}

const AdminTable: React.FC<IProps> = ({ onFormShow, onUserDelete }) => {
  const { allUsers } = useSelector(({ users }: RootState) => ({
    allUsers: users.users,
  }));
  const dispatch = useDispatch();
  const columns:Column[] = Object.keys(DEFAULT_USER_INSTANCE).map((identifier) => {
    return {
      Header:identifier,
      accessor:identifier
    }
  });
  columns.push({
    Header: 'Actions',
    accessor: 'actions',
    // eslint-disable-next-line react/display-name
    Cell: ({row}:CellValue) => (
      <ActionsButton user={row.original} onUserEdit={onFormShow} onUserDelete={onUserDelete}/>
    )
  });

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
