import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName, DataStatus, StorageKey } from 'common/enums';
import { IUserLoginPayload, IRegisterPayload, IUserWithPermissions } from 'common/interfaces';
import { authApi, notificationService, storage, geolocationService } from 'services';
import { LoginResponse } from 'common/types/responses';
import { HttpError } from 'exceptions';

type AuthState = {
  user: IUserWithPermissions | null;
  dataStatus: DataStatus;
};

const initialState: AuthState = {
  user: null,
  dataStatus: DataStatus.IDLE,
};

const login = createAsyncThunk(
  'auth/login',
  async (userData: IUserLoginPayload) => {
    try {
      const { token, user }: LoginResponse = await authApi.loginUser(userData);
      storage.setItem(StorageKey.TOKEN, token);

      const geolocation = await geolocationService.getByUserId(user.id);
      geolocation ? geolocationService.updateGeolocation(geolocation.id) : geolocationService.addGeolocation(user.id);

      return user;
    } catch (error) {
      if (error instanceof HttpError) {
        notificationService.error(`Error ${error.status}`, error.messages);
      }
      throw error;
    }
  },
);

const registration = createAsyncThunk(
  'auth/registration',
  async (userData: IRegisterPayload) => {
    try {
      const { token, user } = await authApi.registrationUser(userData);
      storage.setItem(StorageKey.TOKEN, token);
      return user;
    } catch (error) {
      if (error instanceof HttpError) {
        notificationService.error(`Error ${error.status}`, error.messages);
      }
      throw error;
    }
  },
);

const { reducer, actions } = createSlice({
  name: ReducerName.AUTH,
  initialState,
  reducers: {
    setUser:(state, action: PayloadAction<IUserWithPermissions>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    const sharedReducer = (
      state: AuthState,
      { payload }: PayloadAction<IUserWithPermissions>,
    ) => {
      state.user = payload;
    };
    builder
      .addCase(login.fulfilled, sharedReducer)
      .addCase(registration.fulfilled, sharedReducer);      
  },
});

const AuthActionCreator = {
  ...actions,
  login,
  registration,
};

export { AuthActionCreator, reducer };
