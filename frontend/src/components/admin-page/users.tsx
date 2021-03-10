import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import { Column } from 'common/interfaces';
import Table from './table';


const checkIdentifierType = (identifier:string):Column =>{
    return {
      Header: identifier.charAt(0).toUpperCase() + identifier.slice(1),
      accessor: identifier,
      Cell : (props:any)=>{
        if(['birthdate','createdAt','updatedAt'].includes(identifier)){
          return props.cell.value.slice(0,10).replaceAll('-', '/')
        }else{
          return props.cell.value ? props.cell.value.toString() : ''
        }
      }
    };
}

const Users: React.FC = () => {
  const { AllUsers } = useSelector(({ users }: RootState) => ({
    AllUsers: users.users,
  }));
  const dispatch = useDispatch();
  const columns = Object.keys(AllUsers[0]).map((identifier) => {
    return checkIdentifierType(identifier)
  });
  columns.push({
    Header: 'Actions',
    accessor: 'actions',
  });

  useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
  }, []);

  const editUserHandler = (id: string) => {
    dispatch(UsersActionCreator.setEditUser(id));
  };
  const createUserHandler = () =>{
    console.log("CREATE");
  }
  const deleteUser = (id:string) =>{
    dispatch(UsersActionCreator.deleteUser(id));
  }

  return (
    <>
      <button onClick={createUserHandler}>Add user</button>
      <Table columns={columns} data={AllUsers} edit={editUserHandler} deleteUser={deleteUser} />
    </>
  );
};

export default React.memo(Users);
