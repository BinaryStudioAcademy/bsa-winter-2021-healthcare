import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import { IUser } from 'common/interfaces';
import Table from '../common/table/table';
import ActionsButton from './actions-button';
import { checkIdentifierType } from './helpers/check-identifier-type.helper';

interface IProps{
  deleteUser: (id:string) => void,
  showForm: (user?:IUser) => void
}

const Users: React.FC<IProps> = ({ showForm,deleteUser }) => {
  const { AllUsers } = useSelector(({ users }: RootState) => ({
    AllUsers: users.users,
  }));
  const dispatch = useDispatch();
  const columns = Object.keys(AllUsers[0]).map((identifier) => {
    return checkIdentifierType(identifier);
  });
  columns.push({
    Header: 'Actions',
    accessor: 'actions',
    Cell: function func ({row}:any){
      return <ActionsButton value={row.original} edit={showForm} deleteUser={deleteUser}/>
    }
  });

  React.useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
  }, []);

  const showFormHandler = ():void => showForm();

  return (
    <>
      <button onClick={showFormHandler}>Add user</button>
      <Table columns={columns} data={AllUsers}/>
    </>
  );
};

export default React.memo(Users);
