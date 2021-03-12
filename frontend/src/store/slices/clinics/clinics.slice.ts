import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName, DataStatus, StorageKey } from 'common/enums';
import { IUser, IUserLoginPayload, IRegisterPayload, IClinic } from 'common/interfaces';
import { authApi, storage } from 'services';
import { LoginResponse } from 'common/types/responses';
import { clinicApi } from 'services';


type ClinicsState = {
  clinics: IClinic[]
};

const initialState: ClinicsState = {
  clinics: []
};

// const login = createAsyncThunk(
//   'auth/login',
//   async (userData: IUserLoginPayload) => {
//     const { token, user }: LoginResponse = await authApi.loginUser(userData);
//     storage.setItem(StorageKey.TOKEN, token);
//     return user;
//   },
// );

// const registration = createAsyncThunk(
//   'auth/registration',
//   async (userData: IRegisterPayload) => {
//     const { token, user } = await authApi.registrationUser(userData);
//     storage.setItem(StorageKey.TOKEN, token);
//     return user;
//   },
// );

const { reducer, actions } = createSlice({
  name: ReducerName.CLINICS,
  initialState,
  reducers: {
    setClinics: (state, action: PayloadAction<IClinic[]>) => {
      state.clinics = action.payload;
    }
  }
});

const getClinics = () => async (dispatch) => {
  const clinics = await clinicApi.getClinics();
  dispatch(actions.setClinics(clinics));
}

const ClinicsActionCreator = {
  ...actions,
  getClinics
};

export { ClinicsActionCreator, reducer };
