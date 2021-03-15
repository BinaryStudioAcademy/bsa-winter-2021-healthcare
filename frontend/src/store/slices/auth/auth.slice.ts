import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName, DataStatus, StorageKey, UserSex, UserType } from 'common/enums';
import { IUser, IUserLoginPayload, IRegisterPayload } from 'common/interfaces';
import { authApi, notificationService, storage } from 'services';
import { LoginResponse } from 'common/types/responses';
import { HttpError } from 'exceptions';


type AuthState = {
  user: IUser | null;
  dataStatus: DataStatus;
};


const user = {
  id:'ghjgjgjhj',
  name: 'Alex',
  surname: 'Zhuk',
  birthdate: '2021-03-05 18:46:02.208+00',
  sex: UserSex.FEMALE,
  type: UserType.PATIENT,
  phone: '0986541198',
  email: 'tre@ert.com',
  password: 'string',
  imagePath: 'https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA',  
  createdAt: '2021-03-05 18:46:02.208+00',
  updatedAt: '2021-03-05 18:46:02.208+00'
}

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
      .addCase(registration.fulfilled, sharedReducer);
  },
});

const AuthActionCreator = {
  ...actions,
  login,
  registration,
};

export { AuthActionCreator, reducer };
