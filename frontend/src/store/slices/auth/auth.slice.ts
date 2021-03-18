import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName, DataStatus, StorageKey, UserSex, UserType } from 'common/enums';
import { IUser, IUserLoginPayload, IRegisterPayload, IEditUserPayload } from 'common/interfaces';
import { authApi, notificationService, storage, userApi } from 'services';
import { LoginResponse } from 'common/types/responses';
import { HttpError } from 'exceptions';

const user = {
  id:"39169252-c2c8-4bc2-8cd8-2c1092938e",
  name:"Vedmepuh",
  surname:"Kurduplyk",
  birthdate:"2021-03-22T22:00:00.000Z",
  sex:UserSex.FEMALE,
  type:UserType.PATIENT,
  phone:"0956541106",
  email:"test@test.com",
  password:"$2b$10$o0juw1jl.oOODwd0za/zH.LW0ioWR9or0hNt/QPBI6mSiDKzjNBhG",
  imagePath:"https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
  createdAt:"2021-03-15T19:59:44.947Z",
  updatedAt:"2021-03-15T19:59:44.947Z"
}

type AuthState = {
  user: IUser | null;
  dataStatus: DataStatus;
};

const initialState: AuthState = {
  user: user,
  dataStatus: DataStatus.IDLE,
};

const login = createAsyncThunk(
  'auth/login',
  async (userData: IUserLoginPayload) => {
    try {
      const { token, user }: LoginResponse = await authApi.loginUser(userData);
      storage.setItem(StorageKey.TOKEN, token);
      return user;
    } catch(error) {
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
    } catch(error) {
      if (error instanceof HttpError) {
        notificationService.error(`Error ${error.status}`, error.messages);
      }
      throw error;
    }
  },
);

const editCurrentUser = createAsyncThunk(
  'user/:id',
  async (userData: IEditUserPayload) => {
    try {
      const user = await userApi.editUser((userData.id as string), userData);
      return user;
    } catch(error) {
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
  reducers: {},
  extraReducers: (builder) => {
    const sharedReducer = (state: AuthState, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    }
    builder
      .addCase(login.fulfilled, sharedReducer)
      .addCase(registration.fulfilled, sharedReducer)
      .addCase(editCurrentUser.fulfilled, sharedReducer)
  },
});

const AuthActionCreator = {
  ...actions,
  login,
  registration,
  editCurrentUser
};

export { AuthActionCreator, reducer };
