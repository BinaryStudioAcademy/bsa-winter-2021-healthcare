import { createSlice } from '@reduxjs/toolkit';
import { ReducerName, DataStatus, StorageKey } from 'common/enums';
import { AppThunk } from 'common/types';
import { IUser, IUserLoginPayload } from 'common/interfaces';
import { authApi, storage } from 'services';
import { LoginResponse } from 'common/types/responses';

type AuthState = {
  user: IUser | null;
  dataStatus: DataStatus;
};

const initialState: AuthState = {
  user: null,
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions } = createSlice({
  name: ReducerName.AUTH,
  initialState,
  reducers: {
    //TODO: create method that will dispatch in login
  },
});

const login = (userData: IUserLoginPayload): AppThunk => async () => {
  const { token }: LoginResponse = await authApi.loginUser(userData);
  storage.setItem(StorageKey.TOKEN, token);
  // TODO: add setUser and dispatch it
};

const AuthActionCreator = {
  ...actions,
  login,
};

export { AuthActionCreator, reducer };
