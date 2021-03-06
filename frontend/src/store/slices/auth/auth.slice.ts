import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { AuthState } from 'common/types/app';
import { IUserLoginPayload } from 'healthcare-shared/common/interfaces';
import { authApi } from 'services';

const initialState: AuthState = {
  user: {},
  isAuthorized: false,
  isLoading: true,
};

const { reducer, actions } = createSlice({
  name: ReducerName.AUTH,
  initialState,
  reducers: {
    //TODO: create method that will dispatch in login
  },
});

const setToken = (token: string) => localStorage.setItem('token', token);

const login = (user: IUserLoginPayload): AppThunk => async () => {
  const token = await authApi.loginUser(user);
  setToken(token);
  // TODO: add setUser and dispatch it
};

const AuthActionCreator = {
  ...actions,
  login,
};

export { AuthActionCreator, reducer };
