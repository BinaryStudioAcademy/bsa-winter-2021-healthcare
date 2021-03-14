import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IUser } from 'common/interfaces';

interface IState {
  users: IUser[];
}

const initialState: IState = {
  users: [],
};

const { reducer, actions } = createSlice({
  name: ReducerName.USERS,
  initialState,
  reducers: {
    addUsers:(state, action: PayloadAction<IUser[]>) => {

      state.users = [...state.users, ...action.payload];
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

const getUsers = (): AppThunk => async (dispatch) => {
  const response = await userApi.getUsers();
  dispatch(actions.addUsers(response))
};
const getUser = (id:string): AppThunk => async () => {
    await userApi.getUser(id);
};
const editUser = (userInfo: IUser): AppThunk => async (dispatch) => {
    const response = await userApi.editUser(userInfo.id as string, {...userInfo});
    response ? dispatch(actions.editUser({id:userInfo.id, data:{...userInfo}})) : null;
};
const addUser = (userInfo: IUser): AppThunk => async (dispatch) => {
    const response = await userApi.registerUser(userInfo);
    dispatch(actions.addUsers([response]));
};
const deleteUser = (id: string): AppThunk => async (dispatch) => {
  dispatch(actions.deleteUser(id));
  await userApi.deleteUser(id);
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