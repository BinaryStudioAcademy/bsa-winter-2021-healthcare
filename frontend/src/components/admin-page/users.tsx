import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
// import { Column } from 'common/interfaces';
import Table from './table';

//If type is not the string use this function
// const checkIdentifierType = (identifier:string):Column =>{
//     return {
//       Header: identifier.charAt(0).toUpperCase() + identifier.slice(1),
//       accessor: identifier,
//       Cell : (props:any)=>{
//         if(['birthdate','createdAt','updatedAt'].includes(identifier)){
//           return props.cell.value.toLocaleDateString()
//         }else{
//           return props.cell.value.toString()
//         }
//       }
//     };
// }

const Users: React.FC = () => {
  const history = useHistory();
  const { AllUsers } = useSelector(({ users }: RootState) => ({
    AllUsers: users.users,
  }));
  const dispatch = useDispatch();
  const columns = Object.keys(AllUsers[0]).map((identifier) => {
    return {
      Header: identifier.charAt(0).toUpperCase() + identifier.slice(1),
      accessor: identifier,
    }
  });
  columns.push({
    Header: 'Actions',
    accessor: 'actions',
  });

  useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
  }, []);

  const editUserHandler = (id: string) => {
    history.push(AppRoute.EDIT_USER);
    dispatch(UsersActionCreator.setEditUser(id));
  };
  const createUserHandler = () =>{
    history.push(AppRoute.CREATE_USER);
  }

  return (
    <>
      <button onClick={createUserHandler}>Add user</button>
      <Table columns={columns} data={AllUsers} edit={editUserHandler} />
    </>
  );
};

export default Users;
