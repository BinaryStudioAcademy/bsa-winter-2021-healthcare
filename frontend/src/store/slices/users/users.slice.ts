import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification as notificationService, userApi } from 'services';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { IEditUserPayload, IUser } from 'common/interfaces';
import { HttpError } from 'exceptions';

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
    addUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = [...state.users, ...action.payload];
    },
    editUser: (
      state,
      action: PayloadAction<{ id: string | undefined; data: IUser }>,
    ) => {
      const id = action.payload.id;
      state.users = state.users.map((user: IUser) =>
        user.id === id ? action.payload.data : user,
      );
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(
        (user: IUser) => user.id !== action.payload,
      );
    },
  },
});

const getUsers = (): AppThunk => async (dispatch) => {
  try {
    const response = await userApi.getUsers();
    dispatch(actions.addUsers(response));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const editUser = (userInfo: IEditUserPayload): AppThunk => async (dispatch) => {
  try {
    const response: IUser = await userApi.editUser(
      userInfo.id as string,
      userInfo,
    );
    response
      ? dispatch(actions.editUser({ id: userInfo.id, data: response }))
      : null;
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const addUser = (userInfo: IUser): AppThunk => async (dispatch) => {
  try {
    const response = await userApi.registerUser(userInfo);
    dispatch(actions.addUsers([response]));
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};
const deleteUser = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.deleteUser(id));
    await userApi.deleteUser(id);
  } catch (error) {
    if (error instanceof HttpError) {
      return notificationService.error(`Error ${error.status}`, error.messages);
    }
    throw error;
  }
};

const UsersActionCreator = {
  ...actions,
  getUsers,
  addUser,
  editUser,
  deleteUser,
};

export { UsersActionCreator, reducer };
