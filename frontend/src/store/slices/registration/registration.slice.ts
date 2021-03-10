import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReducerName, DataStatus } from 'common/enums';
import { IUser, IRegisterPayload } from 'common/interfaces';
import { RegistrationApi } from 'services';
import { RegistrationResponse } from 'common/types/responses';

type RegistrationState = {
  user: IUser | null;
  dataStatus: DataStatus;
};

const initialState: RegistrationState = {
  user: null,
  dataStatus: DataStatus.IDLE,
};

const registration = createAsyncThunk(
  'registration',
  async (userData: IRegisterPayload) => {
    const user: RegistrationResponse = await RegistrationApi.registrationUser(userData);
    return user;
  },
);

const { reducer, actions } = createSlice({
  name: ReducerName.REGISTRATION,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

const RegistrationActionCreator = {
  ...actions,
  registration,
};

export { RegistrationActionCreator, reducer };
