import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'services';
import { ReducerName, UserSex, UserType } from 'common/enums';
import { AppThunk } from 'common/types';
import { IUser } from 'common/interfaces';

interface IState {
  value: number;
  users: IUser[];
  editUser?: IUser;
}

const initialState: IState = {
  value: 0,
  users: [
    {
      id: '1',
      name: 'Petr',
      surname: 'Petrenko',
      sex: UserSex.MALE,
      type: UserType.DOCTOR,
      birthdate: '1978/2/8',
      phone: '+380976123123',
      password: '123456',
      email: 'Petrenko@gmail.com',
      imagePath: '',
      diagnosis: '',
      createdAt: '2021/03/09',
      updatedAt: '2021/03/09',
    },
  ],
};

const { reducer, actions } = createSlice({
  name: ReducerName.COUNTER,
  initialState,
  reducers: {
    addUsers:(state, action: PayloadAction<IUser[]>) => {

      state.users = [state.users[0], ...action.payload];
    },
    editUser:(state, action: PayloadAction<{id:string|undefined,data:IUser}>) => {
      const id = action.payload.id;
      state.users = state.users.map((user:IUser)=> user.id === id ? action.payload.data : user);
    },
    deleteUser:(state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user:IUser)=> user.id !== action.payload);
    }
  },
});

const getUsers = (): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    const response = await userApi.getUsers();
    dispatch(actions.addUsers(response))
  };
  asyncFetch();
};
const getUser = (id:string): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    const response = await userApi.getUser(id);
  };
  asyncFetch();
};
const editUser = (userInfo: IUser): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    const response = await userApi.editUser(userInfo.id as string, {...userInfo});
    response ? dispatch(actions.editUser({id:userInfo.id, data:{...userInfo}})) : null;
  };
  asyncFetch()
};
const addUser = (userInfo: IUser): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    await userApi.registerUser({...userInfo, birthdate:new Date().toString()});
  };
  asyncFetch();
};
const deleteUser = (id: string): AppThunk => (dispatch) => {
  dispatch(actions.deleteUser(id));
  const asyncFetch = async () => {
    await userApi.deleteUser(id);
  };
  asyncFetch();
};

const UsersActionCreator = {
  ...actions,
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
};

export { UsersActionCreator, reducer };
