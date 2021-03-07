import { createSlice } from '@reduxjs/toolkit';
import { ReducerName, DataStatus, StorageKey } from 'common/enums';
import { AppThunk } from 'common/types';
import { IUserLoginPayload } from 'healthcare-shared/common/interfaces';
import { authApi, storage } from 'services';

type AuthState = {
  user: Record<string, unknown> | null; // TODO: change to User type;
  isAuthorized: boolean;
  DataStatus: DataStatus;
};

const initialState: AuthState = {
  user: null,
  isAuthorized: false,
  DataStatus: DataStatus.IDLE
};

const { reducer, actions } = createSlice({
  name: ReducerName.AUTH,
  initialState,
  reducers: {
    //TODO: create method that will dispatch in login
  },
});

const login = (user: IUserLoginPayload): AppThunk => async () => {
  const token = await authApi.loginUser(user);
  storage.setItem(StorageKey.TOKEN, token);
  // TODO: add setUser and dispatch it
};

const AuthActionCreator = {
  ...actions,
  login,
};

export { AuthActionCreator, reducer };
