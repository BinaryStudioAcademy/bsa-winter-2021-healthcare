import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import { IUser } from 'common/interfaces';
import Table from '../common/table/table';
import ActionsButton from './components/actions-button';
import { checkIdentifierType } from './helpers/check-identifier-type.helper';
import { CellValue } from 'react-table';
import styles from './styles.module.scss';
import { DEFAULT_USER_INSTANCE } from 'common/constants';

interface IProps{
  deleteUser: (id:string) => void,
  showForm: (user?:IUser) => void
}

const AdminTable: React.FC<IProps> = ({ showForm,deleteUser }) => {
  const { AllUsers } = useSelector(({ users }: RootState) => ({
    AllUsers: users.users,
  }));
  const dispatch = useDispatch();
  const columns = Object.keys(DEFAULT_USER_INSTANCE).map((identifier) => {
    return checkIdentifierType(identifier);
  });
  columns.push({
    Header: 'Actions',
    accessor: 'actions',
    Cell: function func ({row}:CellValue){
      return <ActionsButton value={row.original} edit={showForm} deleteUser={deleteUser}/>
    }
  });

  React.useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
  }, []);

  return (
    <>
    <div className={styles.tablePosition}>
      <Table columns={columns} data={AllUsers}/>
    </div>
    </>
  );
};

export default AdminTable;
