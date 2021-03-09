import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { AppThunk } from 'common/types';
import { userApi } from 'services';
import { IUserTypeDoctor } from 'components/doctors-search/common/interfaces'

type DoctorsState = {
  doctors: IUserTypeDoctor[]
  loading: boolean
};

const initialState: DoctorsState = {
  doctors: [],
  loading: true
};

const { reducer, actions } = createSlice({
  name: ReducerName.DOCTORS,
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<IUserTypeDoctor[]>) => {
      state.doctors = action.payload;
      state.loading = false
    },
  },
});

const getDoctorsAsync = (): AppThunk => async (dispatch) => {
  const doctors = await userApi.getDoctors();
  dispatch(actions.setDoctors(doctors));
};

const UsersActionCreator = {
  ...actions,
  getDoctorsAsync
};

export { UsersActionCreator, reducer };
