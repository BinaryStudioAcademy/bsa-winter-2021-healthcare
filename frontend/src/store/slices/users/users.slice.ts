import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'services';
import { ReducerName, UserSex, UserType } from 'common/enums';
import { AppThunk } from 'common/types';
import { IUser, IRegisterPayload } from 'common/interfaces';

interface IState {
  value: number;
  users: IUser[];
  editUser?: IUser;
}
const DEFAULT_USER_INSTANCE = {
  'id': '',
  'name': '',
  'surname': '',
  'sex': UserSex.FEMALE,
  'type': UserType.DOCTOR,
  'birthdate': new Date().toString(),
  'phone': '',
  'password': '',
  'email': '',
  'imagePath': '',
  'diagnosis': '',
  'createdAt': '',
  'updatedAt': '',
};

const initialState: IState = {
  value: 0,
  users: [
    {
      id: '1',
      name: '1',
      surname: '1',
      sex: UserSex.FEMALE,
      type: UserType.DOCTOR,
      birthdate: 'asd',
      phone: '4',
      password: '5',
      email: '6',
      imagePath: '7',
      diagnosis: '9',
      createdAt: 'asd',
      updatedAt: 'asd',
    },
  ],
};

const { reducer, actions } = createSlice({
  name: ReducerName.COUNTER,
  initialState,
  reducers: {
    setEditUser: (state, action: PayloadAction<string>) => {
      state.editUser = {
        ...state.users
          .filter((user: IUser) => user.id === action.payload)[0],
      };
    },
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
const addUser = (userInfo: IRegisterPayload): AppThunk => (dispatch) => {
  const asyncFetch = async () => {
    await userApi.registerUser({...DEFAULT_USER_INSTANCE,...userInfo});
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
