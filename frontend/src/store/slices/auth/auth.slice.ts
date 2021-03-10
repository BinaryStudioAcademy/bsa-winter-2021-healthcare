import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReducerName, DataStatus, StorageKey } from 'common/enums';
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

export const login = createAsyncThunk(
  'auth/login',
  async (userData: IUserLoginPayload) => {
    const { token, user }: LoginResponse = await authApi.loginUser(userData);
    storage.setItem(StorageKey.TOKEN, token);
    return user;
  },
);

const { reducer, actions } = createSlice({
  name: ReducerName.AUTH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

const AuthActionCreator = {
  ...actions,
  login,
};

export { AuthActionCreator, reducer };
